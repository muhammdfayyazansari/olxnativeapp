import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomTextField from "./../components/TextField/CustomTextField";
// import CustomTextField from './../components/TextField/CustomTextField';

const BeforeSignUp = ({ navigation }) => {
  const closeSignUp = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", paddingTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-start",
            marginLeft: 50,
          }}
        >
          <TouchableOpacity onPress={closeSignUp}>
            <Text> close </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: 290,
            marginBottom: 10,
          }}
        >
          <Text style={styles.heading}>Welcom to olx</Text>
          <Text style={styles.tagline}>
            The trusted community of buyers and sellers
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.buttonView}>
          
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              <View style={styles.buttonStyle}>
              <Text style={styles.buttonFont}>
               
                continue with email
              </Text>

              </View >
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#002f34" }}>
              {" "}
              Already have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ ...styles.buttonView, marginTop: 20 }}>
        <Text style={styles.privacyPolicy}>
          {" "}
          If you continue, you are accepting{" "}
        </Text>
        <Text style={styles.privacyPolicy}>
          {" "}
          OLX Terms and conditions and Privacy Policy.
        </Text>
      </View>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text>SignUp</Text>

  //     <Button title="Go To Home"
  //   onPress={()=>{navigation.navigate("Home")}}
  //   >

  //   </Button>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    // color: "#00ff00"
    color: "#002f34",
    marginBottom: 20,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "400",
    color: "#002f34",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 290,
    borderRadius: 5,
    borderColor: "#002f34",
    marginBottom: 20,
    borderWidth: 2,
    padding: 10,
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 3,
    marginTop: 20,
    borderColor: "#002f34",
    color: "#002f34",
    // backgroundColor: "#002f34",
    
  },
  
  buttonFont: {
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingVertical: 5,
    fontSize: 14,
    color: "inherit"

  },
  button: {
    marginBottom: 10,
  },
  logInBtn: {
    backgroundColor: "red",
  },
  buttonView: {
    flexDirection: "column",
    width: 290,
    borderColor: "#002f34 solid 1px",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  privacyPolicy: {
    fontWeight: "400",
    fontSize: 14,
    color: "#002f34",
    textAlign: "center",
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default BeforeSignUp;
