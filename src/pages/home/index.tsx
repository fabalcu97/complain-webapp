import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Divider,
  Collapse,
  Container,
  Grid,
  List,
  ListSubheader,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { CompanyListItem } from 'components/CompanyListItem';
import { CompanySearchInput } from 'components/companySearchInput';
import type { NextPage } from 'next';
import { useState } from 'react';
import {
  generateBadCompanies,
  generateGoodCompanies,
} from 'temporal/homeConstants';
import { Noop } from 'utils';
import { CompanyType } from 'utils/types/company';
import styles from './styles.module.scss';

type Props = {
  bestCompanies: CompanyType[];
  worstCompanies: CompanyType[];
};

type ServerSideReturnType = {
  props: Props;
};

const Home: NextPage<Props> = (props: Props) => {
  const { bestCompanies, worstCompanies } = props;
  const [openBestCompaniesList, setOpenBestCompaniesList] = useState(false);
  const [openWorstCompaniesList, setOpenWorstCompaniesList] = useState(false);

  const isMobile = useMediaQuery('(max-width:768px)');
  const CollapseComponent = isMobile ? Collapse : Noop;

  return (
    <Container fixed>
      <Grid container spacing={2} marginTop={'10px'} marginBottom={'10px'}>
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent>
              <CompanySearchInput label='Search for a company' />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <CollapseComponent in={openBestCompaniesList} collapsedSize={50}>
                <List subheader={<li />}>
                  <ListSubheader
                    disableGutters
                    className={styles.collapsibleHeader}
                    onClick={() => setOpenBestCompaniesList((v) => !v)}>
                    <Typography>Better rated companies</Typography>
                    {isMobile &&
                      (openBestCompaniesList ? <ExpandLess /> : <ExpandMore />)}
                  </ListSubheader>
                  {bestCompanies.map((company, idx) => (
                    <>
                      <Divider />
                      <CompanyListItem
                        key={`${company.id}-${idx}`}
                        company={company}
                      />
                    </>
                  ))}
                </List>
              </CollapseComponent>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <CollapseComponent in={openWorstCompaniesList} collapsedSize={50}>
                <List subheader={<li />}>
                  <ListSubheader
                    disableGutters
                    className={styles.collapsibleHeader}
                    onClick={() => setOpenWorstCompaniesList((v) => !v)}>
                    <Typography>Worst rated companies</Typography>
                    {isMobile &&
                      (openWorstCompaniesList ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      ))}
                  </ListSubheader>
                  {worstCompanies.map((company, idx) => (
                    <>
                      <Divider />
                      <CompanyListItem
                        key={`${company.id}-${idx}`}
                        company={company}
                      />
                    </>
                  ))}
                </List>
              </CollapseComponent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

export async function getServerSideProps(): Promise<ServerSideReturnType> {
  return {
    props: {
      bestCompanies: generateGoodCompanies(10).sort(
        (a, b) => b.rating - a.rating,
      ),
      worstCompanies: generateBadCompanies(10).sort(
        (a, b) => a.rating - b.rating,
      ),
    },
  };
}
