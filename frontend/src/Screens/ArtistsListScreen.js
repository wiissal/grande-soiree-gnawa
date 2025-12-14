import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function ArtistsListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Artists List Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20,
    color: colors.deepTeal,
    fontWeight: 'bold',
  },
});