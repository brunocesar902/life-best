import React from 'react'
import { Text, View } from 'react-native'
import styles from './estilo'

export default function ResultadoImc(props) {
  return (
    <View style={styles.resultadoImc}>
      <Text style={styles.informacao}>{props.messageResultadoImc}</Text>
      <Text style={styles.numberImc}>{props.ResultadoImc}</Text>
      <Text style={styles.styleCategoriaImc}>{props.resultadoCategoria}</Text>
    </View>
  )
}