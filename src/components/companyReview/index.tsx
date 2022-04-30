import { Avatar, Typography } from '@mui/material';
import clsx from 'clsx';
import { CompanyReputation } from 'components/companyReputation';
import { GridItem } from 'components/gridItem';
import React from 'react';
import { BaseComponentProps } from 'utils/types/baseComponentProps';
import { CompanyDetailType } from 'utils/types/companyDetail';
import styles from './styles.module.scss';

type Props = {
  company: CompanyDetailType;
} & BaseComponentProps;

export function CompanyReview(props: Props) {
  const { company, containerStyle } = props;

  return (
    <GridItem
      elevation={1}
      className={clsx(styles.companyReviewContainer, containerStyle)}>
      <Avatar
        component={GridItem}
        elevation={3}
        src={company.logoUrl}
        sx={{ height: '100px', width: '100px', marginBottom: '10px' }}
      />
      <Typography textAlign='center' variant='h6'>
        {company.name}
      </Typography>
      <CompanyReputation elevation={0} stats={company.stats} />
    </GridItem>
  );
}
