import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import styles from './styles.module.scss';
import { HeaderMenu } from 'components/headerMenu';
import { useMemo } from 'react';
import { GridItem } from 'components/GridItem';

export function Navbar() {
  const categoriesMenu = useMemo<{ label: string; navigateTo: string }[]>(
    () => [
      { label: 'Food', navigateTo: '/categories/food' },
      { label: 'Electronics', navigateTo: '/categories/electronics' },
      { label: 'Health', navigateTo: '/categories/health' },
    ],
    [],
  );

  return (
    <AppBar position='static' variant={'elevation'}>
      <Toolbar>
        <Typography variant='h4' className={styles.logo} flexGrow={1}>
          Reclama
        </Typography>
        <div className={styles.navlinks}>
          <Button color={'inherit'}>Log In</Button>
          <Button color={'inherit'}>Sign Up</Button>
        </div>
      </Toolbar>
      <Toolbar>
        <Grid container>
          <Grid item xs={4} md={2}>
            <HeaderMenu label={'Categories'} menu={categoriesMenu} />
          </Grid>
          <Grid item xs={4} md={2}>
            <HeaderMenu label={'Ranking'} navigateTo={'/ranking'} />
          </Grid>
          <Grid item xs={4} md={2}>
            <HeaderMenu label={'Contact Us'} navigateTo={'/contact-us'} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
