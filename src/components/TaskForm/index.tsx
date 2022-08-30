import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { TaskFormProps } from "./interfaces";
import styles from "./styles";

export default function TaskForm({ value, onChangeText, onPress }: TaskFormProps) {
  return (
    <View style={styles.form}>
      <TextInput 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <Image 
          source={require("../../../assets/plus.png")}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  )
}