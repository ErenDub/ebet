import { Container, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { muiTheme } from "other/theme";
import { ReactNode } from "react";

export const DialogItemLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <Container
      component={Paper}
      disableGutters
      maxWidth="md"
      sx={{
        my: 4,
        border: "none",
        outline: `4px solid ${muiTheme.palette.secondary.light}`,
        borderRadius: "16px",
        bgcolor: "secondary.dark",
      }}
    >
      {title.length > 0 && (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            borderRadius: "inherit",
            bgcolor: "secondary.light",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            height: 70,
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: { lg: 250, md: 250, sm: 125, xs: 125 },
              height: 5,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              bgcolor: "primary.main",
              position: "absolute",
              top: -4,
              boxShadow: "1px 2px 6px 4px rgba(240,90,34,0.3)",
            }}
          />
          <Typography variant="h2">{title}</Typography>
        </Stack>
      )}
      <Box p={2}>{children}</Box>
    </Container>
  );
};
