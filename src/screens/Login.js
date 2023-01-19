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
import { TextInput } from "react-native";

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState(null);
  const [password, setPassword] = useState(null);

  const logIn = () => {
    console.log("logIn>>>> ", email);
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
          <Text style={styles.heading}>Login</Text>
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
              title="Login"
              color="#002f34"
              onPress={() => {
                logIn();
                // navigation.navigate("Home");
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#002f34" }}>
              {" "}
              Or Create an account?
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
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

export default Login;
