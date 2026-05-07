// src/utils/priority-logic.ts
import { Task } from '@/data/task-store';

/**
 * Hàm sắp xếp nhiệm vụ theo 2 tiêu chí:
 * 1. Độ ưu tiên (Priority): Số nhỏ hơn (1 - Ngay lập tức) lên trước.
 * 2. Thời gian tạo (CreatedAt): Nếu ưu tiên bằng nhau, cái nào tạo trước (cũ hơn) lên trước.
 */
export const sortTasks = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => {
    // So sánh độ ưu tiên
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    // Nếu bằng ưu tiên, so sánh thời gian tạo (tăng dần)
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
};

/**
 * Kiểm tra xem người dùng còn được phép tạo nhiệm vụ hay không
 */
export const canCreateTask = (tasks: Task[], limit: number = 20): boolean => {
  return tasks.length < limit;
};