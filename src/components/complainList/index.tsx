import clsx from 'clsx';
import React from 'react';
import { BaseComponentProps } from 'utils/types/baseComponentProps';

import styles from './styles.module.scss'

type Props = {
  companyId: string
} & BaseComponentProps;

function ComplainList(props: Props) {
  const { companyId, containerStyle } = props;

  return <div className={clsx([styles.complainListContainer, containerStyle])}>
  </div>
}

export default ComplainList;