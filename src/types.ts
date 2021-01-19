export type ReducerAction = {
  type: string;
  payload: any;
};

export type TodoReducerState = {
  todoList: Array<{
    id: number;
    content: string;
  }>;
};

export type CounterReducerState = {
  counter: number;
};

export type CharacterReducerState = {
  name: string;
  occupation: string;
  age: number;
};

export type RootState = {
  characters: CharacterReducerState;
  myCounter: CounterReducerState;
  todos: TodoReducerState;
};
