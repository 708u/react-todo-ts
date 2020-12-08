import { InputOnChange } from 'components/atoms/Input';
import TodoFooter from 'components/molecules/TodoFooter';
import TodoList from 'components/molecules/TodoList';
import TodoTitle, { HandleOnSubmitNewTodo } from 'components/molecules/TodoTitle';
import useTodoList, { Todo as TodoType, DispatchAction, mock } from 'lib/hooks/useTodoList';
import useTodoVisibility, { TodoVisibility } from 'lib/hooks/useTodoVisibility';
import uuid from 'lib/uuid';
import { FC, useState } from 'react';

const Todo: FC = () => {
  const [visibility, setVisibility] = useTodoVisibility();
  const [newContent, setContent] = useState('');
  const [todoList, dispatch] = useTodoList();

  const handleOnSubmitNewTodo: HandleOnSubmitNewTodo = (e) => {
    e.preventDefault();
    if (newContent === '') {
      return;
    }
    dispatch({ type: 'ADD_TODO', todo: { id: uuid(), content: newContent, completed: false } });
    setContent('');
  };
  const handleOnChangeContent: InputOnChange = (e) => setContent(e.target.value);
  const handleOnToggleComplete: DispatchAction = (todo) => dispatch({ type: 'TOGGLE_COMPLETE', todo });
  const handleOnEdit: DispatchAction = (todo) => dispatch({ type: 'EDIT_TODO', todo });
  const handleOnDestroyTodo: DispatchAction = (todo) => dispatch({ type: 'DELETE_TODO', todo });
  const handleOnClearCompleted = (): void => dispatch({ type: 'CLEAR_COMPLETED', todo: mock });
  const handleOnCheckVisibility = (visible: TodoVisibility) => (): void => setVisibility({ status: visible });

  const applyVisibilityToTodoList = (): TodoType[] => {
    switch (visibility.status) {
      case 'all': {
        return todoList;
      }
      case 'active': {
        return todoList.filter((todo) => !todo.completed);
      }
      case 'completed': {
        return todoList.filter((todo) => todo.completed);
      }
      default: {
        const _: never = visibility.status;
        throw new Error(`${_} is not visibility`);
      }
    }
  };

  return (
    <section className="todoapp">
      <TodoTitle
        newContent={newContent}
        handleOnSubmit={handleOnSubmitNewTodo}
        handleOnChange={handleOnChangeContent}
      />
      <TodoList
        todoList={applyVisibilityToTodoList()}
        onToggleComplete={handleOnToggleComplete}
        onEdit={handleOnEdit}
        onDestroyTodo={handleOnDestroyTodo}
      />
      <TodoFooter
        todoCount={todoList.length}
        completedCount={todoList.filter((v) => v.completed).length}
        visibility={visibility.status}
        onCheckAsAll={handleOnCheckVisibility('all')}
        onCheckAsActive={handleOnCheckVisibility('active')}
        onCheckAsCompleted={handleOnCheckVisibility('completed')}
        onClearCompleted={handleOnClearCompleted}
      />
    </section>
  );
};

export default Todo;
