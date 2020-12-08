import { InputOnChange } from 'components/atoms/Input';
import TodoFooter from 'components/molecules/TodoFooter';
import TodoList, { Todo as TodoType } from 'components/molecules/TodoList';
import TodoTitle, { HandleOnSubmitNewTodo } from 'components/molecules/TodoTitle';
import useTodoList from 'lib/hooks/useTodoList';
import uuid from 'lib/uuid';
import { FC, useState } from 'react';

const Todo: FC = () => {
  const [newContent, setContent] = useState('');
  const [todoList, dispatch] = useTodoList();

  const handleOnSubmitNewTodo: HandleOnSubmitNewTodo = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', todo: { id: uuid(), content: newContent, completed: false } });
    setContent('');
  };
  const handleOnChangeContent: InputOnChange = (e) => setContent(e.target.value);
  const handleOnToggleComplete = (todo: TodoType): void => dispatch({ type: 'TOGGLE_COMPLETE', todo });
  const handleOnDestroyTodo = (todo: TodoType): void => dispatch({ type: 'DELETE_TODO', todo });

  return (
    <section className="todoapp">
      <TodoTitle
        newContent={newContent}
        handleOnSubmit={handleOnSubmitNewTodo}
        handleOnChange={handleOnChangeContent}
      />
      <TodoList todoList={todoList} onToggleComplete={handleOnToggleComplete} onDestroyTodo={handleOnDestroyTodo} />
      <TodoFooter count={todoList.length} />
    </section>
  );
};

export default Todo;
