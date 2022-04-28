import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Collapse,
  Container,
  Grid,
  List,
  ListSubheader,
  Typography,
} from '@mui/material';
import { CompanyListItem } from 'components/CompanyListItem';
import { GridItem } from 'components/GridItem';
import { random } from 'lodash';
import type { NextPage } from 'next';
import {
  generateBadCompanies,
  generateGoodCompanies,
} from 'pages/home/constants';
import { useState } from 'react';
import { CompanyType } from 'utils/types/company';
import styles from './styles.module.scss';

type Props = {
  bestCompanies: CompanyType[];
  worstCompanies: CompanyType[];
};

type ServerSideReturnType = {
  props: Props;
};

// TODO: Collapse only if mobile
const Home: NextPage<Props> = (props: Props) => {
  const { bestCompanies, worstCompanies } = props;
  const [openBestCompaniesList, setOpenBestCompaniesList] = useState(false);
  const [openWorstCompaniesList, setOpenWorstCompaniesList] = useState(false);

  return (
    <Container fixed>
      <Grid container spacing={2} marginTop={'10px'} marginBottom={'10px'}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Leave a review</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Raise a complain</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Search</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Collapse in={openBestCompaniesList} collapsedSize={50}>
                <List
                  sx={{ maxHeight: '70vh', overflow: 'auto' }}
                  subheader={<li />}>
                  <ListSubheader
                    disableGutters
                    className={styles.collapsibleHeader}
                    onClick={() => setOpenBestCompaniesList((v) => !v)}>
                    <Typography>Better rated companies</Typography>
                    {openBestCompaniesList ? <ExpandLess /> : <ExpandMore />}
                  </ListSubheader>
                  {bestCompanies.map((company, idx) => (
                    <CompanyListItem
                      key={`${company.id}-${idx}`}
                      company={company}
                    />
                  ))}
                </List>
              </Collapse>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Collapse in={openWorstCompaniesList} collapsedSize={50}>
                <List
                  sx={{ maxHeight: '70vh', overflow: 'auto' }}
                  subheader={<li />}>
                  <ListSubheader
                    disableGutters
                    className={styles.collapsibleHeader}
                    onClick={() => setOpenWorstCompaniesList((v) => !v)}>
                    <Typography>Worst rated companies</Typography>
                    {openWorstCompaniesList ? <ExpandLess /> : <ExpandMore />}
                  </ListSubheader>
                  {worstCompanies.map((company, idx) => (
                    <CompanyListItem
                      key={`${company.id}-${idx}`}
                      company={company}
                    />
                  ))}
                </List>
              </Collapse>
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
      bestCompanies: generateGoodCompanies(20).sort(
        (a, b) => b.rating - a.rating,
      ),
      worstCompanies: generateBadCompanies(20).sort(
        (a, b) => a.rating - b.rating,
      ),
    },
  };
}
