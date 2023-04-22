import { Box, Paper, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";

export const CashBottomInfo = () => {
  return (
    <Container
      component={Paper}
      disableGutters
      maxWidth="md"
      sx={{
        my: 4,
        border: "none",
        borderRadius: "16px",
        bgcolor: "secondary.dark",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          borderRadius: "inherit",
          bgcolor: "secondary.light",

          position: "relative",
          py: 3,
        }}
      >
        <Box
          sx={{
            width: 250,
            height: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            bgcolor: "primary.main",
            position: "absolute",
            top: 0,
            boxShadow: "1px 2px 6px 4px rgba(240,90,34,0.3)",
          }}
        />
        <Stack gap={2}>
          <Typography variant="h2" textAlign="center">
            დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 SIDE
            ლიდერბორდი
          </Typography>
          <Typography
            fontSize={{ lg: 14, md: 14, sm: 12, xs: 12 }}
            textAlign="center"
          >
            * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
            ლობიში.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
