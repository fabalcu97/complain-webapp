import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { CompanyReputation } from 'components/companyReputation';
import { GridItem } from 'components/gridItem';
import moment from 'moment';
import { NextPage } from 'next';
import { CompanyDetailType } from 'utils/types/companyDetail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './styles.module.scss';
import { getCompanyDetail } from 'temporal/company';

type Props = {
  companyDetail: CompanyDetailType;
};

type ServerSideProps = {
  props: Props;
};

const Company: NextPage<Props> = (props: Props) => {
  const { companyDetail } = props;
  return (
    <Container className={styles.container} >
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
          <GridItem className={styles.aboutContainer}>
            <div className={styles.companyDescription}>
              <Typography variant='subtitle1' fontWeight={'500'}>
                About {companyDetail.name}
              </Typography>
              <Typography variant='body2' gutterBottom>
                {companyDetail.about}
              </Typography>
            </div>
            <GridItem elevation={0}>
              <div className={styles.companyDetails}>
                <Typography variant='subtitle2'>Member since</Typography>
                <Typography className={styles.innerText}>
                  {moment(companyDetail.registeredAt).format('MMMM YYYY')}
                </Typography>
              </div>
              <Divider />
              <div className={styles.companyDetails}>
                <Typography variant='subtitle2'>Legal ID</Typography>
                <Typography className={styles.innerText}>
                  {companyDetail.legalId}
                </Typography>
              </div>
              <Divider />
              <div className={styles.companyDetails}>
                <Typography variant='subtitle2'>Email</Typography>
                <Typography className={styles.innerText}>
                  {companyDetail.contactEmail}
                </Typography>
              </div>
              <Divider />
              <div className={styles.companyDetails}>
                <Typography variant='subtitle2'>Phone</Typography>
                <Typography className={styles.innerText}>
                  {companyDetail.phoneNumber}
                </Typography>
              </div>
              <Divider />
              <div className={styles.companyDetails}>
                <Typography variant='subtitle2'>Social Networks</Typography>
                <Grid>
                  {companyDetail.facebookPage && (
                    <IconButton
                      href={companyDetail.facebookPage}
                      target='_blank'>
                      <FacebookIcon />
                    </IconButton>
                  )}
                  {companyDetail.instagramPage && (
                    <IconButton
                      href={companyDetail.instagramPage}
                      target='_blank'>
                      <InstagramIcon />
                    </IconButton>
                  )}
                </Grid>
              </div>
            </GridItem>
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
      companyDetail: getCompanyDetail()
    },
  };
}
