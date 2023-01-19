import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import { TabBarIOSItem } from 'react-native';
import Profile from '../screens/Profile';
import BeforeSignUp from '../screens/BeforeSignUp';
import MyAlert from '../components/Alert/Alert';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainStack(){
  return <NavigationContainer>
    {/* <Stack.Navigator options={{title: ""}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={SignUp} />
    </Stack.Navigator> */}
    <MyTab />
  </NavigationContainer>
}


function Dashboard(){
return(
  <Stack.Navigator  options={{title: ""}}>
  {/* <Stack.Screen options={{headerShown: false}} name="Myalert" component={MyAlert} /> */}
  <Stack.Screen options={{headerShown: false}} name="Beforesignup" component={BeforeSignUp} />
  <Stack.Screen name='Home' component={Home} />
  <Stack.Screen name='Profile' component={Profile} />
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Signup" component={SignUp} />

</Stack.Navigator>
)

}

function AuthStack(){

  return(
    <Stack.Navigator initialRouteName='Login' >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  )
}



function MyTab(){
   return(
    <Tab.Navigator >
      <Tab.Screen options={{headerShown: false}}  name='Dashboard' component={Dashboard} />      
      <Tab.Screen options={{headerShown: false}} name='Auth' component={AuthStack} />
    </Tab.Navigator>
   )
}