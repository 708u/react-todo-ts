import ToggleAll from 'components/atoms/ToggleAll';
import { FC } from 'react';

type Todo = {
  id: string;
  content: string;
  completed: boolean;
};

type Props = {
  todoList: Todo[];
  onToggleComplete: (id: string) => void;
};

const TodoList: FC<Props> = (props) => {
  const { todoList, onToggleComplete } = props;
  return (
    <section className="main">
      <ToggleAll />
      <ul className="todo-list">
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <div className="view">
                <input
                  onChange={() => onToggleComplete(todo.id)}
                  type="checkbox"
                  checked={todo.completed}
                  className="toggle"
                />
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
