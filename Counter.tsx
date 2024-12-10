
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Counter;
