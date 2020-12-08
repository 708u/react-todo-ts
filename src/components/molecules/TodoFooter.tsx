import { FC } from 'react';

type Props = {
  todoCount: number;
  completedCount: number;
  onClearCompleted: () => void;
};

const TodoFooter: FC<Props> = (props) => {
  const { todoCount, completedCount, onClearCompleted } = props;
  return todoCount === 0 ? (
    <></>
  ) : (
    <footer className="footer">
      <span className="todo-count">{`${todoCount} ${todoCount === 1 ? 'item' : 'items'} left`}</span>
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
      {completedCount > 0 && (
        <button type="button" className="clear-completed" onClick={onClearCompleted}>
          Clear Completed
        </button>
      )}
    </footer>
  );
};

export default TodoFooter;
