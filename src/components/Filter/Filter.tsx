import React from "react";
import { Store } from "types/types";
import { useSelector, useDispatch } from "react-redux";
import { ButtonGroup, Button } from "react-bootstrap";
import { filterActions } from "store";

interface typeFilter {
  name: string;
  text: string;
}

export const Filter: React.FC = () => {
  const currentFilter = useSelector((store: Store) => store.filter);
  const dispatch = useDispatch();
  const filters = [
    { name: "all", text: "Все" },
    { name: "in_progress", text: "Текущие" },
    { name: "complete", text: "Выполненные" },
  ];
  return (
    <ButtonGroup aria-label="Basic example">
      {filters.map((el: typeFilter) => {
        return (
          <Button
            variant={currentFilter === el.name ? "primary" : "secondary"}
            onClick={() => {
              dispatch(filterActions.switchFilter(el.name));
            }}
          >
            {el.text}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
