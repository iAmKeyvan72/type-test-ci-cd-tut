import React from 'react';
import { render, screen } from '@testing-library/react';
import { TasksList } from './TasksList';

describe('Tests TasksList Component', () => {
  it('should render a list of tasks', () => {
    render(<TasksList list={['task_1']} />);

    expect(screen.getByText('task_1')).toBeInTheDocument();
  });
});
