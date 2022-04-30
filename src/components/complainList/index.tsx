import { List, Pagination, Typography } from '@mui/material';
import clsx from 'clsx';
import { Complain } from 'components/complain';
import { GridItem } from 'components/gridItem';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useGetCompanyComplains } from 'utils/hooks/api/useGetCompanyComplains';
import { BaseComponentProps } from 'utils/types/baseComponentProps';
import styles from './styles.module.scss';

const ITEMS_PER_PAGE = 20;

type Props = {
  companyId: string;
} & BaseComponentProps;

function ComplainList(props: Props) {
  const { companyId, containerStyle } = props;
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const { data } = useGetCompanyComplains(companyId);

  useEffect(() => {
    if (data) {
      setCount(data.count);
    }
  }, [data]);

  const handleChange = (_: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <GridItem className={clsx([styles.complainListContainer, containerStyle])}>
      <Typography variant='h6' textAlign='center'>
        Complains
      </Typography>
      <List className={styles.list} subheader={<li />}>
        {/* <ListSubheader>
        </ListSubheader> */}
        {(data?.data || [])?.map((complain) => (
          <Complain key={complain.id} complain={complain} />
        ))}
      </List>
      <Pagination
        count={Math.ceil(count / ITEMS_PER_PAGE)}
        page={page}
        onChange={handleChange}
      />
    </GridItem>
  );
}

export default ComplainList;
