import { FC } from 'react';

type Props = {
  isToggled: boolean;
  onChange: () => void;
};

const ToggleAll: FC<Props> = (props) => {
  const { isToggled, onChange } = props;

  return (
    <>
      <input id="toggle-all" className="toggle-all" type="checkbox" onChange={onChange} checked={isToggled} />
      <label htmlFor="toggle-all">{}</label>
    </>
  );
};

export default ToggleAll;
