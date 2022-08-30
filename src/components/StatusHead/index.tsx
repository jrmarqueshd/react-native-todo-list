import { Text, View } from "react-native";
import getTaskByTerm from "./helpers";
import { StatusHeadProps } from "./interfaces";
import styles from "./styles";

export default function StatusHead({ tasks }: StatusHeadProps) {
  return (
    <View style={styles.todoHead}>
      <View style={styles.todoStatus}>
        <Text style={{...styles.statusTitle, color: "#4EA8DE"}}>Criadas</Text> 
        <View style={styles.statusValueWrapper}>
          <Text style={styles.statusValue}>
            {getTaskByTerm(tasks, "finished", false).length}
          </Text>
        </View>
      </View>
      <View style={styles.todoStatus}>
        <Text style={{...styles.statusTitle, color: "#8284FA"}}>Concluídas</Text>
        <View style={styles.statusValueWrapper}>
          <Text style={styles.statusValue}>
            {getTaskByTerm(tasks, "finished", true).length}
          </Text>
        </View>
      </View>
    </View>
  )
}