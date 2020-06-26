import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";
import * as Speech from 'expo-speech';

const Menu = () => {
    const navigation = useNavigation();

    useEffect(()=>{speak()},[])

    function speak() {
        var thingToSay = 'ESSE É UM APLICATIVO PARA TREINAMENTO. CASO PRECISE OUVIR NOVAMENTE APERTE A QUALQUER MOMENTO O BOTÃO AZUL, SE AGORA FOR UMA SITUAÇÃO DE EMERGÊNCIA LIGUE PARA O SOCORRO APERTANDO O BOTÃO VERMELHO, CASO QUEIRA APRENDER APERTE O BOTÃO AMARELO';
        Speech.speak(thingToSay);
      }

    function handleMudaTela(){
        Speech.stop();
        navigation.navigate('Principal')
    }

    return(
        <View style={styles.container}>
        <View style={styles.header}>
        <AntDesign name="sound" size={50} color="blue" onPress={speak}/>
        </View>
            <View style={styles.body}>
              <Image source={require('../../../assets/Inicio/samu.jpg')} style = {{ width: 350, height: 238 }}/>
            </View>
            <View style={styles.footer}>
            
            <TouchableOpacity style={[styles.botao, {backgroundColor: '#8B0000'}]} onPress={()=>{Linking.openURL('tel:192');}}>
                <Text style={styles.textButton}>
                    Ligar 192
                </Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[styles.botao, {backgroundColor: '#CCCC00'}]} onPress={handleMudaTela}>
                <Text style={styles.textButton}>
                    Começar
                </Text>
            </TouchableOpacity> 
                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 30,
      },
      header: {
          flex: 1,
          flexDirection:'row',
          padding: 20,
          justifyContent: 'flex-end',
        },      
        body: {
          flex: 6,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10

        },
        footer: {
          flexDirection:'row',
          flex: 2,
          padding: 0,
          justifyContent: 'space-between'
        },
        botao:{
            width: 140,
            height: 56,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },
        textButton:{
                color: '#ffffff',
                fontSize: 24
        }
});

export default Menu;