import List from 'components/atoms/List';
import ToggleAll from 'components/atoms/ToggleAll';
import type { DispatchAction, Todo } from 'lib/hooks/useTodoList';
import { FC } from 'react';

type Props = {
  todoList: Todo[];
  onToggleComplete: DispatchAction;
  onEdit: DispatchAction;
  onDestroyTodo: DispatchAction;
};

const TodoList: FC<Props> = (props) => {
  const { todoList, onToggleComplete, onEdit, onDestroyTodo } = props;
  return (
    <section className="main">
      <ToggleAll />
      <ul className="todo-list">
        {todoList
          .map((todo) => {
            return (
              <List
                key={todo.id}
                todo={todo}
                onToggleComplete={onToggleComplete}
                onDestroyTodo={onDestroyTodo}
                onEdit={onEdit}
              />
            );
          })
          .reverse()}
      </ul>
    </section>
  );
};

export default TodoList;
