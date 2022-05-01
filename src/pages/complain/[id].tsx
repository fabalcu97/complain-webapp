import { Container, Grid } from '@mui/material';
import { CompanyInformation } from 'components/companyInformation';
import { Complain } from 'components/complain';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { generateComplain } from 'temporal/complains';
import { ComplainType } from 'utils/types/complain';
import styles from './styles.module.scss';

type Props = {
  complain: ComplainType;
};

type ServerSideProps = {
  props: Props;
};

const Company: NextPage<Props> = (props: Props) => {
  const { complain } = props;
  const router = useRouter();

  const goToCompany = () => router.push(`/company/${complain.companyId}`);

  return (
    <Container className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Complain complain={complain} />
        </Grid>
        <Grid item xs={12} md={3} order={{ xs: 2, sm: 2, md: 3 }}>
          <CompanyInformation
            showAvatar
            company={complain.company}
            onClick={goToCompany}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Company;

export async function getServerSideProps(): Promise<ServerSideProps> {
  return {
    props: {
      complain: generateComplain(),
    },
  };
}
