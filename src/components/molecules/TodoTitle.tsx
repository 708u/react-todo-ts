import Input, { InputOnChange } from 'components/atoms/Input';
import { FC, FormEvent } from 'react';

type HandleOnSubmitNewTodo = (e: FormEvent<HTMLFormElement>) => void;
type Props = {
  newTodo: string;
  handleOnChange?: InputOnChange;
  handleOnSubmit?: HandleOnSubmitNewTodo;
};

const TodoTitle: FC<Props> = (props) => {
  const { newTodo, handleOnChange, handleOnSubmit } = props;
  return (
    <header>
      <h1>todos</h1>
      <form id="todo-addition-form" onSubmit={handleOnSubmit}>
        <Input value={newTodo} placeholder="What needs to be done?" onChange={handleOnChange} />
      </form>
    </header>
  );
};

export type { HandleOnSubmitNewTodo };
export default TodoTitle;
