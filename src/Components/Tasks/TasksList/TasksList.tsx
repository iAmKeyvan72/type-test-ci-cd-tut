import React from 'react';
import { Task } from '../../../Models';

interface TasksListProps {
  list: Task[];
}

export const TasksList: React.FC<TasksListProps> = ({ list }) => {
  return (
    <ul>
      {list.map((item, i) => (
        <li key={item.id + i}>{item.title}</li>
      ))}
    </ul>
  );
};
