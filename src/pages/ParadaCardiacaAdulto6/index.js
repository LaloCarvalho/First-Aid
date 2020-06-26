import React, {useEffect} from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';
import { AntDesign } from "@expo/vector-icons";


const ParadaCardiacaAdulto6 = () => {
    const navigation = useNavigation();

    useEffect(()=>{speak()},[])

    function speak() {
        var thingToSay = 'DEPOIS DE TUDO ISSO VOCÊ VAI COMEÇAR AS MANOBRAS. COM A PARTE DE BAIXO DA MÃO VOCE VAI COMPRIMIR O OSSO QUE FICA NO MEIO DO PEITO DA PESSOA DE 100 A 120 VEZES POR MINUTO TENTANDO AFUNDAR 5 CENTÍMETROS SEM PARAR ATÉ O SAMU CHEGAR OU O APARELHO DE CHOQUE, CASO TENHA NO LOCAL.';
        Speech.speak(thingToSay);
      }

    function handleMudaTela(){
        Speech.stop();
        navigation.navigate('Principal')
    }

    function handleMudaTela1(){
        Speech.stop();
        navigation.navigate('ParadaCardiacaAdulto5')
    }

    function handleMudaTela2(){
        Speech.stop();
        navigation.navigate('ParadaCardiacaAdulto7')
    }

    return(
        <View style={styles.container}>
        <View style={styles.header}>
             <Icon name="home" size={50} color="green" onPress={handleMudaTela}/>
             <AntDesign name="sound" size={50} color="blue" onPress={speak}/>
        </View>

        <View style={styles.body}>
          <Image source={require('../../../assets/ParadaCardiacaAdulto/pp.png')} style = {{ width: 264, height: 356 }}/>
        </View>

        <View style={styles.footer}>
             <Icon name="arrow-circle-left" size={100} color="#CCCC00" onPress={handleMudaTela1}/>
             <Icon name="arrow-circle-right" size={100} color="#CCCC00" onPress={handleMudaTela2}/>
        </View>
        
        </View>
        

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#ecf0f1',
      backgroundColor: 'white'
    },
    header: {
        flex: 1,
        flexDirection:'row',
        padding: 30,
        justifyContent: 'space-between',
      },
      footer: {
        flex: 2,
        flexDirection:'row',
        padding: 20,
        justifyContent: 'space-between',
      },
      body: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }
  });

export default ParadaCardiacaAdulto6;