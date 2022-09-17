import { Button, Input } from '@mui/material';
import React, { useState } from 'react';

interface CreateTaskProps {
  onSubmit: (task: string) => Promise<void>;
}

export const CreateTask: React.FC<CreateTaskProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>('');

  return (
    <>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button
        onClick={async () => {
          if (title) {
            try {
              await onSubmit(title);
              setTitle('');
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
