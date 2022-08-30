import { useState } from "react";
import { Alert, FlatList, Image, View } from "react-native";
import EmptyTask from "../../components/EmptyTask";
import StatusHead from "../../components/StatusHead";
import Task from "../../components/Task";
import { TaskProps } from "../../components/Task/interfaces";
import TaskForm from "../../components/TaskForm";
import styles from "./styles";

export default function Home() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const validateTask = () => {
    if (!input.length) {
      throw new Error("Informe uma task.");
    }

    if (tasks.some(task => task.description === input)) {
      throw new Error("Task já cadastrada.");
    }
  }

  const handleAddTask = () => {
    try {
      validateTask();

      const id = new Date().getTime();
      setTasks(prevState => ([
        ...prevState, 
        { 
          id, 
          description: input, 
          finished: false 
        }
      ]));

      return setInput("");
    } catch (error) {
      if (error instanceof Error) {
        return Alert.alert("Ops", error.message);
      }

      return Alert.alert("Ops", "Ocorreu um erro inesperado.");
    }
  }

  const handleFinishTaskToggle = (taskId: number) => {
    const tasksMapped = tasks.map(task => {
      if (task.id === taskId){
        return  {
          ...task,
          finished: !task.finished
        }
      }

      return task;
    })

    setTasks(tasksMapped);
  }

  const handleRemoveTask = (taskId: number) => {
    Alert.alert("Excluir task", "Tem certeza que deseja remover essa task?", [
      {
        text: "Sim",
        onPress() {
          setTasks(prevState => ([...prevState.filter(task => task.id !== taskId)]));
          Alert.alert("", "Task removida.");
        },
      },
      {
        style: "cancel",
        text: "Não"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require("../../../assets/Logo.png")} 
          style={styles.logo} 
        /> 
      </View>

      <TaskForm
        value={input}
        onChangeText={setInput}
        onPress={handleAddTask}
      />

      <View style={styles.todoContainer}>
        <StatusHead tasks={tasks} />

        <FlatList
          data={tasks}
          keyExtractor={({id}) => String(id)}
          renderItem={({item: {id, description, finished}}) => (
            <Task 
              id={id}
              description={description}
              finished={finished}
              onToggle={handleFinishTaskToggle}
              onRemove={handleRemoveTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyTask />
          )}
        />
      </View>
    </View>
  );
}