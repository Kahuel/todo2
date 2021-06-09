import { Task } from "types/types";
interface Action {
  type: string;
  payload: { task: Task };
}

export const tasks = (store: Task[] = [], action: Action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const { task } = action.payload;
      return [...store, task];
    }
    case "UPDATE_STATUS": {
      const { task } = action.payload;
      return store.map((el: Task) =>
        el.id === task.id
          ? {
              ...el,
              status: el.status === "in_progress" ? "complete" : "in_progress",
            }
          : el
      );
    }
    case "DELETE_TASK": {
      const { task } = action.payload;
      return store.filter((el: Task) => el.id !== task.id);
    }
    default: {
      return store;
    }
  }
};
