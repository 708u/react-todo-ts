import { InputOnChange } from 'components/atoms/Input';
import TodoFooter from 'components/molecules/TodoFooter';
import type { TodoList as TodoListType } from 'components/molecules/TodoList';
import TodoList from 'components/molecules/TodoList';
import TodoTitle, { HandleOnSubmitNewTodo } from 'components/molecules/TodoTitle';
import uuid from 'lib/uuid';
import { FC, useState } from 'react';

const Todo: FC = () => {
  const [newContent, setContent] = useState('');
  const [todoList, setTodoList] = useState<TodoListType>([]);

  const handleOnSubmitNewTodo: HandleOnSubmitNewTodo = (e) => {
    e.preventDefault();
    setTodoList(todoList.concat({ id: uuid(), content: newContent, completed: false }));
    setContent('');
  };
  const handleOnChangeTodoInput: InputOnChange = (e) => setContent(e.target.value);

  return (
    <section className="todoapp">
      <TodoTitle
        newContent={newContent}
        handleOnSubmit={handleOnSubmitNewTodo}
        handleOnChange={handleOnChangeTodoInput}
      />
      <TodoList todoList={todoList} />
      <TodoFooter />
    </section>
  );
};

export default Todo;
