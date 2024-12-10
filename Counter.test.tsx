
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Counter from '../components/Counter';

describe('Counter', () => {
  it('renders with initial count', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('0')).toBeTruthy();
  });

  it('increments count when button is pressed', () => {
    const { getByText } = render(<Counter />);
    const button = getByText('Increment');

    fireEvent.press(button);
    expect(getByText('1')).toBeTruthy();

    fireEvent.press(button);
    expect(getByText('2')).toBeTruthy();
  });
});
