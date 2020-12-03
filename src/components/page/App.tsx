import 'App.css';
import { FC } from 'react';

const App: FC = () => {
  return (
    <body>
      <section className="todoapp">
        <header>
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" />
        </header>
        <section className="main">
          <label htmlFor="toggle-all">
            <input id="toggle-all" name="toggle-all" className="toggle-all" type="checkbox" checked />
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
        <footer>
          <span className="todo-count">1 item list</span>
          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
        </footer>
      </section>
      <footer className="info">Double-click to edit a todo</footer>
    </body>
  );
};

export default App;
