import Input from 'components/atoms/Input';
import { Dispatch, FC } from 'react';

type Props = {
  newTodo: string;
  setTodo: Dispatch<string>;
};

const TodoTitle: FC<Props> = (props) => {
  const { newTodo, setTodo } = props;
  return (
    <header>
      <h1>todos</h1>
      <form id="todo-addition-form" onSubmit={(e) => e.preventDefault()}>
        <Input value={newTodo} placeholder="What needs to be done?" onChange={(e) => setTodo(e.target.value)} />
      </form>
    </header>
  );
};

export default TodoTitle;
