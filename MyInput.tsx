import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface MyInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const MyInput: React.FC<MyInputProps> = ({value, onChangeText}) => {
  return (
    <TextInput style={styles.input} value={value} onChangeText={onChangeText} />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
});

export default MyInput;
