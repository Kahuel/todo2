import { Task } from "types/types";

export const addTask = (task: Task) => ({
  type: "ADD_TASK",
  payload: { task },
});

export const updateStatus = (task: Task) => ({
  type: "UPDATE_STATUS",
  payload: { task },
});

export const deleteTask = (task: Task) => ({
  type: "DELETE_TASK",
  payload: { task },
});
