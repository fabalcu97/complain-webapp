import { PropsWithChildren } from 'react';
import { Footer } from 'layout/footer';
import { Navbar } from 'layout/navbar';
import { Container, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

export function Layout(props: PropsWithChildren<{}>) {
  const { children } = props;
  const theme = useTheme();

  return (
    <Container disableGutters fixed>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
