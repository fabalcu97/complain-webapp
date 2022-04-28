import { PropsWithChildren } from 'react';

export const Noop = ({ children }: PropsWithChildren<{}>): JSX.Element => (
  <>{children}</>
);
