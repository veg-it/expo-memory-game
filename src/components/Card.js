import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { theme } from '../styles/Colors';

export default function Card({ img, index, matched }) {
  return (
    <View
      style={{
        marginHorizontal: 5,
        marginVertical: 5,
      }}>
      <View style={styles.container}>
        {matched ? (
          <Text style={styles.paragraph}>{img}</Text>
        ) : (
          <Text style={styles.paragraph}>?</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderColor: theme.MainTextColor,
    width: 100,
    height: 100,
  },
  paragraph: {
    marginTop: 0,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.MainTextColor
  },
});
