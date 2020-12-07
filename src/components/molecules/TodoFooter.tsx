import { FC } from 'react';

type Props = {
  count: number;
};

const TodoFooter: FC<Props> = (props) => {
  const { count } = props;
  return count === 0 ? (
    <></>
  ) : (
    <footer className="footer">
      <span className="todo-count">{`${count} ${count === 1 ? 'item' : 'items'} left`}</span>
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
