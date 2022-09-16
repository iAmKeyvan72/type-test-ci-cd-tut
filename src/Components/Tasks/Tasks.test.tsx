import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tasks } from './Tasks';

describe('tests the Tasks root component', () => {
  it('should correctly display the created item on the screen', async () => {
    const user = userEvent.setup();

    render(<Tasks />);
    const itemDescription = screen.getByRole('textbox');
    const createButton = screen.getByRole('button');

    await user.click(itemDescription);
    await user.keyboard('Hoy');
    await user.click(createButton);

    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByText('Hoy')).toBeInTheDocument();

    await user.click(itemDescription);
    await user.keyboard('Here is the second one');
    await user.click(createButton);

    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByText('Here is the second one')).toBeInTheDocument();
  });

  it('should not add empty item to the list', async () => {
    const user = userEvent.setup();
    render(<Tasks />);

    const itemDescription = screen.getByRole('textbox');
    const createButton = screen.getByRole('button');

    await user.click(itemDescription);
    await user.keyboard('Hoy');
    await user.click(createButton);

    expect(screen.getByRole('textbox')).toHaveValue('');

    await user.click(createButton); // Tries add an empty item
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });

  it('should allow user to have similar name items', async () => {
    const user = userEvent.setup();
    render(<Tasks />);

    const inputElement = screen.getByRole('textbox');
    const createButton = screen.getByRole('button');

    await user.click(inputElement);
    await user.keyboard('Hoy');
    await user.click(createButton);

    // Make similar items
    await user.click(inputElement);
    await user.keyboard('Hoy');
    await user.click(createButton);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
