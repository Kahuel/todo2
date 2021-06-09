import React from "react";
import { useSelector } from "react-redux";
import { Store, Task } from "types/types";

interface Props {
  type: string;
}

export const Counter: React.FC<Props> = ({ type }) => {
  const tasksCount = useSelector((store: Store) =>
    store.tasks.reduce(
      (acc: number, el: Task) => (el.status === type ? acc + 1 : acc),
      0
    )
  );
  const string =
    type === "in_progress"
      ? `В процессе: ${tasksCount}`
      : `Выполненые: ${tasksCount}`;
  return <div>{string}</div>;
};
