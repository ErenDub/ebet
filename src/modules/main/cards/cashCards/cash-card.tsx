import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const CashCard = ({
  icon,
  description,
}: {
  icon: string;
  description: string;
}) => {
  return (
    <Container
      sx={{
        borderRadius: "12px",
        bgcolor: "secondary.dark",
        position: "relative",
        my: 2,
      }}
    >
      <Box
        sx={{
          width: 4,
          height: 45,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          bgcolor: "primary.main",
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translate(10%, -50%)",
          boxShadow: "1px 2px 6px 4px rgba(240,90,34,0.3)",
        }}
      />
      <Stack direction="row" alignItems="center" height={72} gap={2}>
        <Box component="img" src={icon} />
        <Typography fontSize={{ lg: 15, md: 15, sm: 10, xs: 10 }}>
          {description}
        </Typography>
      </Stack>
    </Container>
  );
};
