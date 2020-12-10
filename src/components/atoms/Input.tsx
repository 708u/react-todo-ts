import InputStyle from 'components/atoms/InputStyle';
import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

type InputOnChange = (e: ChangeEvent<HTMLInputElement>) => void;
type Props = {
  value: string;
  onChange?: InputOnChange;
  placeholder?: string;
};

const NewTodo = styled(InputStyle)`
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);

  ::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  ::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  ::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
`;

const Input: FC<Props> = (props) => {
  const { value, onChange, placeholder } = props;
  return <NewTodo placeholder={placeholder} value={value} type="text" onChange={onChange} />;
};

export type { InputOnChange };
export default Input;
