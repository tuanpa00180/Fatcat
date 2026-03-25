import { redis } from '@/lib/redis';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await redis.set('health_check', 'Cai nước ngọt ngày 1: Thành công! 🐱🥤');
    const value = await redis.get('health_check');
    return NextResponse.json({ message: value });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}