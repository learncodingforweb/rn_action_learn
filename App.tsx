import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Home Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;
