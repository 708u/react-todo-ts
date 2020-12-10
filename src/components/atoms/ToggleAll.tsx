import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  isToggled: boolean;
  onChange: () => void;
};

const ToggleAllInput = styled.input`
  text-align: center;
  border: none; /* Mobile Safari */
  opacity: 0;
  position: absolute;
`;

const Label = styled.label<{ isToggled: boolean }>`
  width: 60px;
  height: 34px;
  font-size: 0;
  /*  FIXME: 動かない */
  color: ${(isToggled) => (isToggled ? '#737373' : '#e6e6e6')};
  position: absolute;
  top: -52px;
  left: -13px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);

  &:before {
    content: '❯';
    font-size: 22px;
    padding: 10px 27px 10px 27px;
  }
`;

const ToggleAll: FC<Props> = (props) => {
  const { isToggled, onChange } = props;

  return (
    <>
      <ToggleAllInput id="toggle-all" type="checkbox" onChange={onChange} checked={isToggled} />
      <Label isToggled={isToggled} htmlFor="toggle-all">
        {}
      </Label>
    </>
  );
};

export default ToggleAll;
