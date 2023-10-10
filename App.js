import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import Titulo from './src/componentes/titulo/titulo'
import Form from './src/componentes/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFD700"
      />
      <Titulo/>
      <Form/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    paddingTop: 80
  },
})
