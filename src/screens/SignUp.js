import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import CustomTextField from "./../components/TextField/CustomTextField";
// import CustomTextField from './../components/TextField/CustomTextField';

const SignUp = ({ navigation }) => {
  const [name, setName] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [password, setPassword] = useState(null);


  const createTwoButtonAlert = (alertTitle, alertMessage) =>
  Alert.alert(alertTitle, alertMessage,  [
    {
      text: 'Cancel',
      // onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', },
  ]);


  const signup = () => {
    console.log("signup>>>> ", email);
    createTwoButtonAlert("User Create Update", 'user create completed successfully! ')
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            width: 290,
            marginBottom: 10,
          }}
        >
          <Text style={styles.heading}>Signup</Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Text input For email  */}
          <CustomTextField
            style={styles.input}
            secureTextEntry={false}
            placeholder="Full Name"
            keyboardType="default"
            value={name}
            onChangeInput={setName}
          />

          {/* Text input For email  */}
          <CustomTextField
            style={styles.input}
            secureTextEntry={false}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeInput={onChangeEmail}
          />
          {/* Text input For Password  */}
          <CustomTextField
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            keyboardType="default"
            value={password}
            onChangeInput={setPassword}
          />

          <View style={styles.buttonView}>
            <Button
              title="signup"
              color="#002f34"
              onPress={() => {
                signup();
                // navigation.navigate("Home");
              }}
            />
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
        <View style={{ ...styles.buttonView, marginTop: 20 }}>
          <Button
            title="Go to Home"
            color="#002f34"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    </ScrollView>
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
    justifyContent: "center",
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    // color: "#00ff00"
    color: "#002f34",
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
  button: {
    marginBottom: 10,
  },
  logInBtn: {
    backgroundColor: "red",
  },
  buttonView: {
    backgroundColor: "#002f34",
    flexDirection: "row",
    width: 290,
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default SignUp;
