import { BaseComponentProps } from 'utils/types/baseComponent';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

type Props = {} & BaseComponentProps;

Complain.defaultProps = {};

export function Complain(props: Props) {
  const { containerStyle } = props;

  return (
    <div className={clsx([styles.ComplainContainer, containerStyle])}></div>
  );
}
