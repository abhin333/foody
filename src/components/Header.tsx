import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Text,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { router } from "expo-router";



import { auth } from "../firebase/config";

export default function Header() {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      await signOut(auth);

      // No router.replace() needed if you already
      // use onAuthStateChanged() in app/index.tsx
      router.replace("/auth");
      
      setLogoutModalVisible(false);
    } catch (error: any) {
      console.log("Logout Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <Feather name="menu" size={28} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setLogoutModalVisible(true)}
        >
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <Modal
        visible={logoutModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.title}>Logout</Text>

            <Text style={styles.message}>
              Are you sure you want to logout?
            </Text>

            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => setLogoutModalVisible(false)}
              >
                <Text style={styles.cancelText}>No</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.logoutButton]}
                onPress={handleLogout}
                disabled={loading}
              >
                <Text style={styles.logoutText}>
                  {loading ? "Logging out..." : "Yes"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modal: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  message: {
    marginTop: 12,
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 25,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
  },

  cancelButton: {
    backgroundColor: "#E5E7EB",
    marginRight: 10,
  },

  logoutButton: {
    backgroundColor: "#EF4444",
  },

  cancelText: {
    color: "#333",
    fontWeight: "600",
  },

  logoutText: {
    color: "#fff",
    fontWeight: "600",
  },
});