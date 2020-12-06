import { ChangeEvent, FC } from 'react';

type InputOnChange = (e: ChangeEvent<HTMLInputElement>) => void;
type Props = {
  value: string;
  onChange?: InputOnChange;
  placeholder?: string;
};

const Input: FC<Props> = (props) => {
  const { value, onChange, placeholder } = props;
  return <input className="new-todo" placeholder={placeholder} value={value} type="text" onChange={onChange} />;
};

export type { InputOnChange };
export default Input;
