import React from 'react';
import useTasks from '../../Hooks/useTasks';
import { CreateTask } from './CreateTask';
import { TasksList } from './TasksList';

export const Tasks: React.FC = () => {
  const { data, createTasks } = useTasks();

  return (
    <>
      <CreateTask onSubmit={(title) => createTasks(title)} />
      <TasksList list={data} />
    </>
  );
};
