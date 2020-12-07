import { InputOnChange } from 'components/atoms/Input';
import TodoFooter from 'components/molecules/TodoFooter';
import TodoList, { Todo as TodoType } from 'components/molecules/TodoList';
import TodoTitle, { HandleOnSubmitNewTodo } from 'components/molecules/TodoTitle';
import uuid from 'lib/uuid';
import { FC, useState } from 'react';

const Todo: FC = () => {
  const [newContent, setContent] = useState('');
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const handleOnSubmitNewTodo: HandleOnSubmitNewTodo = (e) => {
    e.preventDefault();
    setTodoList(todoList.concat({ id: uuid(), content: newContent, completed: false }));
    setContent('');
  };
  const handleOnChangeContent: InputOnChange = (e) => setContent(e.target.value);
  const handleOntToggleComplete = (id: string): void => {
    const newList = todoList.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo;
    });
    setTodoList(newList);
  };

  return (
    <section className="todoapp">
      <TodoTitle
        newContent={newContent}
        handleOnSubmit={handleOnSubmitNewTodo}
        handleOnChange={handleOnChangeContent}
      />
      <TodoList todoList={todoList} onToggleComplete={handleOntToggleComplete} />
      <TodoFooter />
    </section>
  );
};

export default Todo;
