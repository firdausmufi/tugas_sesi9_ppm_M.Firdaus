
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyInput from '../components/MyInput';

describe('MyInput', () => {
  it('renders with initial value', () => {
    const { getByDisplayValue } = render(<MyInput value="Hello" onChangeText={() => {}} />);
    expect(getByDisplayValue('Hello')).toBeTruthy();
  });

  it('calls onChangeText when text is changed', () => {
    const onChangeTextMock = jest.fn();
    const { getByDisplayValue } = render(<MyInput value="" onChangeText={onChangeTextMock} />);
    
    const input = getByDisplayValue('');
    fireEvent.changeText(input, 'New Text');
    expect(onChangeTextMock).toHaveBeenCalledWith('New Text');
  });
});
