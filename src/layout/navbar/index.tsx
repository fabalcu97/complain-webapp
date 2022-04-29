import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
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
  const logIn = () => {};
  const signUp = () => {};

  return (
    <AppBar position='sticky' variant={'elevation'}>
      <Toolbar>
        <Typography
          variant='h4'
          className={styles.logo}
          flexGrow={1}
          sx={{ cursor: 'pointer' }}
          onClick={goToHome}>
          Complain
        </Typography>
        <HeaderMenu label={'Categories'} menu={categoriesMenu} />
        {/* <HeaderMenu label={'Ranking'} navigateTo={'/ranking'} /> */}
        <HeaderMenu label={'Contact Us'} navigateTo={'/contact-us'} />
        {false ? (
          <Avatar />
        ) : (
          <>
            <HeaderMenu label='Log In' onClick={logIn} />
            <HeaderMenu label='Sign Up' onClick={signUp} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
