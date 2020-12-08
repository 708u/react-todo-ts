import { FC } from 'react';

type Props = {
  href: string;
  isSelected?: boolean;
  onClick?: () => void;
};

const Toggler: FC<Props> = (props) => {
  const { href, isSelected = false, onClick, children } = props;
  return (
    <a href={href} className={isSelected ? 'selected' : ''} onClick={onClick}>
      {children}
    </a>
  );
};

export default Toggler;
