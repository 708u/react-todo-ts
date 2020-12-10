import List from 'components/atoms/List';
import ToggleAll from 'components/atoms/ToggleAll';
import type { DispatchAction, Todo } from 'lib/hooks/useTodoList';
import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  todoList: Todo[];
  toggleAllInputStatus: boolean;
  onToggleAllComplete: () => void;
  onToggleComplete: DispatchAction;
  onEdit: DispatchAction;
  onDestroyTodo: DispatchAction;
};

const Main = styled.main`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`;

const TodoList: FC<Props> = (props) => {
  const { todoList, toggleAllInputStatus, onToggleAllComplete, onToggleComplete, onEdit, onDestroyTodo } = props;

  return (
    <Main className="main">
      <ToggleAll isToggled={!toggleAllInputStatus} onChange={onToggleAllComplete} />
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
    </Main>
  );
};

export default TodoList;
