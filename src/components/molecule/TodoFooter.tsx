import { FC } from 'react';

const TodoFooter: FC = () => {
  return (
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
  );
};

export default TodoFooter;
