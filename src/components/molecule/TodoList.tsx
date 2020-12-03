import { FC } from 'react';

const TodoList: FC = () => {
  return (
    <section className="main">
      <label htmlFor="toggle-all">
        <input id="toggle-all" className="toggle-all" type="checkbox" checked />
      </label>
      <ul className="todo-list">
        <li>
          <div className="view">
            <input type="checkbox" className="toggle" />
            <label htmlFor="foobar">
              <input id="foobar" type="text" className="edit" value="foo" />
            </label>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TodoList;
