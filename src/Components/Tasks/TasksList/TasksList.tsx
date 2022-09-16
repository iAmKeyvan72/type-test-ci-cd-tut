import React from 'react';

interface TasksListProps {
  list: string[];
}

export const TasksList: React.FC<TasksListProps> = ({ list }) => {
  return (
    <ul>
      {list?.map((item, i) => (
        <li key={item + i}>{item}</li>
      ))}
    </ul>
  );
};
