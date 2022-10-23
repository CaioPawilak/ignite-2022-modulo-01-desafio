export interface ITaskItem {
  id: number;
  message: string | undefined | null;
  completed: boolean;
  publishedAt?: Date;
  updateTask?: (taskId: number) => void;
}
export interface IToDoItemProps {
  task: ITaskItem;
  updateTask: (taskId: number) => void;
  deleteTask: (taskList: number) => void;
}

export interface ITableHeaderProps {
  title: string;
  tasksSum: number;
  completedTasksSum?: number;
  titleColor: string;
  finishedTasksHeader?: boolean;
}

export interface ITodoTableProps {
  taskList: ITaskItem[];
  completedTasksSum: number;
  deleteTask: (taskList: number) => void;
  updateTask: (taskId: number) => void;
}
export interface IInsertInput {
  addTask?: (newTaks: ITaskItem) => void;
  deleteTask?: (newTaksList: ITaskItem[]) => void;
  newTaskId?: number;
}

