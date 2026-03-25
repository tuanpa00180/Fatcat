import Redis from 'ioredis';

// Biến global để giữ kết nối không bị khởi tạo lại nhiều lần (Singleton Pattern)
const globalForRedis = global as unknown as { redis: Redis };

export const redis = globalForRedis.redis || new Redis(process.env.REDIS_URL as string, {
  // Cấu hình để chịu tải tốt hơn trên Serverless
  connectTimeout: 10000,
  maxRetriesPerRequest: 3,
});

if (process.env.NODE_ENV !== 'production') globalForRedis.redis = redis;