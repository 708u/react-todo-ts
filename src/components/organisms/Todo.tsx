import { InputOnChange } from 'components/atoms/Input';
import TodoFooter from 'components/molecules/TodoFooter';
import TodoList from 'components/molecules/TodoList';
import TodoTitle, { HandleOnSubmitNewTodo } from 'components/molecules/TodoTitle';
import useTodoList, { DispatchAction, mock } from 'lib/hooks/useTodoList';
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
  const handleOnToggleComplete: DispatchAction = (todo) => dispatch({ type: 'TOGGLE_COMPLETE', todo });
  const handleOnDestroyTodo: DispatchAction = (todo) => dispatch({ type: 'DELETE_TODO', todo });
  const handleOnClearCompleted = (): void => dispatch({ type: 'CLEAR_COMPLETED', todo: mock });

  return (
    <section className="todoapp">
      <TodoTitle
        newContent={newContent}
        handleOnSubmit={handleOnSubmitNewTodo}
        handleOnChange={handleOnChangeContent}
      />
      <TodoList todoList={todoList} onToggleComplete={handleOnToggleComplete} onDestroyTodo={handleOnDestroyTodo} />
      <TodoFooter
        onClearCompleted={handleOnClearCompleted}
        todoCount={todoList.length}
        completedCount={todoList.filter((v) => v.completed).length}
      />
    </section>
  );
};

export default Todo;
