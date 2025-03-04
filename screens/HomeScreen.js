import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import thư viện icon

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/maskgroup.jpg")} style={styles.image} />
      <Text style={styles.title}>Get your groceries{"\n"} with nectar</Text>
      
      <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.navigate("Number")}>
        <Text style={styles.flag}>🇧🇩</Text>
        <TextInput
          style={styles.input}
          placeholder="+880"
          keyboardType="phone-pad"
        />
      </TouchableOpacity>
      
      <Text style={styles.orText}>Or connect with social media</Text>

      {/* Button Google */}
      <TouchableOpacity style={styles.buttonGoogle}>
        <Icon name="google" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Button Facebook */}
      <TouchableOpacity style={styles.buttonFacebook}>
        <Icon name="facebook" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  image: {
    width: 413.37,
    height: 374.15,
    resizeMode: "contain",
    marginBottom: 50,
    top: 0.3,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginVertical: 10,
  },
  flag: {
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  orText: {
    marginVertical: 10,
    color: "#888",
  },
  buttonGoogle: {
    flexDirection: "row",
    backgroundColor: "#4285F4",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonFacebook: {
    flexDirection: "row",
    backgroundColor: "#3b5998",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10, // Tạo khoảng cách giữa icon và text
  },
  icon: {
    position: "absolute",
    left: 20, // Đặt icon lệch trái để dễ nhìn hơn
  },
});

export default HomeScreen;