import { redis } from '@/lib/redis';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid'; // Cài bằng: npm install uuid && npm install --save-dev @types/uuid

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const challengeId = uuidv4();
    
    const newChallenge = {
      id: challengeId,
      ...body,
      isActive: true,
      history: [], // Mảng lưu các ngày đã check-in
      createdAt: new Date().toISOString()
    };

    // Lưu vào Redis (Sử dụng Hash để truy xuất nhanh theo ID)
    await redis.hset('fatcat_challenges', challengeId, JSON.stringify(newChallenge));

    return NextResponse.json({ success: true, challenge: newChallenge });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = await redis.hgetall('fatcat_challenges');
    // Chuyển object từ Redis thành mảng để Frontend dễ dùng
    const challenges = Object.values(data || {}).map(item => JSON.parse(item as string));
    return NextResponse.json(challenges);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}