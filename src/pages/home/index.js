import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image,  StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";
import * as Speech from 'expo-speech';

const Home = () => {
    const navigation = useNavigation();

    useEffect(()=>{speak()},[])

    function speak() {
        var thingToSay = 'PARA USAR ESSE APLICATIVO VOCÊ DEVE COLOCAR O VOLUME NO MAXIMO E APERTE NO AMARELO PARA AVANÇAR';
        Speech.speak(thingToSay);
      }

    function handleMudaTela(){
        Speech.stop();
        navigation.navigate('Menu')
    }

    return(
        <View style={styles.container}>
        <View style={styles.header}>
        <AntDesign name="sound" size={50} color="blue" onPress={speak}/>
        </View>
       
        <View style={styles.body}>
             <Image source={require('../../../assets/Primeira/volume.png')} style = {{ width: 292, height: 298 }}/>
        </View>

        <View style={styles.footer}>

        <TouchableOpacity style={[styles.botao, {backgroundColor: '#CCCC00'}]} onPress={handleMudaTela}>
                <Text style={styles.textButton}>
                    Avançar
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
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      footer: {
        flex: 2,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center'
      },
      botao:{
        width: 200,
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

export default Home;