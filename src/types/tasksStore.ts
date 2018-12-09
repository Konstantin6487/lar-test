export interface ITasksStore {
  [key: string]: {
    date: string;
    id: number;
    isCompleted: boolean;
    task: string;
  };
}
