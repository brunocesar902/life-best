import React from 'react'
import { Text, View } from 'react-native'
import estilos from"./estilo"

export default function Titulo() {
  return (
    <View style={estilos.boxTitle}>
      <Text style={estilos.textTitle}>LIFE BEST</Text>
      <Text style={estilos.textSubTitle}>Sua calculadora de IMC</Text>
    </View>
  )
}