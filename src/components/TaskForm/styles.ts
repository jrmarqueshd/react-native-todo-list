import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  input: {
    padding: 16,
    backgroundColor: "#262626",
    flex: 1,
    borderRadius: 6,
    color: "#f2f2f2",
    marginRight: 4
  },
  button: {
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 6
  },
  buttonIcon: {
    width: 16,
    height: 16
  },
});

export default styles;