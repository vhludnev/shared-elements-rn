//import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import FoodList from './components/FoodList'
import FoodListDetails from './components/FoodListDetails'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <FoodList />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator 
        initialRouteName='FoodList' 
        /* screenOptions={
          {title: 'Restomerica', headerMode: 'screen', headerTitleAlign: 'center', 
            headerRight: () => (
              <TouchableOpacity activeOpacity={0.7} onPress={() => setTheme(theme === CustomDefaultThemeTheme ? CustomDarkTheme : CustomDefaultThemeTheme)}>
                <MaterialCommunityIcons name="theme-light-dark" size={24} color={theme === CustomDarkTheme ? 'orange' : '#333'} />
              </TouchableOpacity>
            ),
            headerTitleStyle: {
              width: '60%',
              ellipsizeMode: "clip",
            }
          }
        } */>
      <Stack.Screen name='FoodList' component={FoodList} options={{headerShown: false}} />
      <Stack.Screen name='FoodListDetails' component={FoodListDetails} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer >
      <MainStack />
    </NavigationContainer>
  )
}

export default App