import { Container, Grid } from '@mui/material';
import { CompanyInformation } from 'components/companyInformation';
import { CompanyReview } from 'components/companyReview';
import ComplainList from 'components/complainList';
import { NextPage } from 'next';
import { getCompanyDetail } from 'temporal/company';
import { CompanyDetailType } from 'utils/types/companyDetail';
import styles from './styles.module.scss';

type Props = {
  companyDetail: CompanyDetailType;
};

type ServerSideProps = {
  props: Props;
};

const Company: NextPage<Props> = (props: Props) => {
  const { companyDetail } = props;

  return (
    <Container className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <CompanyReview company={companyDetail} />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 3, sm: 3, md: 2 }}>
          <ComplainList companyId={companyDetail.id} />
        </Grid>
        <Grid item xs={12} md={3} order={{ xs: 2, sm: 2, md: 3 }}>
          <CompanyInformation company={companyDetail} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Company;

export async function getServerSideProps(): Promise<ServerSideProps> {
  return {
    props: {
      companyDetail: getCompanyDetail(),
    },
  };
}
