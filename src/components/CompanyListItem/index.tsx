import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
} from '@mui/material';
import { useRouter } from 'next/router';
import { CompanyType } from 'utils/types/company';

type Props = {
  company: CompanyType;
};

export function CompanyListItem(props: Props) {
  const { company } = props;
  const router = useRouter();

  const goToCompany = () => router.push(`/company/${company.id}`);

  return (
    <ListItem
      divider
      alignItems='flex-start'
      onClick={goToCompany}
      sx={{ cursor: 'pointer' }}>
      <ListItemAvatar>
        <Avatar alt={`${company.name} Logo image`} src={company.logoUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={company.name}
        secondary={<Rating name='read-only' value={company.rating} readOnly />}
      />
    </ListItem>
  );
}
