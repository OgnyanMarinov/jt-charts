import React from 'react';
import { View, StyleSheet } from 'react-native';
import StockChart from './StockWrapper';

const AppOld = () => {
  return (
    <View style={styles.container}>
      <StockChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    // backgroundColor: 'black'
  },
});

export default AppOld;
