import { useReducer, Dispatch } from 'react';

type Todo = {
  id: string;
  content: string;
  completed: boolean;
};
type DispatchAction = (todo: Todo) => void;

type Action =
  | { type: 'ADD_TODO'; payload: Todo }
  | { type: 'CHANGE_ALL_COMPLETE' }
  | { type: 'CHANGE_ALL_ACTIVE' }
  | { type: 'TOGGLE_COMPLETE'; payload: Todo }
  | { type: 'EDIT_TODO'; payload: Todo }
  | { type: 'DELETE_TODO'; payload: Todo }
  | { type: 'CLEAR_COMPLETED' };

const useTodoList = (): [Todo[], Dispatch<Action>] => {
  const reducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
      case 'ADD_TODO': {
        return state.concat(action.payload);
      }
      case 'CHANGE_ALL_COMPLETE': {
        return state.map((todo) => ({ ...todo, completed: true }));
      }
      case 'CHANGE_ALL_ACTIVE': {
        return state.map((todo) => ({ ...todo, completed: false }));
      }
      case 'TOGGLE_COMPLETE': {
        return state.map((todo) => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
      }
      case 'EDIT_TODO': {
        return state.map((todo) => (todo.id === action.payload.id ? { ...todo, content: todo.content } : todo));
      }
      case 'DELETE_TODO': {
        return state.filter((todo) => todo.id !== action.payload.id);
      }
      case 'CLEAR_COMPLETED': {
        return state.filter((todo) => !todo.completed);
      }
      default: {
        const _: never = action;
        throw new Error(`${_} is not action.`);
      }
    }
  };
  const [todoList, dispatchTodoList] = useReducer(reducer, []);
  return [todoList, dispatchTodoList];
};

export type { Todo, DispatchAction };
export default useTodoList;
