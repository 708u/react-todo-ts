import { FC } from 'react';

const ToggleAll: FC = () => {
  return (
    <label htmlFor="toggle-all">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked />
    </label>
  );
};

export default ToggleAll;
