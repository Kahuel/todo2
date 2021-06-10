import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button, Row, Col } from "react-bootstrap";
import { Store, Task } from "types/types";
import { tasksActions } from "store";

export const List: React.FC = () => {
  const tasks = useSelector((store: Store) => store.tasks);
  const currentFilter = useSelector((store: Store) => store.filter);
  const filteredTasks =
    currentFilter === "all"
      ? tasks
      : tasks.filter((el: Task) => el.status === currentFilter);
  const dispatch = useDispatch();
  console.log(tasks);
  return (
    <ListGroup style={{ overflowY: "auto", height: "77vh" }}>
      {filteredTasks.map((task: Task) => {
        return (
          <ListGroup.Item
            variant={task.status === "complete" ? "success" : "secondary"}
            onClick={() => {
              dispatch(tasksActions.updateStatus(task));
            }}
          >
            <Row>
              <Col>{task.text}</Col>
              <Col md={3}>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(tasksActions.deleteTask(task));
                  }}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
