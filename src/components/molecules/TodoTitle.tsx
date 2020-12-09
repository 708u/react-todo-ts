import Input, { InputOnChange } from 'components/atoms/Input';
import { FC, FormEvent } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
`;

type HandleOnSubmitNewTodo = (e: FormEvent<HTMLFormElement>) => void;
type Props = {
  newContent: string;
  handleOnChange?: InputOnChange;
  handleOnSubmit?: HandleOnSubmitNewTodo;
};

const TodoTitle: FC<Props> = (props) => {
  const { newContent, handleOnChange, handleOnSubmit } = props;
  return (
    <header>
      <Title>todos</Title>
      <form id="todo-addition-form" onSubmit={handleOnSubmit}>
        <Input value={newContent} placeholder="What needs to be done?" onChange={handleOnChange} />
      </form>
    </header>
  );
};

export type { HandleOnSubmitNewTodo };
export default TodoTitle;
