import { redis } from '@/lib/redis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { challengeId, date } = await request.json(); // date có định dạng YYYY-MM-DD

    if (!challengeId || !date) {
      return NextResponse.json({ error: "Thiếu ID thử thách hoặc ngày check-in" }, { status: 400 });
    }

    // 1. Lấy dữ liệu thử thách hiện tại từ Redis
    const data = await redis.hget('fatcat_challenges', challengeId);
    
    if (!data) {
      return NextResponse.json({ error: "Không tìm thấy thử thách này" }, { status: 404 });
    }

    const challenge = JSON.parse(data);

    // 2. Kiểm tra xem ngày này đã check-in chưa (tránh trùng lặp)
    if (challenge.history.includes(date)) {
      return NextResponse.json({ message: "Ngày này bạn đã điểm danh rồi nhé! 🐱" }, { status: 400 });
    }

    // 3. Cập nhật lịch sử check-in
    challenge.history.push(date);

    // 4. Tính toán Streak (Số ngày liên tục) - Logic QA để đảm bảo tính chính xác
    challenge.currentStreak = calculateStreak(challenge.history);
    
    // Kiểm tra nếu đạt mục tiêu
    if (challenge.currentStreak >= challenge.targetValue) {
      challenge.isCompleted = true;
      challenge.completedAt = new Date().toISOString();
    }

    // 5. Lưu ngược lại vào Redis
    await redis.hset('fatcat_challenges', challengeId, JSON.stringify(challenge));

    return NextResponse.json({ 
      success: true, 
      currentStreak: challenge.currentStreak,
      isCompleted: challenge.isCompleted 
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Hàm bổ trợ để tính chuỗi ngày liên tiếp (Streak)
function calculateStreak(dates: string[]): number {
  if (dates.length === 0) return 0;
  
  // Sắp xếp ngày tăng dần
  const sortedDates = dates.map(d => new Date(d).getTime()).sort((a, b) => a - b);
  
  let streak = 1;
  for (let i = sortedDates.length - 1; i > 0; i--) {
    const diff = (sortedDates[i] - sortedDates[i-1]) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      streak++;
    } else {
      break; // Chuỗi bị ngắt
    }
  }
  return streak;
}