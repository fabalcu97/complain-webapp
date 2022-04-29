import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { isFunction } from 'lodash';

type Props = {
  label: string;
  navigateTo?: string;
  onClick?: () => void;
  menu?: {
    label: string;
    navigateTo: string;
  }[];
};
export const HeaderMenu = (props: Props) => {
  const { menu, navigateTo, label, onClick } = props;
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!!onClick && isFunction(onClick)) {
      onClick();
      return;
    }
    if (!!navigateTo) {
      router.push(navigateTo);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id='menu-button'
        aria-controls={open ? 'menu-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={onButtonClick}
        color={'inherit'}>
        {label} {!!menu && (open ? <ExpandLess /> : <ExpandMore />)}
      </Button>
      {!!menu && (
        <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
          {menu.map((v, idx) => (
            <MenuItem key={`${v.label}-${idx}`}>
              <Link href={v.navigateTo}>{v.label}</Link>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};
