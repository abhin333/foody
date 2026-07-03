import { useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width } = Dimensions.get("window");

import { auth } from "../firebase/config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Handle loading state

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Email and Password are required.");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        // LOGIN
        await signInWithEmailAndPassword(auth, email.trim(), password);
        Alert.alert("Success", "Login Successful");

        router.replace("/");
      } else {
        // SIGN UP

        if (!name.trim()) {
          Alert.alert("Error", "Please enter your name.");
          setLoading(false);
          return;
        }

        if (password !== confirmPassword) {
          Alert.alert("Error", "Passwords do not match.");
          setLoading(false);
          return;
        }

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password,
        );

        await updateProfile(userCredential.user, {
          displayName: name,
        });

        Alert.alert("Success", "Account created successfully.");

        router.replace("/");
      }
    } catch (error: any) {
      console.log(error);

      switch (error.code) {
        case "auth/email-already-in-use":
          Alert.alert("Error", "Email is already registered.");
          break;

        case "auth/invalid-email":
          Alert.alert("Error", "Invalid email address.");
          break;

        case "auth/user-not-found":
          Alert.alert("Error", "No account found with this email.");
          break;

        case "auth/wrong-password":
          Alert.alert("Error", "Incorrect password.");
          break;

        case "auth/invalid-credential":
          Alert.alert("Error", "Invalid email or password.");
          break;

        case "auth/weak-password":
          Alert.alert("Error", "Password should be at least 6 characters.");
          break;

        default:
          Alert.alert("Error", error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 40,
          }}
        >
          {/* Top Banner */}
          <Image
            source={require("../../assets/images/burger.png")}
            style={styles.banner}
          />

          {/* Card */}
          <View style={styles.card}>
            {/* Toggle */}
            <View style={styles.toggleContainer}>
              <TouchableOpacity
                onPress={() => setIsLogin(true)}
                style={[styles.toggleButton, isLogin && styles.activeButton]}
              >
                <Text style={[styles.toggleText, isLogin && styles.activeText]}>
                  Login
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setIsLogin(false)}
                style={[styles.toggleButton, !isLogin && styles.activeButton]}
              >
                <Text
                  style={[styles.toggleText, !isLogin && styles.activeText]}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 40 }}>
              <Text style={styles.heading}>
                {isLogin ? "Login" : "Create Account"}
              </Text>

              <Text style={styles.subHeading}>Welcome to Foody App</Text>

              <View>
                {/* 3. Conditional Input Fields (Only show on Sign Up) */}
                {!isLogin && (
                  <>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput
                      placeholder="Enter your name"
                      style={styles.input}
                      value={name}
                      onChangeText={setName}
                    />

                    <Text style={styles.inputLabel}>Telephone</Text>
                    <TextInput
                      placeholder="Enter phone number"
                      keyboardType="phone-pad"
                      style={styles.input}
                      value={phone}
                      onChangeText={setPhone}
                    />
                  </>
                )}

                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  placeholder="Enter email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                />

                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    placeholder="Enter password"
                    secureTextEntry={!showPassword}
                    style={styles.passwordInput}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Feather
                      name={showPassword ? "eye" : "eye-off"}
                      size={20}
                      color="#666"
                    />
                  </TouchableOpacity>
                </View>

                {/* Confirm Password (Only show on Sign Up) */}
                {!isLogin && (
                  <>
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <View style={styles.passwordContainer}>
                      <TextInput
                        placeholder="Confirm password"
                        secureTextEntry={!showConfirmPassword}
                        style={styles.passwordInput}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                      />
                      <TouchableOpacity
                        onPress={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        <Feather
                          name={showConfirmPassword ? "eye" : "eye-off"}
                          size={20}
                          color="#666"
                        />
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            </View>

            {/* 4. Trigger handleSubmit here */}
            <TouchableOpacity
              style={[styles.submitButton, loading && { opacity: 0.7 }]}
              onPress={handleSubmit}
              disabled={loading}
            >
              <Text style={styles.submitText}>
                {loading ? "PROCESSING..." : isLogin ? "LOGIN" : "SIGN UP"}
              </Text>
            </TouchableOpacity>

            {/* OR */}
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.line} />
            </View>

            {/* Social Buttons */}
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Feather name="instagram" size={24} color="#E1306C" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Feather name="facebook" size={24} color="#1877F2" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Feather name="chrome" size={24} color="#EA4335" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{ marginTop: 30 }}
              onPress={() => setIsLogin(!isLogin)}
            >
              <Text style={styles.bottomText}>
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <Text style={styles.linkText}>
                  {isLogin ? "Sign Up" : "Login"}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Decoration */}
          <Image
            source={require("../../assets/images/burger.png")}
            style={styles.bottomImage}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Keeping your existing styles below (Make sure styles like container, banner, card, etc., are defined here)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  banner: { width: width, height: 200, resizeMode: "cover" },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  toggleContainer: { flexDirection: "row", justifyContent: "center" },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeButton: { backgroundColor: "#FF9F1C" },
  toggleText: { color: "#666", fontWeight: "bold" },
  activeText: { color: "#fff" },
  heading: { fontSize: 28, fontWeight: "bold", color: "#333" },
  subHeading: { fontSize: 16, color: "#666", marginTop: 5, marginBottom: 20 },
  inputLabel: { fontSize: 14, color: "#333", fontWeight: "600", marginTop: 15 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  passwordInput: { flex: 1, paddingVertical: 8, fontSize: 16 },
  submitButton: {
    backgroundColor: "#FF9F1C",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  submitText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: { flex: 1, height: 1, backgroundColor: "#ccc" },
  orText: { marginHorizontal: 10, color: "#666" },
  socialContainer: { flexDirection: "row", justifyContent: "center", gap: 20 },
  socialButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
  },
  bottomText: { textAlign: "center", color: "#666" },
  linkText: { color: "#FF9F1C", fontWeight: "bold" },
  bottomImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 20,
    opacity: 0.2,
  },
});
