import ToggleAll from 'components/atoms/ToggleAll';
import { FC } from 'react';

type Todo = {
  id: string;
  content: string;
  completed: boolean;
};

type Props = {
  todoList: Todo[];
  onDestroyTodo: (todo: Todo) => void;
  onToggleComplete: (todo: Todo) => void;
};

const TodoList: FC<Props> = (props) => {
  const { todoList, onDestroyTodo, onToggleComplete } = props;
  return (
    <section className="main">
      <ToggleAll />
      <ul className="todo-list">
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <div className="view">
                <input
                  onChange={() => onToggleComplete(todo)}
                  type="checkbox"
                  checked={todo.completed}
                  className="toggle"
                />
                <button onClick={() => onDestroyTodo(todo)} type="button" className="destroy">
                  {/* X */}
                </button>
                <label htmlFor={`edit-${todo.id}`}>{todo.content}</label>
              </div>
              <input id={`edit-${todo.id}`} type="text" className="edit" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export type { Todo };
export default TodoList;
