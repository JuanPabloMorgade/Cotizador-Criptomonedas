import React, {useState, useEffect} from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

const Cotizacion = ({resultado}) => {
  return (
    <View style={styles.resultado}>

      <Text style={styles.texto}> Precio del {resultado.FROMSYMBOL} : {''}
        <Text style={styles.precio}> {resultado.PRICE} </Text>
      </Text>

      <Text style={styles.texto}> Precio más alto del dia: {''}
        <Text style={styles.span}> {resultado.HIGHDAY} </Text>
      </Text>

      <Text style={styles.texto}> Precio más bajo del dia: {''}
        <Text style={styles.span}> {resultado.LOWDAY} </Text>
      </Text>

      <Text style={styles.texto}> Variación últimas 24 Horas: {''}
        <Text style={styles.span}> {resultado.CHANGEPCT24HOUR}% </Text>
      </Text>

      <Text style={styles.texto}> Última actualización: {''}
        <Text style={styles.span}> {resultado.LASTUPDATE} </Text>
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    resultado: {
      backgroundColor: '#5E49E2',
      padding: 20,
    },
    texto:{
      color: '#FFF',
      fontFamily: 'Lato-Regular',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 8,

    },
    precio:{
      fontSize: 30,
      fontWeight:'900'
    },
    span:{
    fontFamily: 'Lato-Black',
    fontWeight: '900',
    color:'#FFF'

    },

  })

export default Cotizacion