import { Paper, PaperProps } from "@mui/material";

type Props = {} & PaperProps;

export function GridItem(props: Props) {
  return <Paper elevation={2} {...props} />;
}
