import { Button, Input } from '@mui/material';
import React, { useState } from 'react';

interface CreateTaskProps {
  onSubmit: (task: string) => Promise<void>;
}

export const CreateTask: React.FC<CreateTaskProps> = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState<string>('');

  return (
    <>
      <Input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
      <Button
        onClick={async () => {
          if (taskTitle) {
            try {
              await onSubmit(taskTitle);
              setTaskTitle('');
            } catch (err) {
              console.log(err);
            }
          }
        }}
      >
        Create
      </Button>
    </>
  );
};
