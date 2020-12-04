import TodoFooter from 'components/molecules/TodoFooter';
import TodoList from 'components/molecules/TodoList';
import TodoTitle from 'components/molecules/TodoTitle';
import { FC, useState } from 'react';

const Todo: FC = () => {
  const [newTodo, setTodo] = useState('');
  return (
    <section className="todoapp">
      <TodoTitle newTodo={newTodo} setTodo={setTodo} />
      <TodoList />
      <TodoFooter />
    </section>
  );
};

export default Todo;
