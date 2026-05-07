// src/utils/priority-logic.ts
import { Task } from '@/data/task-store';

export const sortTasks = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => {
    // Ưu tiên theo mức độ 1 -> 7
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    // Nếu mức độ bằng nhau, ai đến trước làm trước (Thời gian tạo)
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
};

export const canCreateTask = (tasks: Task[]): boolean => tasks.length < 20;