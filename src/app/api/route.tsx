import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { challengeId, date } = await request.json();
  
  // Lưu vào database của Vercel
  await kv.sadd(`challenge:${challengeId}:history`, date);
  
  // Trả kết quả về cho Frontend
  return NextResponse.json({ message: "Check-in thành công!" });
}