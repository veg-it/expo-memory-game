import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import { theme } from '../styles/Colors'

export default function Main() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={[styles.mainText, {fontSize: 24, marginBottom: 15, textTransform: 'uppercase'}]}>memory game</Text>
      <TouchableOpacity
        style={{
          width: 100,
          paddingVertical: 15,
          borderWidth: 1,
          borderColor: theme.MainTextColor,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10
        }}
        onPress={() => navigation.navigate('Game', { mode: 1 })}>
        <Text style={styles.mainText}>Легка</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
            width: 100,
            paddingVertical: 15,
            borderWidth: 1,
            borderColor: theme.MainTextColor,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10
          }}
        onPress={() => navigation.navigate('Game', { mode: 2 })}>
        <Text style={styles.mainText}>Складна</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.MainColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    color: theme.MainTextColor,
    fontSize: 18
  },
})
