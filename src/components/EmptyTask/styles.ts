import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  emptyTodoList: {
    alignItems: "center",
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#333333",
    borderStyle: "solid",
  },
  emptyTodoListTitle: {
    marginTop: 16,
    fontWeight: "700",
    fontSize: 14,
    color: "#808080",
    lineHeight: 20
  }, 
  emptyTodoListSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#808080",
    lineHeight: 20
  }
});

export default styles;