import React, { useState } from 'react';
import { CreateTask } from './CreateTask';
import { TasksList } from './TasksList';

export const Tasks: React.FC = () => {
  const [savedInputs, setSavedInputs] = useState<string[]>([]);

  return (
    <div>
      <CreateTask
        onSubmit={(title) =>
          new Promise((res) => {
            setSavedInputs((oldSaved) => [...oldSaved, title]);
            res(undefined);
          })
        }
      />
      <TasksList list={savedInputs} />
    </div>
  );
};
