import CommentIcon from '@mui/icons-material/Comment';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import { Card, CardContent, Chip, ListItem } from '@mui/material';
import clsx from 'clsx';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import { BaseComponentProps } from 'utils/types/baseComponentProps';
import { ComplainStatusEnum, ComplainType } from 'utils/types/complain';
import styles from './styles.module.scss';

function getStatusChipColor(status: ComplainStatusEnum) {
  switch (status) {
    case ComplainStatusEnum.ANSWERED:
      return 'success';
    case ComplainStatusEnum.UNANSWERED:
      return 'error';
    default:
      return 'default';
  }
}
function complainStatusChipIcon(status: ComplainStatusEnum) {
  switch (status) {
    case ComplainStatusEnum.ANSWERED:
      return <CommentIcon fontSize='small' />;
    case ComplainStatusEnum.UNANSWERED:
      return <CommentsDisabledIcon fontSize='small' />;
    default:
      return <></>;
  }
}

type Props = { complain: ComplainType } & BaseComponentProps;

export function Complain(props: Props) {
  const { complain, containerStyle } = props;

  return (
    <ListItem className={clsx([styles.complainContainer, containerStyle])}>
      <Card elevation={2}>
        <CardContent>
          <span className={styles.title}>{complain.title}</span>
          <div className={styles.chips}>
            {complain.reasons.map((v, idx) => (
              <Chip
                key={`${v}-${idx}`}
                className={styles.chip}
                label={v}
                size='small'
                color='secondary'
              />
            ))}
          </div>
          <p>{complain.summary}</p>
          <div className={styles.footer}>
            <Chip
              className={styles.status}
              label={complain.status.toLowerCase()}
              color={getStatusChipColor(complain.status)}
              icon={complainStatusChipIcon(complain.status)}
            />
            <span className={styles.createdDate}>
              {formatDistanceToNow(new Date(complain.createdDate), {
                addSuffix: true,
                includeSeconds: true,
              })}
            </span>
          </div>
        </CardContent>
      </Card>
    </ListItem>
  );
}
