import TodoFooter from 'components/molecule/TodoFooter';
import TodoList from 'components/molecule/TodoList';
import TodoTitle from 'components/molecule/TodoTitle';
import { FC } from 'react';

const Todo: FC = () => {
  return (
    <section className="todoapp">
      <TodoTitle />
      <TodoList />
      <TodoFooter />
    </section>
  );
};

export default Todo;
