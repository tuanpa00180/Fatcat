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

// Giả lập Database trong bộ nhớ
export const tasks: Task[] = []; 

/**
 * Tìm kiếm nhiệm vụ theo ID
 */
export const getPostById = (id: string): Task | undefined => {
  return tasks.find(task => task.id === id);
};

/**
 * Lưu hoặc cập nhật nhiệm vụ
 */
export const saveTask = (taskData: Task) => {
  const index = tasks.findIndex(t => t.id === taskData.id);
  if (index !== -1) {
    tasks[index] = { ...taskData, updatedAt: new Date() };
  } else {
    tasks.push(taskData);
  }
};