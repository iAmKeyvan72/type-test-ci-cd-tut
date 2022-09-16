import React, { useState } from 'react';
import { CreateTask } from './CreateTask';

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
      <ul>
        {savedInputs?.map((str, i) => (
          <li key={str + i}>{str}</li>
        ))}
      </ul>
    </div>
  );
};
