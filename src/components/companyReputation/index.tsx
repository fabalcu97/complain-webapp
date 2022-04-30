import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutralSharp';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfiedSharp';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfiedSharp';
import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { GridItem } from 'components/gridItem';
import { ProgressBar } from 'components/progressBar';
import React from 'react';
import { CompanyDetailType } from 'utils/types/companyDetail';
import styles from './styles.module.scss';

type Props = {
  stats: CompanyDetailType['stats'];
  elevation?: number;
};

const normalize = (value: number) => value * 100;

export function CompanyReputation(props: Props) {
  const { stats, elevation = 1 } = props;

  return (
    <Card elevation={elevation}>
      <CardContent>
        <GridItem elevation={0} className={styles.countContainer}>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography textAlign='center' marginBottom={'10px'}>
                User Feeling
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              container
              flexDirection='column'
              textAlign='center'>
              <div className={styles.count}>
                <SentimentVerySatisfiedIcon color='success' />
                {normalize(stats.feeling.happy).toFixed(2)}
              </div>
            </Grid>
            <Grid
              item
              xs={4}
              container
              flexDirection='column'
              textAlign='center'
              borderLeft={'1px solid grey'}>
              <div className={styles.count}>
                <SentimentNeutralIcon color='warning' />
                {normalize(stats.feeling.neutral).toFixed(2)}
              </div>
            </Grid>
            <Grid
              item
              xs={4}
              container
              flexDirection='column'
              textAlign='center'
              borderLeft={'1px solid grey'}>
              <div className={styles.count}>
                <SentimentVeryDissatisfiedIcon color='error' />
                {normalize(stats.feeling.unhappy).toFixed(2)}
              </div>
            </Grid>
          </Grid>
        </GridItem>
        <Divider />
        <GridItem elevation={0} className={styles.countContainer}>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography textAlign='center' marginBottom={'10px'}>
                Complains
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              container
              flexDirection='column'
              textAlign='center'>
              <div className={styles.label}>Answered</div>
              <div className={styles.count}>{stats.complains.answered}</div>
            </Grid>
            <Grid
              item
              xs={6}
              container
              flexDirection='column'
              textAlign='center'
              borderLeft={'1px solid grey'}>
              <div className={styles.label}>Pending</div>
              <div className={styles.count}>{stats.complains.pending}</div>
            </Grid>
          </Grid>
        </GridItem>
        <Divider />
        <GridItem elevation={0} className={styles.countContainer}>
          <Typography textAlign='center' marginBottom={'10px'}>
            Would do business again
          </Typography>
          <ProgressBar
            value={normalize(stats.wouldDoBusinessAgain)}
            valueToDisplay={`${normalize(stats.wouldDoBusinessAgain).toFixed(2)}%`}
          />
        </GridItem>
      </CardContent>
    </Card>
  );
}
