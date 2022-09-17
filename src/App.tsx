import { Container, CssBaseline } from '@mui/material';
import React from 'react';
import { Tasks } from './Components/Tasks';

const App: React.FC = () => (
  <Container maxWidth="lg">
    <Tasks />
  </Container>
);

export default App;
