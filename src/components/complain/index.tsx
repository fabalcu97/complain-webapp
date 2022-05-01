import { BaseComponentProps } from 'utils/types/baseComponent';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { ComplainType } from 'utils/types/complain';
import { GridItem } from 'components/gridItem';

type Props = {
  complain: ComplainType;
} & BaseComponentProps;

Complain.defaultProps = {};

export function Complain(props: Props) {
  const { containerStyle, complain } = props;

  return (
    <GridItem className={clsx([styles.complainContainer, containerStyle])}>
      <div className={styles.title}>{complain.title}</div>
    </GridItem>
  );
}
