import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: "#262626",
    padding: 12,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#333333",
    borderStyle: "solid",
  },
  taskCheckbox: {
    borderColor: "#4EA8DE",
    borderWidth: 1,
    borderStyle: "solid",
    width: 18,
    height: 18,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  taskCheck: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  taskCheckboxChecked: {
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
  },
  taskDesc: {
    fontSize: 14,
    color: "#F2F2F2",
    marginLeft: 8,
  },
  taskDescFinished: {
    textDecorationLine: "line-through",
    color: "#808080"
  },
  taskRemove: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default styles;