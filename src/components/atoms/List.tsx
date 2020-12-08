import keys from 'lib/constants';
import { DispatchAction, Todo } from 'lib/hooks/useTodoList';
import { FC, KeyboardEvent, useState } from 'react';

type Props = {
  todo: Todo;
  onToggleComplete: DispatchAction;
  onEdit: DispatchAction;
  onDestroyTodo: DispatchAction;
};

type EditStatus = {
  content: string;
  editing: boolean;
};

const List: FC<Props> = (props) => {
  const { todo, onToggleComplete, onEdit, onDestroyTodo } = props;
  const [editStatus, setEditStatus] = useState<EditStatus>({ content: todo.content, editing: false });
  return (
    <li className={`${todo.completed ? 'completed' : ''} ${editStatus.editing ? 'editing' : ''} `}>
      <div className="view">
        <input
          id={`todo-toggle-${todo.id}`}
          type="checkbox"
          className="toggle"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo)}
        />
        <label onDoubleClick={() => setEditStatus({ ...editStatus, editing: true })} htmlFor={`edit-${todo.id}`}>
          {editStatus.content}
        </label>
        <button onClick={() => onDestroyTodo(todo)} type="button" className="destroy">
          {/* X */}
        </button>
      </div>
      <input
        id={`edit-${todo.id}`}
        value={editStatus.content}
        type="text"
        className="edit"
        onChange={(e) => setEditStatus({ ...editStatus, content: e.target.value })}
        onKeyDown={(e: KeyboardEvent) => {
          if (e.key === keys.enter) {
            onEdit({ ...todo, content: editStatus.content });
            setEditStatus({ ...editStatus, editing: false });
          }
        }}
        onBlur={() => {
          onEdit({ ...todo, content: editStatus.content });
          setEditStatus({ ...editStatus, editing: false });
        }}
      />
    </li>
  );
};

export default List;
