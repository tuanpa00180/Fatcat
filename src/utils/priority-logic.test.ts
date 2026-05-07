import { describe, it, expect } from 'vitest'; // Import trực tiếp ở đây
import { sortTasks } from './priority-logic';
import { Task } from '@/data/task-store';

describe('Hàm sortTasks', () => {
  it('nên ưu tiên nhiệm vụ mức 1 lên trên mức 4', () => {
    const tasks = [
      { id: '1', priority: 4, createdAt: new Date('2026-01-01') },
      { id: '2', priority: 1, createdAt: new Date('2026-01-01') }
    ] as Task[];
    
    const result = sortTasks(tasks);
    expect(result[0].priority).toBe(1);
  });
});