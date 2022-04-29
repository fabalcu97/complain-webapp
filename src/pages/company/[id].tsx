import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { CompanyReputation } from 'components/companyReputation';
import { GridItem } from 'components/GridItem';
import { NextPage } from 'next';
import { CompanyDetailType } from 'utils/types/companyDetail';

type Props = {
  companyDetail: CompanyDetailType;
};

type ServerSideProps = {
  props: Props;
};

const Company: NextPage<Props> = (props: Props) => {
  const { companyDetail } = props;
  return (
    <Container sx={{ flexGrow: 1, paddingTop: '16px' }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          container
          justifyContent='center'
          alignItems='center'
          flexDirection='column'>
          <Avatar
            component={GridItem}
            elevation={2}
            src={companyDetail.logoUrl}
            sx={{ height: '150px', width: '150px', marginBottom: '10px' }}
          />
          <Typography variant='h4'>{companyDetail.name}</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <GridItem elevation={1}>
            <CompanyReputation stats={companyDetail.stats} />
          </GridItem>
        </Grid>
        <Grid item xs={12} md={6}>
          <GridItem>xs=4</GridItem>
        </Grid>
        <Grid item xs={12} md={3}>
          <GridItem>
            <Typography>About {companyDetail.name}</Typography>
            <Typography variant='body2' gutterBottom>
              {companyDetail.about}
            </Typography>
          </GridItem>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Company;

export async function getServerSideProps(): Promise<ServerSideProps> {
  return {
    props: {
      companyDetail: {
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur ullamcorper aliquet. Morbi pellentesque lacus nec urna bibendum, et tristique velit congue. Praesent et libero metus. Quisque tincidunt lorem lorem, quis eleifend sapien aliquet porta. Etiam consectetur vulputate molestie. Nulla sodales diam non aliquet commodo.',
        logoUrl:
          'https://www.pinclipart.com/picdir/big/51-511102_feather-arrow-clip-art.png',
        name: 'Business',
        stats: {
          feeling: {
            happy: 0.85,
            neutral: 0.03,
            unhappy: 0.12,
          },
          wouldDoBusinessAgain: 0.75,
          complains: {
            total: 13,
            answered: 9,
            pending: 4,
          },
        },
      },
    },
  };
}
