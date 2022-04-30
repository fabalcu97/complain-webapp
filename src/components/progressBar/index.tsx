import { LinearProgress, linearProgressClasses } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { BaseComponentProps } from 'utils/types/baseComponentProps';
import styles from './styles.module.scss';

type Props = {
  label: string;
  value: number;
  valueToDisplay: string;
} & BaseComponentProps;

ProgressBar.defaultProps = {
  label: '',
  valueToDisplay: '',
};

export function ProgressBar(props: Props) {
  const { label, value, valueToDisplay, containerStyle } = props;

  return (
    <div className={clsx(styles.progressBarContainer, containerStyle)}>
      {label ? (
        <>
          {label}
          <br />
        </>
      ) : null}
      <div className={styles.linearProgressContainer}>
        <LinearProgress
          variant='determinate'
          value={value}
          sx={{
            width: '100%',
            height: 15,
            borderRadius: 5,
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
            },
          }}
        />
        {valueToDisplay && (
          <span className={styles.valueLabel}>{valueToDisplay}</span>
        )}
      </div>
    </div>
  );
}
