import { TaskProps } from "../Task/interfaces";

const getTaskByTerm = (tasks: TaskProps[], term: keyof TaskProps, value: any) => {
  return tasks.filter(task => task[term] === value)
}

export default getTaskByTerm;