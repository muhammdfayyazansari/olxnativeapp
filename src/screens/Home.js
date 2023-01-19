import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text >This is Home Page </Text>
    <Button title="Go To LogIn"
    onPress={()=>{navigation.navigate("Login")}}
    >
    </Button>
    <Button title="Go To Profile"
    onPress={()=>{navigation.navigate("Profile")}}
    >
    </Button>
    <Button title="Go To Beforesignup"
    onPress={()=>{navigation.navigate("Beforesignup")}}
    >
    </Button>
    <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
      <Text>
        Don't have an account Go to SignUp
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
