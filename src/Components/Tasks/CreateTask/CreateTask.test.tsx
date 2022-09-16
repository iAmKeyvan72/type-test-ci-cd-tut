import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreateTask } from './CreateTask';

describe('Test the CreateTask Component', () => {
  it('should trigger the onSubmit function with a valid input', async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();

    render(<CreateTask onSubmit={onSubmit} />);

    const inputEl = screen.getByRole('textbox');
    const createButton = screen.getByRole('button');

    await user.click(inputEl);
    await user.keyboard('Hoy Task');
    await user.click(createButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should not trigger the onSubmit function with an invalid input', async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();

    render(<CreateTask onSubmit={onSubmit} />);

    const createButton = screen.getByRole('button');

    await user.click(createButton);

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it('should clear the task title after submission with a valid input', async () => {
    const user = userEvent.setup();

    render(<CreateTask onSubmit={() => new Promise((res) => res(undefined))} />);

    const inputEl = screen.getByRole('textbox');
    const createBtn = screen.getByRole('button');

    await user.click(inputEl);
    await user.keyboard('Hey Man');
    await user.click(createBtn);

    expect(inputEl).toHaveValue('');
  });

  it('should not clear the task title if the submission is not successful', async () => {
    const user = userEvent.setup();

    render(<CreateTask onSubmit={() => new Promise((_res, rej) => rej('No Reason'))} />);

    const inputEl = screen.getByRole('textbox');
    const createBtn = screen.getByRole('button');

    await user.click(inputEl);
    await user.keyboard('Test Failure!');
    await user.click(createBtn);

    expect(inputEl).toHaveValue('Test Failure!');
  });
});
