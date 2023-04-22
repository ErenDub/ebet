import {
  styled,
  Tab as MuiTab,
  tabClasses,
  TabProps as MuiTabProps,
} from "@mui/material";

const StyledTab = styled((props) => (
  <MuiTab disableRipple {...props} />
))<MuiTabProps>(({ theme }) => ({
  ...theme.typography.body2,
  minWidth: "auto",
  minHeight: "auto",
  marginRight: theme.spacing(0.25),
  padding: "12px 24px",
  textTransform: "none",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.common.white,
  borderTopRightRadius: "4px",
  borderTopLeftRadius: "4px",
  border: "none",
  transition: ".3s",

  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },

  [`&.${tabClasses.selected}`]: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
  },
}));

export const Tab = <C extends React.ElementType>(
  props: MuiTabProps<C, { component?: C }>
) => {
  return <StyledTab {...props} />;
};
