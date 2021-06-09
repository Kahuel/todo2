export interface Task {
  text: string;
  id: string;
  status: string;
}

export interface Store {
  tasks: Task[];
  filter: string;
}
