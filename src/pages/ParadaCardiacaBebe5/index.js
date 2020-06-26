import React, {useEffect} from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';
import { AntDesign } from "@expo/vector-icons";


const ParadaCardiacaBebe5 = () => {
    const navigation = useNavigation();

    useEffect(()=>{speak()},[])

    function speak() {
        var thingToSay = 'SE TIVER NO LOCAL USE O APARELHO DE CHOQUE ASSIM QUE POSSIVEL E SIGA AS INSTRUÇÕES DO APARELHO.';
        Speech.speak(thingToSay);
      }

    function handleMudaTela(){
        Speech.stop();
        navigation.navigate('Principal')
    }

    function handleMudaTela1(){
        Speech.stop();
        navigation.navigate('ParadaCardiacaBebe4')
    }

    return(
        <View style={styles.container}>
        <View style={styles.header}>
             <Icon name="home" size={50} color="green" onPress={handleMudaTela}/>
             <AntDesign name="sound" size={50} color="blue" onPress={speak}/>
        </View>

        <View style={styles.body}>
          <Image source={require('../../../assets/ParadaCardiacaBebe/bb.png')} style = {{ width: 250, height: 142 }}/>
        </View>

        <View style={styles.footer}>
             <Icon name="arrow-circle-left" size={100} color="#CCCC00" onPress={handleMudaTela1}/>
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

export default ParadaCardiacaBebe5;