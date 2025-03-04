import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import icon
import { AuthContext } from "../AuthContext";

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your email here!" 
        value={email} 
        onChangeText={setEmail} 
      />

      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your password here!" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />

      <TouchableOpacity onPress={() => alert("Forgot password?")}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => login(email, password)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      {/* Nút Google */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.googleButton}>
          <Icon name="google" size={20} color="#DB4437" style={styles.googleIcon} />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#3b5998", borderWidth: 0 }]}>
          <Icon name="facebook" size={20} color="white" style={styles.socialIcon} />
          <Text style={[styles.socialText, { color: "white" }]}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signUpText}>Not yet a member? <Text style={{ color: "orange" }}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "white" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginBottom: 10 },
  forgotPassword: { textAlign: "right", color: "orange", marginBottom: 20 },
  button: { backgroundColor: "orange", padding: 15, borderRadius: 5, alignItems: "center", width: "100%" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  orText: { textAlign: "center", marginVertical: 10, fontSize: 14, color: "gray" },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    flex: 1,
    backgroundColor: "white",
    marginRight: 5,
  },
  googleIcon: { marginRight: 10 },
  googleText: { fontSize: 16, fontWeight: "bold" },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  socialIcon: { marginRight: 10 },
  socialText: { fontSize: 16, fontWeight: "bold" },

  signUpText: { textAlign: "center", marginTop: 20, fontSize: 14 },
});

export default LoginScreen;
