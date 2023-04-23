import { Box, Container, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ReactNode } from "react";

export const FinalCardMain = ({
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
      sx={{
        border: "none",
        borderRadius: "10px",
        bgcolor: "secondary.main",
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
                width: { lg: 100, md: 100, sm: 100, xs: 100 },
                height: 5,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                bgcolor: "primary.main",
                position: "absolute",
                top: 0,
                boxShadow: "1px 2px 6px 4px rgba(240,90,34,0.3)",
              }}
            />
          )}
          <Typography variant="h3" textAlign="center">
            {title}
          </Typography>
        </Stack>
      )}
      <Box p={1}>{children}</Box>
    </Container>
  );
};
