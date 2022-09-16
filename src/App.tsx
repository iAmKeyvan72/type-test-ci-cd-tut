import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

const App = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [savedInputs, setSavedInputs] = useState<string[]>([]);

  return (
    <div>
      <Input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <Button
        onClick={() => {
          if (userInput) {
            setSavedInputs((prevList) => [...prevList, userInput]);
            setUserInput('');
          }
        }}
      >
        Create
      </Button>

      <ul>
        {savedInputs?.map((str, i) => (
          <li key={str + i}>{str}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
