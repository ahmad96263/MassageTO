import React from 'react';
import{View,Text} from 'react-native'
import 'react-native-gesture-handler';

import Navigation from './src/services/navigation'
import Message from './src/screens/authflow/message'

function App(){
    return(
         <Navigation/>
    );
}
export default App