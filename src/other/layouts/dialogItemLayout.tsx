import { Container, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { muiTheme } from "other/theme";
import { ReactNode } from "react";

export const DialogItemLayout = ({
  children,
  title = "",
  bg = true,
  light = true,
}: {
  children: ReactNode;
  title?: string;
  bg?: boolean;
  light?: boolean;
}) => {
  return (
    <Container
      component={Paper}
      disableGutters
      maxWidth="md"
      sx={{
        my: 4,
        border: "none",
        boxShadow: ` 0px 0px 0px 4px ${muiTheme.palette.secondary.light}`,
        borderRadius: "16px",
        bgcolor: "secondary.dark",
        position: "relative",
      }}
    >
      {title.length > 0 && (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            borderRadius: "inherit",
            bgcolor: bg ? "secondary.light" : "transparent",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            height: 70,
            position: "relative",
          }}
        >
          {light && (
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
          )}
          <Typography variant="h2" textAlign="center">
            {title}
          </Typography>
        </Stack>
      )}
      <Box p={2}>{children}</Box>
    </Container>
  );
};
