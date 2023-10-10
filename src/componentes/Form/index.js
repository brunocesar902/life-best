import React, { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import ResultadoImc from './ResultadoImc/'
import styles from './estilo'

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o Peso e a Altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [categoria, setCategoria] = useState(null)

    const calculaImc = () => {
        const calculoImc = weight/(height*height)

        if(calculoImc < 18.5) {
            return setImc(calculoImc.toFixed(2)), setCategoria('** Abaixo do peso **')
        } else if (calculoImc < 24.9) {
            return setImc(calculoImc.toFixed(2)), setCategoria('** Peso ideal **')
        } else if (calculoImc < 29.9) {
            return setImc(calculoImc.toFixed(2)), setCategoria('** Acima do peso **')
        } else if (calculoImc < 34.9) {
            return setImc(calculoImc.toFixed(2)), setCategoria('** Obesidade I **')
        } else if (calculoImc < 39.9) {
            return setImc(calculoImc.toFixed(2)), setCategoria('** Obesidade II **')
        } else if (calculoImc > 40) {
            return setImc(calculoImc.toFixed(2)), setCategoria('** Obesidade III **')
        }
    }

    const validaImc = () => {
        if(weight && height) {
            calculaImc()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu IMC é: ')
            setTextButton('Calcular Novamente')
            return
        }
        setImc(null)
        setCategoria(null)
        setTextButton('Calcular')
        setMessageImc('Preencha o Peso e a Altura')
    }

  return (
    <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.fromLabel}>Altura:</Text>
            <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder='Ex. 1.78m'
            keyboardType='numeric'
            />
            
            <Text style={styles.fromLabel}>Peso:</Text>
            <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder='Ex. 80.100kg'
            keyboardType='numeric'
            />

            <TouchableOpacity
            style={styles.buttonCalculador}
            onPress={() => {
                validaImc()
            }}>

            <Text style={styles.textButtonCalculador}>{textButton}</Text>
            </TouchableOpacity>
        </View>
        <ResultadoImc messageResultadoImc={messageImc} ResultadoImc={imc} resultadoCategoria={categoria}/> 
    </View>
  )
}