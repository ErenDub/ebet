import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const FinalCardItem = ({
  icon,
  description,
}: {
  icon: string;
  description: string;
}) => {
  return (
    <Container
      disableGutters
      sx={{
        borderRadius: "12px",
        bgcolor: "secondary.dark",
        position: "relative",
        my: 2,
        px: 1,
        py: 1.5,
      }}
    >
      <Stack direction="row" alignItems="center" gap={2}>
        <Box component="img" src={icon} />
        <Typography fontSize={{ lg: 13, md: 13, sm: 10, xs: 10 }}>
          {description}
        </Typography>
      </Stack>
    </Container>
  );
};
