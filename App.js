import React from 'react';
import {useState, useEffect} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import Formulario from './components/Formulario';
import Header from './components/Header';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';

const App = () => {

  const [moneda, guardarMoneda] = useState ('');
  const [criptomoneda, guardarCriptomoneda] = useState('');

  const [consultarApi, guardarConsultarApi] = useState(false); 
  const [resultado, guardarResultado] = useState ({});

  const [cargando, guardarCargando] = useState(false);
 
  useEffect (() =>{
      const cotizarCriptomoneda = async () => {
        if(consultarApi){
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
          const resultado = await axios.get(url);

          guardarCargando(true);

          setTimeout( () => {

            guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
            guardarConsultarApi(false);
            guardarCargando(false)

          }, 2500)

        }

      }
      cotizarCriptomoneda();
  }, [consultarApi]);

  const componente = cargando ? <ActivityIndicator size="large" color="#5E49E2"/> : <Cotizacion resultado={resultado}/> 

  return (
    <>
      <ScrollView>

      
      <Header />

      
      <Image style={styles.imagen}
        source={require('./assets/img/Criptogilada.jpg')}
      />

      <View style={styles.contenido}>
         <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
            guardarConsultarApi={guardarConsultarApi}
         />

      </View>
      <View style={{marginTop: 40}}>

      {componente}

      </View>

      </ScrollView>   
    </>
  );
};

const styles = StyleSheet.create({
  imagen:{
    width: '100%',
    height: 190,
    marginHorizontal: 1
  },
  contenido:{
    marginHorizontal: '2.5%',
    
  },
})

export default App;
