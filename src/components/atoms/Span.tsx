import { FC } from 'react';

type Props = {
  className: string;
};

const Span: FC<Props> = (props) => {
  const { className, children } = props;
  return <span className={className}>{children}</span>;
};

export default Span;
