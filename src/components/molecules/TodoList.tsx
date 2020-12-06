import ToggleAll from 'components/atoms/ToggleAll';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

type Props = {
  todoList: string[];
};

const TodoList: FC<Props> = (props) => {
  const { todoList } = props;
  return (
    <section className="main">
      <ToggleAll />
      <ul className="todo-list">
        {todoList.map((v) => {
          const key = uuid();
          return (
            <li key={key}>
              <div className="view">
                <input type="checkbox" className="toggle" />
                <label htmlFor={`edit-${key}`}>{v}</label>
              </div>
              <input id={`edit-${key}`} type="text" className="edit" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;