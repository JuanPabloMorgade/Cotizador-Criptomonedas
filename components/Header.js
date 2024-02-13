import React from 'react'
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

const Header = () => {
  return (
    <Text style={styles.encabezado}>Criptomonedas</Text>
  )
}
const styles = StyleSheet.create({
    encabezado:{
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        paddingBottom: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: '900',
        color: '#FFF',
        marginBottom: 30
    },
})
export default Header