import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from '@mui/material';
import { CompanyType } from 'utils/types/company';

type Props = {
  company: CompanyType;
};

export function CompanyListItem(props: Props) {
  const { company } = props;

  return (
    <ListItem alignItems='flex-start'>
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
