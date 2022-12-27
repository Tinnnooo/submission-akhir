/**
 * scenario RegisterInput test
 *
 * - RegisterInput component
 *
 *  - should handle username typing correctly
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should call register function when register button is clicked
 */

import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';
import '@testing-library/jest-dom';

describe('RegisterInput component', () => {
  it('should handle username typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Full Name');

    // action
    await userEvent.type(usernameInput, 'Username');

    // assert
    expect(usernameInput).toHaveValue('Username');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email Address');

    // action
    await userEvent.type(emailInput, 'user@gmail.com');

    // assert
    expect(emailInput).toHaveValue('user@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, 'password');

    // assert
    expect(passwordInput).toHaveValue('password');
  });

  it('should call register function when register button clicked', async () => {
    // arrange
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);
    const usernameInput = await screen.getByPlaceholderText('Full Name');
    await userEvent.type(usernameInput, 'Username');
    const emailInput = await screen.getByPlaceholderText('Email Address');
    await userEvent.type(emailInput, 'user@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'password');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // action
    await userEvent.click(registerButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      name: 'Username',
      email: 'user@gmail.com',
      password: 'password',
    });
  });
});
