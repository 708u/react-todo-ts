import ToggleAll from 'components/atoms/ToggleAll';
import { FC } from 'react';

type TodoList = {
  id: string;
  content: string;
  completed: boolean;
}[];

type Props = {
  todoList: TodoList;
};

const TodoList: FC<Props> = (props) => {
  const { todoList } = props;
  return (
    <section className="main">
      <ToggleAll />
      <ul className="todo-list">
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <div className="view">
                <input type="checkbox" className="toggle" />
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

export type { TodoList };
export default TodoList;
