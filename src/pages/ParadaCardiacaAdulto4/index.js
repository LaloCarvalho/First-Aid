import React, {useEffect} from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';
import { AntDesign } from "@expo/vector-icons";


const ParadaCardiacaAdulto4 = () => {
    const navigation = useNavigation();

    useEffect(()=>{speak()},[])

    function speak() {
        var thingToSay = 'SE A PESSOA NÃO RESPIRA, PEÇA PARA UMA PESSOA LIGAR PARA 192 E DIZER QUE A PESSOA ESTÁ DESMAIADA E NÃO RESPIRA, SE ESTIVER SÓ, LIGUE E COLOQUE O TELEFONE NO VIVA VOZ E COMECE O ATENDIMENTO';
        Speech.speak(thingToSay);
      }

    function handleMudaTela(){
        Speech.stop();
        navigation.navigate('Principal')
    }

    function handleMudaTela1(){
        Speech.stop();
        navigation.navigate('ParadaCardiacaAdulto3')
    }

    function handleMudaTela2(){
        Speech.stop();
        navigation.navigate('ParadaCardiacaAdulto5')
    }

    return(
        <View style={styles.container}>
        <View style={styles.header}>
             <Icon name="home" size={50} color="green" onPress={handleMudaTela}/>
             <AntDesign name="sound" size={50} color="blue" onPress={speak}/>
        </View>

        <View style={styles.body}>
          <Image source={require('../../../assets/ParadaCardiacaAdulto/o.png')} style = {{ width: 264, height: 356 }}/>
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

export default ParadaCardiacaAdulto4;