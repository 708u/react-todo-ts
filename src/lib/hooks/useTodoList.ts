import { useReducer, Dispatch } from 'react';

type Todo = {
  id: string;
  content: string;
  completed: boolean;
  editing: boolean;
};
type DispatchAction = (todo: Todo) => void;
type Action = 'ADD_TODO' | 'TOGGLE_COMPLETE' | 'EDIT_TODO' | 'DELETE_TODO' | 'CLEAR_COMPLETED';
type TodoEvent = {
  type: Action;
  todo: Todo;
};
const mock: Todo = { id: '', content: '', completed: false, editing: false };

const useTodoList = (): [Todo[], Dispatch<TodoEvent>] => {
  const reducer = (state: Todo[], action: TodoEvent): Todo[] => {
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
      case 'EDIT_TODO': {
        return state.map((todo) => {
          return todo.id === action.todo.id
            ? {
                ...todo,
                content: todo.content,
              }
            : todo;
        });
      }
      case 'DELETE_TODO': {
        return state.filter((todo) => todo.id !== action.todo.id);
      }
      case 'CLEAR_COMPLETED': {
        return state.filter((todo) => !todo.completed);
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

export { mock };
export type { Todo, DispatchAction };
export default useTodoList;
