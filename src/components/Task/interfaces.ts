export type TaskId = number;

export interface TaskProps {
  id: TaskId,
  description: string,
  finished: boolean,
  onToggle?: (taskId: TaskId) => void,
  onRemove?: (taskId: TaskId) => void,
}
