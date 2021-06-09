interface Action {
  type: string;
  payload: { filter: string };
}

export const filter = (store: string = "all", action: Action) => {
  switch (action.type) {
    case "SWITCH_FILTER": {
      return action.payload.filter;
    }
    default: {
      return store;
    }
  }
};
