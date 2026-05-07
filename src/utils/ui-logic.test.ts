import { describe, it, expect } from 'vitest';
import { canCreateTask } from './priority-logic';
import { Task } from '@/data/task-store';

describe('Logic Giao diện (UI)', () => {
  it('nên trả về false khi danh sách đã đạt giới hạn 20', () => {
    const fullTasks = Array(20).fill({ id: 'any' }) as Task[];
    expect(canCreateTask(fullTasks)).toBe(false);
  });

  it('nên trả về true khi danh sách còn trống', () => {
    const emptyTasks: Task[] = [];
    expect(canCreateTask(emptyTasks)).toBe(true);
  });
});