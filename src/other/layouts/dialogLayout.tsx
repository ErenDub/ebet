import { Container, Paper } from "@mui/material";
import { ReactNode } from "react";

export const DialogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      component={Paper}
      disableGutters
      maxWidth="md"
      sx={{
        my: 3,
        pb: 10,
        border: "none",
        borderRadius: { lg: "13px", md: "13px", sm: 0, xs: 0 },
        bgcolor: "#1C1D1E",
        position: "relative",
      }}
    >
      {children}
    </Container>
  );
};
