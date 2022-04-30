import { Divider, Grid, IconButton, Typography } from '@mui/material';
import clsx from 'clsx';
import { GridItem } from 'components/gridItem';
import moment from 'moment';
import React from 'react';
import { BaseComponentProps } from 'utils/types/baseComponentProps';
import { CompanyDetailType } from 'utils/types/companyDetail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './styles.module.scss';

type Props = {
  company: CompanyDetailType;
} & BaseComponentProps;

export function CompanyInformation(props: Props) {
  const { company, containerStyle } = props;

  return (
    <GridItem
      className={clsx([styles.companyInformationContainer, containerStyle])}>
      <div className={styles.companyDescription}>
        <Typography variant='subtitle1' fontWeight={'500'}>
          About {company.name}
        </Typography>
        <Typography variant='body2' gutterBottom>
          {company.about}
        </Typography>
      </div>
      <div className={styles.companyDetailsContainer}>
        <div className={styles.companyDetails}>
          <Typography variant='subtitle2'>Member since</Typography>
          <Typography className={styles.innerText}>
            {moment(company.registeredAt).format('MMMM YYYY')}
          </Typography>
        </div>
        <Divider />
        <div className={styles.companyDetails}>
          <Typography variant='subtitle2'>Legal ID</Typography>
          <Typography className={styles.innerText}>
            {company.legalId}
          </Typography>
        </div>
        <Divider />
        <div className={styles.companyDetails}>
          <Typography variant='subtitle2'>Email</Typography>
          <Typography className={styles.innerText}>
            {company.contactEmail}
          </Typography>
        </div>
        <Divider />
        <div className={styles.companyDetails}>
          <Typography variant='subtitle2'>Phone</Typography>
          <Typography className={styles.innerText}>
            {company.phoneNumber}
          </Typography>
        </div>
        <Divider />
        <div className={styles.companyDetails}>
          <Typography variant='subtitle2'>Social Networks</Typography>
          <Grid>
            {company.facebookPage && (
              <IconButton href={company.facebookPage} target='_blank'>
                <FacebookIcon />
              </IconButton>
            )}
            {company.instagramPage && (
              <IconButton href={company.instagramPage} target='_blank'>
                <InstagramIcon />
              </IconButton>
            )}
          </Grid>
        </div>
      </div>
    </GridItem>
  );
}
