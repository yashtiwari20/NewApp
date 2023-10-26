import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Screens/Home';
import Storyscreen from './Screens/Story';
import NoStoryscreen from './Screens/NoStory';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} options={{headerShown:false}} />
        <Stack.Screen name="Story" component={Storyscreen} options={{headerShown:false}} />
         <Stack.Screen name="NoStory" component={NoStoryscreen} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;