import { useReducer, Dispatch } from 'react';

type Todo = {
  id: string;
  content: string;
  completed: boolean;
};

type Action = 'ADD_TODO' | 'TOGGLE_COMPLETE' | 'DELETE_TODO';
type Dispatcher = {
  type: Action;
  todo: Todo;
};

const useTodoList = (): [Todo[], Dispatch<Dispatcher>] => {
  const reducer = (state: Todo[], action: Dispatcher): Todo[] => {
    switch (action.type) {
      case 'ADD_TODO': {
        return state.concat(action.todo);
      }
      case 'TOGGLE_COMPLETE': {
        return state.map((todo) => {
          return todo.id === action.todo.id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo;
        });
      }
      case 'DELETE_TODO': {
        return state.filter((todo) => todo.id !== action.todo.id);
      }
      default: {
        const _: never = action.type;
        throw new Error(`${_} is not action.`);
      }
    }
  };
  const [todoList, dispatchTodoList] = useReducer(reducer, []);
  return [todoList, dispatchTodoList];
};

export default useTodoList;
