import Span from 'components/atoms/Span';
import Toggler from 'components/atoms/Toggler';
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
      <Span className="todo-count">{`${todoCount} ${todoCount === 1 ? 'item' : 'items'} left`}</Span>
      <ul className="filters">
        <li>
          <Toggler href="#/" isSelected={visibility === visibilities.all} onClick={onCheckAsAll}>
            All
          </Toggler>
        </li>
        <span> </span>
        <li>
          <Toggler href="#/active" isSelected={visibility === visibilities.active} onClick={onCheckAsActive}>
            Active
          </Toggler>
        </li>
        <span> </span>
        <li>
          <Toggler href="#/completed" isSelected={visibility === visibilities.completed} onClick={onCheckAsCompleted}>
            Active
          </Toggler>
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
