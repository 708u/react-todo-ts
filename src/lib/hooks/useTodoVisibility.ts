import { Dispatch, useState } from 'react';

type TodoVisibility = 'all' | 'active' | 'completed';
type visibilitiesType = {
  [key in TodoVisibility]: TodoVisibility;
};
const visibilities: visibilitiesType = {
  all: 'all',
  active: 'active',
  completed: 'completed',
} as const;

type visibilityStatus = {
  status: TodoVisibility;
};

const useTodoVisibility = (): [visibilityStatus, Dispatch<visibilityStatus>] => {
  const [visibility, setVisibility] = useState<{ status: TodoVisibility }>({ status: visibilities.all });
  return [visibility, setVisibility];
};

export type { TodoVisibility };
export { visibilities };
export default useTodoVisibility;
