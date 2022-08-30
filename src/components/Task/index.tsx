import { Image, Text, TouchableOpacity, View } from "react-native";
import { TaskProps } from "./interfaces";
import styles from "./styles";

export default function Task({ id, description, finished, onToggle, onRemove }: TaskProps) {
  return (
    <View style={styles.taskCard}>
      <TouchableOpacity style={styles.taskCheck} onPress={() => onToggle && onToggle(id)}>
        <View style={{...styles.taskCheckbox, ...(finished ? styles.taskCheckboxChecked : {})}}>
          {finished && (<Image source={require("../../../assets/check.png")}/>)}
        </View>
        <Text style={{...styles.taskDesc, ...(finished ? styles.taskDescFinished : {})}}>{description}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.taskRemove} onPress={() => onRemove && onRemove(id)}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  )
}