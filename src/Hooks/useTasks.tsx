import { useState } from 'react';
import { Task } from '../Models';

interface Tasks {
  data: Task[];
  createTasks: (title: string) => Promise<void>;
}

const useTasks = (): Tasks => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTasks = (newTile: string) =>
    new Promise<void>((resolve) => {
      setTasks((prevTasks) => [...prevTasks, new Task(newTile)]);
      resolve(undefined);
    });

  return {
    data: tasks,
    createTasks,
  };
};

export default useTasks;
