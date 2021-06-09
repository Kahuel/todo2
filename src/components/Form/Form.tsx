import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import { tasksActions } from "store";
import { v1 } from "uuid";

//конфликт имён, поэтому вместо Form Input
export const Input: React.FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (input.length !== 0) {
          const newTask = {
            text: input,
            id: v1(),
            status: "in_progress",
          };
          dispatch(tasksActions.addTask(newTask));
          setInput("");
        }
      }}
    >
      <Form.Row>
        <Col xs={9}>
          <Form.Control
            type="text"
            placeholder="Введите текст"
            style={{ width: "100%" }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            pattern={".{1,30}"}
            title="Длина не должна превышать 30 символов"
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">
            Добавить
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};
