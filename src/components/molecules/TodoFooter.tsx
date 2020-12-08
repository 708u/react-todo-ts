import { visibilities } from 'lib/hooks/useTodoVisibility';
import { FC } from 'react';

type Props = {
  todoCount: number;
  completedCount: number;
  visibility: string;
  onCheckAsActive?: () => void;
  onCheckAsAll?: () => void;
  onCheckAsCompleted?: () => void;
  onClearCompleted?: () => void;
};

const TodoFooter: FC<Props> = (props) => {
  const {
    todoCount,
    completedCount,
    visibility,
    onCheckAsActive,
    onCheckAsAll,
    onCheckAsCompleted,
    onClearCompleted,
  } = props;
  return todoCount === 0 ? (
    <></>
  ) : (
    <footer className="footer">
      <span className="todo-count">{`${todoCount} ${todoCount === 1 ? 'item' : 'items'} left`}</span>
      <ul className="filters">
        <li>
          <a href="#/" className={visibility === visibilities.all ? 'selected' : ''} onClick={onCheckAsAll}>
            All
          </a>
        </li>
        <span> </span>
        <li>
          <a href="#/active" className={visibility === visibilities.active ? 'selected' : ''} onClick={onCheckAsActive}>
            Active
          </a>
        </li>
        <span> </span>
        <li>
          <a
            href="#/completed"
            className={visibility === visibilities.completed ? 'selected' : ''}
            onClick={onCheckAsCompleted}
          >
            Completed
          </a>
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
