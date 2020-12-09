import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

type InputOnChange = (e: ChangeEvent<HTMLInputElement>) => void;
type Props = {
  value: string;
  onChange?: InputOnChange;
  placeholder?: string;
};

const InputStyle = styled.input`
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
  return <InputStyle className="new-todo" placeholder={placeholder} value={value} type="text" onChange={onChange} />;
};

export type { InputOnChange };
export default Input;
