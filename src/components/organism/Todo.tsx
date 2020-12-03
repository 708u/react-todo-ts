import { FC } from 'react';

const Todo: FC = () => {
  return (
    <section className="todoapp">
      <header>
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>
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
      <footer className="footer">
        <span className="todo-count">1 item list</span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">
              All
            </a>
          </li>
          <span> </span>
          <li>
            <a href="#/active">Active</a>
          </li>
          <span> </span>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Todo;
