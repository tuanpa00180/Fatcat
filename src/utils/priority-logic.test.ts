// src/utils/priority-logic.test.ts
import { sortTasks } from './priority-logic';
import { Task } from '@/data/task-store';

describe('Hệ thống sắp xếp ưu tiên', () => {
  it('đưa nhiệm vụ "Ngay lập tức" (priority 1) lên đầu danh sách', () => {
    const tasks = [
      { id: '1', priority: 4, createdAt: new Date('2026-05-08') },
      { id: '2', priority: 1, createdAt: new Date('2026-05-08') }
    ] as Task[];
    
    const result = sortTasks(tasks);
    expect(result[0].priority).toBe(1);
  });
});