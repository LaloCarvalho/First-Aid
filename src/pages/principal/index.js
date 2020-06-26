import React, {useEffect} from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';
import { AntDesign } from "@expo/vector-icons";

const Principal = () => {
    const navigation = useNavigation();

    useEffect(()=>{speak()},[])

    function speak() {
        var thingToSay = 'AGORA VOCÊ DEVE ESCOLHER O QUE VOCÊ QUER APRENDER. NA PRIMEIRA IMAGEM TEM O QUE FAZER EM CASO DE SANGRAMENTOS. NA SEGUNDA E TERCEIRA VOCÊ APRENDE SOBRE PARADA CARDÍACA EM BEBÊS E ADULTOS. NA QUARTA E NA QUINTA SOBRE ENGASGO EM ADULTO E EM BEBÊS. PARA VOLTAR PARA ESSA TELA É SÓ APERTAR NO VERDE QUANDO VOCÊ QUISER.';
        Speech.speak(thingToSay);
      }

    function handleMudaTela(){
        Speech.stop();
        navigation.navigate('Home')
    }

    function handleMudaTela1(){
        Speech.stop();
        const newRoute = 'Sangramento1';
        navigation.navigate('Explicacao',{newRoute})
    }

    function handleMudaTela2(){
        Speech.stop();
        const newRoute = 'ParadaCardiacaBebe1';
        navigation.navigate('Explicacao', {newRoute})
    }

    function handleMudaTela3(){
        Speech.stop();
        const newRoute = 'ParadaCardiacaAdulto1';
        navigation.navigate('Explicacao', {newRoute})
    }

    function handleMudaTela4(){
        Speech.stop();
        const newRoute = 'DesengasgoAdulto1';
        navigation.navigate('Explicacao', {newRoute})
    }

    function handleMudaTela5(){
        Speech.stop();
        const newRoute = 'DesengasgoBebe1';
        navigation.navigate('Explicacao', {newRoute})
    }

    return(
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Icon name="home" size={50} color="green" onPress={handleMudaTela}/>
                <AntDesign name="sound" size={50} color="blue" onPress={speak}/>
            </View>

            <View style={styles.body}>
            <TouchableWithoutFeedback onPress={handleMudaTela1}>
                <Image source={require('../../../assets/Opcoes/sangramento.png')}  style = {{ width: 200, height: 100 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleMudaTela2}>
                <Image source={require('../../../assets/Opcoes/b.png')}  style = {{ width: 200, height: 100 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleMudaTela3}>
                <Image source={require('../../../assets/Opcoes/x.png')}  style = {{ width: 200, height: 100 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleMudaTela4}>
                <Image source={require('../../../assets/Opcoes/eng.png')}  style = {{ width: 200, height: 100 }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleMudaTela5}>
                <Image source={require('../../../assets/Opcoes/engasgo.jpg')}  style = {{ width: 200, height: 100 }} />  
            </TouchableWithoutFeedback>
                
                
                
                
                              
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
      },
      header: {
          flex: 1,
          flexDirection:'row',
          padding: 20,
          justifyContent: 'space-between',
        },  
        body: {
          //flexDirection:'row',
          flex: 10,
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center'
        }
});

export default Principal;