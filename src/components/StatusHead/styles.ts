import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todoHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  todoStatus: {
    flexDirection: "row",
  },
  statusTitle: {
    fontWeight: '700',
    fontSize: 14,
    marginRight: 8
  },
  statusValueWrapper: {
    backgroundColor: "#333333",
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: "center",
    borderRadius: 10
  },
  statusValue: {
    color: "#D9D9D9",
  },
});

export default styles;