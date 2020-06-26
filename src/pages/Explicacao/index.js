import React, {useEffect} from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';
import { AntDesign } from "@expo/vector-icons";

const Explicacao = () => {
    const navigation = useNavigation();
    const rotas = useRoute();
    const {newRoute} = rotas.params;

    useEffect(()=>{speak()},[])

    function speak() {
        var thingToSay = 'VÁRIAS PESSOAS MORREM POR DIA POR FALTA DE SOCORRO. COM ESSE APLICATIVO VOCE APRENDE O QUE DEVE FAZER COM ESSAS SITUAÇÕES. ANTES DE SOCORRER VOCÊ TEM QUE REPARAR NO LOCAL SE ESTÁ SEGURO PARA VOCÊ SOCORRER, SE NÃO VOCÊ SERÁ OUTRA VÍTIMA';
        Speech.speak(thingToSay);
      }

    function handleMudaTela(){
        Speech.stop();
        navigation.navigate('Principal')
    }

    function handleMudaTela1(){
        Speech.stop();
        //navigation.navigate('Principal')
        navigation.goBack();
    }

    function handleMudaTela2(){
        Speech.stop();        
        navigation.navigate(newRoute)
    }

    return(
        <View style={styles.container}>

        <View style={styles.header}>
                <Icon name="home" size={50} color="green" onPress={handleMudaTela}/>
                <AntDesign name="sound" size={50} color="blue" onPress={speak}/>
        </View>

        <View style={styles.body}>
          <Image source={require('../../../assets/Explicacao/triangulo.png')} style = {{ width: 200, height: 193 }}/>
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

export default Explicacao;