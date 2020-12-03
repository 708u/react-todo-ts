import TodoFooter from 'components/molecules/TodoFooter';
import TodoList from 'components/molecules/TodoList';
import TodoTitle from 'components/molecules/TodoTitle';
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
