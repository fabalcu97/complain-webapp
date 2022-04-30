import { Autocomplete, TextField } from '@mui/material';
import { CompanyListItem } from 'components/companyListItem';
import { GridItem } from 'components/gridItem';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useSearchCompany } from 'utils/hooks/api/useSearchCompany';
import { CompanyType } from 'utils/types/company';

type Props = {
  label: string;
};

export function CompanySearchInput(props: Props) {
  const { label } = props;
  const [options, setOptions] = useState<CompanyType[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading } = useSearchCompany(searchValue);

  const changeText = (_: SyntheticEvent, text: string) => setSearchValue(text);

  useEffect(() => {
    if (data) {
      setOptions(data);
    }
  }, [data]);

  return (
    <GridItem elevation={0}>
      <Autocomplete
        options={options}
        inputValue={searchValue}
        onInputChange={changeText}
        renderInput={(params) => (
          <TextField {...params} label={label} fullWidth />
        )}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.name
        }
        loading={isLoading}
        renderOption={(props, option) => (
          <CompanyListItem key={option.id} company={option} />
        )}
      />
    </GridItem>
  );
}
