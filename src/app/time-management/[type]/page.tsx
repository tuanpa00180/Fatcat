"use client";
import { useState } from 'react';
import { tasks as initialTasks } from '@/data/task-store';
import { sortTasks } from '@/utils/priority-logic';
import TaskPopup from '@/components/TaskPopup';
import TaskCard from '@/components/TaskCard';
import Link from 'next/link';

export default function TaskListPage({ params }: { params: { type: 'work' | 'personal' } }) {
  const [showPopup, setShowPopup] = useState(false);
  
  // Lọc nhiệm vụ theo loại và sắp xếp theo bộ não logic
  const filteredTasks = initialTasks.filter(t => t.type === params.type);
  const sortedTasks = sortTasks(filteredTasks);
  const isFull = filteredTasks.length >= 20;

  return (
    <div className="max-w-4xl mx-auto p-8">
       {/* Nội dung Header và List như cũ */}
       {/* ... */}
    </div>
  );
}