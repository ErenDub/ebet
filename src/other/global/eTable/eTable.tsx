import { Box, Grid, Typography } from "@mui/material";
import { muiTheme } from "other/theme";

export const ETable = ({
  head = [],
  body,
}: {
  head?: { text: string; icon?: string }[];
  body: React.ReactNode;
}) => {
  return (
    <Box sx={{ bgcolor: "secondary.light", my: 4, p: 2, borderRadius: "12px" }}>
      <Grid container justifyContent="space-between" rowGap={2}>
        {head.length > 0 &&
          head.map((headItem, index) => (
            <Grid
              key={headItem.text}
              item
              lg={12 / head.length}
              textAlign={index === 0 ? "left" : "center"}
              px={2}
              pr={2}
            >
              <Typography fontSize={12} sx={{ opacity: 0.6 }}>
                {headItem.icon && (
                  <Box
                    component="img"
                    src={headItem.icon}
                    sx={{
                      width: { lg: 12, md: 12, sm: 10, xs: 10 },
                    }}
                  />
                )}
                {headItem.text}
              </Typography>
            </Grid>
          ))}
        <Grid
          container
          rowGap={2}
          sx={{
            overflowY: "scroll",
            pr: 1,
            maxHeight: 450,
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              background: muiTheme.palette.secondary.main,
            },
            "&::-webkit-scrollbar-thumb": {
              background: muiTheme.palette.primary.main,
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: muiTheme.palette.primary.dark,
            },
          }}
        >
          {body}
        </Grid>
      </Grid>
    </Box>
  );
};
