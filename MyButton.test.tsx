
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyButton from '../components/MyButton';

describe('MyButton', () => {
  it('renders correctly with given title', () => {
    const { getByText } = render(<MyButton title="Click Me" onPress={() => {}} />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<MyButton title="Click Me" onPress={onPressMock} />);
    
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
