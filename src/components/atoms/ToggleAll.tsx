import { FC } from 'react';

const ToggleAll: FC = () => {
  return (
    <label htmlFor="toggle-all">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
    </label>
  );
};

export default ToggleAll;
