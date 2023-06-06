import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { theme } from '../styles/Colors'
import Card from '../components/Card'
import { useNavigation } from '@react-navigation/native'


let cards = []

export default function Game({ route }) {
  const navigation = useNavigation()

  useEffect(() => {
    if (route.params.mode == 1) {
      cards = ['🍎', '🍏', '🍌', '🍊', '🍍', '🍋']
    }
    if (route.params.mode == 2) {
      cards = ['🍎', '🍏', '🍌', '🍊', '🍍', '🍋', '🍇', '🥝', '🍓']
    }
    if (route.params.mode == 3) {
      cards = ['🍎', '🍏', '🍌', '🍊', '🍍', '🍋', '🍇', '🥝', '🍓']
    }
    setDesk(() => remix([...cards, ...cards]))
  }, [route.params.mode])

  const [desk, setDesk] = useState(() => remix([...cards, ...cards]))
  const [matchedCards, setMatchedCards] = useState([])
  const [selectedCards, setSelectedCards] = useState([])

  const onCardSelect = (index) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return
    setSelectedCards([...selectedCards, index])
  }

  useEffect(() => {
    if (selectedCards.length < 2) return

    if (desk[selectedCards[0]] == desk[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards])
      setSelectedCards([])
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [selectedCards])

  useEffect(() => {
    if (matchedCards.length == cards.length * 2) {
      navigation.navigate('Finish')
    }
  }, [matchedCards])

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {desk.map((card, index) => {
          const matched =
            selectedCards.includes(index) || matchedCards.includes(index)
          return (
            <TouchableOpacity key={index} onPress={() => onCardSelect(index)}>
              <Card img={card} index={index} matched={matched} />
            </TouchableOpacity>
          )
        })}
      </View>
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
  text: {
    color: theme.MainTextColor,
  },
})

function remix(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randIndex = Math.floor(Math.random() * (i + 1))

    ;[array[i], array[randIndex]] = [array[randIndex], array[i]]
  }
  return array
}
