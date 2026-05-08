import { FC, ReactElement } from 'react';

type AppWrapperProps = {
  children: ReactElement;
  className?: string;
};

const AppWrapper: FC<AppWrapperProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default AppWrapper;
