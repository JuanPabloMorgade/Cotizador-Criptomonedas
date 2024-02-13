import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableHighlight,
    Alert,
    Pressable
  } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const Formulario = ({moneda, criptomoneda, guardarMoneda, guardarCriptomoneda, guardarConsultarApi}) => {

    const [criptomonedas, guardarCriptomonedas] = useState([]);
    
    useEffect(() =>{
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
         }
         consultarApi();
    }, []);

    const obtenerMoneda = moneda =>{
        guardarMoneda(moneda)
    }


    const obtenerCriptoMoneda = cripto =>{
        guardarCriptomoneda(cripto)
    }

    const cotizarPrecio = () => {
        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            mostrarAlerta();
           return;
        }

        guardarConsultarApi(true);
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error...',

            'Ambos campos son obligatorios',
            [
                {text: 'OK'}
            ]
        )
    }

  return (
    <View>
        <Text style={styles.label}>Moneda</Text>
            <Picker 
            selectedValue={moneda}
            onValueChange={ moneda => obtenerMoneda(moneda) }>
                <Picker.Item label='- Seleccione -' value=""/>
                <Picker.Item label='Dolar EEUU' value="USD"/>
                <Picker.Item label='Peso Argentino' value="ARS"/>
                <Picker.Item label='Euro' value="EUR"/>
                <Picker.Item label='Libra' value="GBP"/>
            </Picker> 
        <Text style={styles.label}>CriptoMoneda</Text>

        <Picker 
            selectedValue={criptomoneda}
            onValueChange={ cripto => obtenerCriptoMoneda(cripto) }>
                <Picker.Item label='- Seleccione -' value=""/>
                { criptomonedas.map(cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
                ))}
            </Picker> 
            
            <TouchableHighlight 
                style={styles.btnCotizar}
                onPress={() => cotizarPrecio()}        
            >
                <Text style={styles.textoCotizar}>Cotizar</Text>
            </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
    label:{
        fontFamily: 'Lato-Black',
        fontSize: 22,
        marginVertical: 20,
        textTransform: 'uppercase',
        color: '#000',
        fontWeight: '800',

    },
    btnCotizar:{
        backgroundColor:'#5E49E2',
        padding: 10,
        marginTop: 20,
        color: '#FFF',
        borderRadius:10
    },
    textoCotizar:{
        color: '#FFF',
        fontWeight: '800',
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
  })

export default Formulario