import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import { HeaderMenu } from 'components/headerMenu';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import styles from './styles.module.scss';

export function Navbar() {
  const router = useRouter();
  const categoriesMenu = useMemo<{ label: string; navigateTo: string }[]>(
    () => [
      { label: 'Food', navigateTo: '/categories/food' },
      { label: 'Electronics', navigateTo: '/categories/electronics' },
      { label: 'Health', navigateTo: '/categories/health' },
    ],
    [],
  );

  const goToHome = () => router.push('/home');

  return (
    <AppBar position='static' variant={'elevation'}>
      <Toolbar>
        <Typography
          variant='h4'
          className={styles.logo}
          flexGrow={1}
          sx={{ cursor: 'pointer' }}
          onClick={goToHome}>
          Complain
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
