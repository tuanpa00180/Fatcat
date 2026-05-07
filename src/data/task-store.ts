// src/data/task-store.ts

export type Priority = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Task {
  id: string;
  type: 'work' | 'personal';
  summary: string;
  description: string;
  imageUrl: string;
  priority: Priority;
  createdAt: Date;
  updatedAt?: Date;
  lastDescriptionChange?: string;
}

// Khởi tạo danh sách trống
export const tasks: Task[] = [];

// Hàm hỗ trợ tìm kiếm nhanh
export const getPostById = (id: string): Task | undefined => {
  return tasks.find(t => t.id === id);
};

// Hàm lưu trữ
export const saveTask = (taskData: Task) => {
  const index = tasks.findIndex(t => t.id === taskData.id);
  if (index !== -1) {
    tasks[index] = { ...taskData, updatedAt: new Date() };
  } else {
    tasks.push(taskData);
  }
};