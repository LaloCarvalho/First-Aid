import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './pages/home';
import Menu from './pages/menu';
import Principal from './pages/principal';
import DesengasgoAdulto1 from './pages/DesengasgoAdulto1';
import DesengasgoAdulto2 from './pages/DesengasgoAdulto2';
import DesengasgoAdulto3 from './pages/DesengasgoAdulto3';
import DesengasgoAdulto4 from './pages/DesengasgoAdulto4';
import DesengasgoBebe1 from './pages/DesengasgoBebe1';
import DesengasgoBebe2 from './pages/DesengasgoBebe2';
import DesengasgoBebe3 from './pages/DesengasgoBebe3';
import ParadaCardiacaAdulto1 from './pages/ParadaCardiacaAdulto1';
import ParadaCardiacaAdulto2 from './pages/ParadaCardiacaAdulto2';
import ParadaCardiacaAdulto3 from './pages/ParadaCardiacaAdulto3';
import ParadaCardiacaAdulto4 from './pages/ParadaCardiacaAdulto4';
import ParadaCardiacaAdulto5 from './pages/ParadaCardiacaAdulto5';
import ParadaCardiacaAdulto6 from './pages/ParadaCardiacaAdulto6';
import ParadaCardiacaAdulto7 from './pages/ParadaCardiacaAdulto7';
import ParadaCardiacaAdulto8 from './pages/ParadaCardiacaAdulto8';
import ParadaCardiacaBebe1 from './pages/ParadaCardiacaBebe1';
import ParadaCardiacaBebe2 from './pages/ParadaCardiacaBebe2';
import ParadaCardiacaBebe3 from './pages/ParadaCardiacaBebe3';
import ParadaCardiacaBebe4 from './pages/ParadaCardiacaBebe4';
import ParadaCardiacaBebe5 from './pages/ParadaCardiacaBebe5';
import Sangramento1 from './pages/Sangramento1';
import Sangramento2 from './pages/Sangramento2';
import Sangramento3 from './pages/Sangramento3';
import Sangramento4 from './pages/Sangramento4';
import Sangramento5 from './pages/Sangramento5';
import Sangramento6 from './pages/Sangramento6';
import Explicacao from './pages/Explicacao';



const App = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <App.Navigator headerMode = 'none' >
                <App.Screen name = 'Home' component = {Home} />
                <App.Screen name = 'Menu' component = {Menu}/>
                <App.Screen name = 'Principal' component = {Principal}/>
                <App.Screen name = 'Explicacao' component = {Explicacao}/>
                <App.Screen name = 'DesengasgoAdulto1' component = {DesengasgoAdulto1}/>
                <App.Screen name = 'DesengasgoAdulto2' component = {DesengasgoAdulto2}/>
                <App.Screen name = 'DesengasgoAdulto3' component = {DesengasgoAdulto3}/>
                <App.Screen name = 'DesengasgoAdulto4' component = {DesengasgoAdulto4}/>
                <App.Screen name = 'DesengasgoBebe1' component = {DesengasgoBebe1}/>
                <App.Screen name = 'DesengasgoBebe2' component = {DesengasgoBebe2}/>
                <App.Screen name = 'DesengasgoBebe3' component = {DesengasgoBebe3}/>
                <App.Screen name = 'ParadaCardiacaAdulto1' component = {ParadaCardiacaAdulto1}/>
                <App.Screen name = 'ParadaCardiacaAdulto2' component = {ParadaCardiacaAdulto2}/>
                <App.Screen name = 'ParadaCardiacaAdulto3' component = {ParadaCardiacaAdulto3}/>
                <App.Screen name = 'ParadaCardiacaAdulto4' component = {ParadaCardiacaAdulto4}/>
                <App.Screen name = 'ParadaCardiacaAdulto5' component = {ParadaCardiacaAdulto5}/>
                <App.Screen name = 'ParadaCardiacaAdulto6' component = {ParadaCardiacaAdulto6}/>
                <App.Screen name = 'ParadaCardiacaAdulto7' component = {ParadaCardiacaAdulto7}/>
                <App.Screen name = 'ParadaCardiacaAdulto8' component = {ParadaCardiacaAdulto8}/>
                <App.Screen name = 'ParadaCardiacaBebe1' component = {ParadaCardiacaBebe1}/>
                <App.Screen name = 'ParadaCardiacaBebe2' component = {ParadaCardiacaBebe2}/>
                <App.Screen name = 'ParadaCardiacaBebe3' component = {ParadaCardiacaBebe3}/>
                <App.Screen name = 'ParadaCardiacaBebe4' component = {ParadaCardiacaBebe4}/>
                <App.Screen name = 'ParadaCardiacaBebe5' component = {ParadaCardiacaBebe5}/>
                <App.Screen name = 'Sangramento1' component = {Sangramento1}/>
                <App.Screen name = 'Sangramento2' component = {Sangramento2}/>
                <App.Screen name = 'Sangramento3' component = {Sangramento3}/>
                <App.Screen name = 'Sangramento4' component = {Sangramento4}/>
                <App.Screen name = 'Sangramento5' component = {Sangramento5}/>
                <App.Screen name = 'Sangramento6' component = {Sangramento6}/>
            </App.Navigator>
        </NavigationContainer>
    )}

export default Routes;