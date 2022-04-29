import {
  Card,
  CardContent,
  Grid,
  LinearProgress,
  linearProgressClasses,
  Typography,
  Box,
} from '@mui/material';
import { GridItem } from 'components/GridItem';
import React from 'react';
import { CompanyDetailType } from 'utils/types/companyDetail';
import styles from './styles.module.scss';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfiedSharp';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutralSharp';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfiedSharp';

type Props = {
  stats: CompanyDetailType['stats'];
};

const normalize = (value: number) => `${value * 100}%`;

const Score = ({ label, value }: { label: string; value: number }) => (
  <Box
    sx={{
      marginTop: '10px',
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    }}>
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
      <Typography className={styles.valueLabel}>{value}%</Typography>
    </div>
  </Box>
);

export function CompanyReputation(props: Props) {
  const { stats } = props;

  return (
    <Card>
      <CardContent>
        <GridItem elevation={1} className={styles.countContainer}>
          <Grid container xs={12}>
            <Grid xs={12}>
              <Typography textAlign='center' marginBottom={'10px'}>
                User Feeling
              </Typography>
            </Grid>
            <Grid xs={4} container flexDirection='column' textAlign='center'>
              <div className={styles.count}>
                <SentimentVerySatisfiedIcon color='success' />
                {normalize(stats.feeling.happy)}
              </div>
            </Grid>
            <Grid
              xs={4}
              container
              flexDirection='column'
              textAlign='center'
              borderLeft={'1px solid grey'}>
              <div className={styles.count}>
                <SentimentNeutralIcon color='warning' />
                {normalize(stats.feeling.neutral)}
              </div>
            </Grid>
            <Grid
              xs={4}
              container
              flexDirection='column'
              textAlign='center'
              borderLeft={'1px solid grey'}>
              <div className={styles.count}>
                <SentimentVeryDissatisfiedIcon color='error' />
                {normalize(stats.feeling.unhappy)}
              </div>
            </Grid>
          </Grid>
        </GridItem>
        <GridItem elevation={1} className={styles.countContainer}>
          <Grid container xs={12}>
            <Grid xs={12}>
              <Typography textAlign='center' marginBottom={'10px'}>
                Complains
              </Typography>
            </Grid>
            <Grid xs={6} container flexDirection='column' textAlign='center'>
              <div className={styles.label}>Answered</div>
              <div className={styles.count}>{stats.complains.answered}</div>
            </Grid>
            <Grid
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
        <GridItem elevation={1} className={styles.countContainer}>
          <Typography textAlign='center' marginBottom={'10px'}>
            Would do business again
          </Typography>
          <Score label='' value={stats.wouldDoBusinessAgain * 100} />
        </GridItem>
      </CardContent>
    </Card>
  );
}
