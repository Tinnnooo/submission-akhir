/* eslint-disable react/react-in-jsx-scope */
/**
 * scenario  testing
 *
 * - LoginInput component
 *  - should handle username typing correctly
 *  - should handle password typing correctly
 *  - should call login function when login button is clicked
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle username typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email Address');

    // action
    await userEvent.type(emailInput, 'user@gmail.com');

    // assert
    expect(emailInput).toHaveValue('user@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, 'password');

    // assert
    expect(passwordInput).toHaveValue('password');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email Address');
    await userEvent.type(emailInput, 'user@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'password');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'user@gmail.com',
      password: 'password',
    });
  });
});
