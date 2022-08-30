import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function EmptyTask() {
  return (
    <View style={styles.emptyTodoList}>
      <Image source={require("../../../assets/Clipboard.png")} />
      <Text style={styles.emptyTodoListTitle}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.emptyTodoListSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}