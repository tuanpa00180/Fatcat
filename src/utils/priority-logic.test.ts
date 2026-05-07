// src/utils/priority-logic.test.ts
import { describe, it, expect } from 'vitest';
import { sortTasks } from './priority-logic';
import { Task } from '@/data/task-store';

describe('Kiểm tra logic sắp xếp', () => {
  it('phải đưa nhiệm vụ ưu tiên 1 lên trước ưu tiên 2', () => {
    const mockTasks = [
      { id: 'A', priority: 2, createdAt: new Date() },
      { id: 'B', priority: 1, createdAt: new Date() }
    ] as Task[];
    
    const result = sortTasks(mockTasks);
    expect(result[0].id).toBe('B');
  });
});