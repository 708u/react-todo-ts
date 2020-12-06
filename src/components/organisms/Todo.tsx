import { InputOnChange } from 'components/atoms/Input';
import TodoFooter from 'components/molecules/TodoFooter';
import TodoList from 'components/molecules/TodoList';
import TodoTitle, { HandleOnSubmitNewTodo } from 'components/molecules/TodoTitle';
import { FC, useState } from 'react';

const Todo: FC = () => {
  const [newTodo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const handleOnSubmitNewTodo: HandleOnSubmitNewTodo = (e) => {
    e.preventDefault();
    setTodoList(todoList.concat(newTodo));
  };
  const handleOnChangeTodoInput: InputOnChange = (e) => setTodo(e.target.value);

  return (
    <section className="todoapp">
      <TodoTitle newTodo={newTodo} handleOnSubmit={handleOnSubmitNewTodo} handleOnChange={handleOnChangeTodoInput} />
      <TodoList todoList={todoList} />
      <TodoFooter />
    </section>
  );
};

export default Todo;
