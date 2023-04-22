import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EF5A21",
      dark: "#b0390e",
    },
    secondary: {
      main: "#25292B",
      light: "#2C3234",
      dark: "#171718",
    },
    success: {
      main: "#5E8B7E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#DFD3C3",
      disabled: "#DDDDDD",
    },
    background: {
      default: "#FAF7F0",
    },
    divider: "#EDEEF2",
    error: {
      main: "#992f2f",
    },
    info: {
      main: "#1F68FA",
    },
    warning: {
      main: "#FBA930",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 940,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#F4F4F4",
        },
      },
    },
  },

  typography: {
    fontFamily: "NovemberGeLC-Regular",
    fontSize: 15,
  },
});

const { pxToRem, fontFamily } = muiTheme.typography;

muiTheme.typography = {
  ...muiTheme.typography,
  h1: {
    fontFamily: "NovemberGeLC-Bold",
    fontSize: "20px",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    lineHeight: "26px",
    fontWeight: 600,
    // letterSpacing: "0.68px",
  },

  h2: {
    fontFamily: "NovemberGeLC-Regular",
    fontSize: "18px",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    lineHeight: "24px",
    fontWeight: 600,
    letterSpacing: "0.52px",
  },

  h3: {
    fontFamily: "NovemberGeLC-Regular",
    fontSize: "16px",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
    lineHeight: "21px",
    fontWeight: 600,
    letterSpacing: "0.45px",
  },

  h4: {
    fontFamily: "NovemberGeLC-Regular",
    fontSize: pxToRem(14),
    lineHeight: pxToRem(21),
    fontWeight: 600,
    letterSpacing: "0.45px",
  },

  body1: {
    fontFamily,
    fontSize: pxToRem(15),
    lineHeight: pxToRem(19),
    fontWeight: 400,
    letterSpacing: "0.52px",
  },

  body2: {
    fontFamily,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(18),
    fontWeight: 400,
    letterSpacing: "0.52px",
  },

  caption: {
    fontFamily,
    display: "inline-block",
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    fontWeight: 400,
    letterSpacing: "0.52px",
  },

  button: {
    fontFamily: "NovemberGeLC-Regular",
  },
};

muiTheme.components = {
  ...muiTheme.components,
  MuiSkeleton: {
    defaultProps: {
      variant: "rounded",
      sx: { my: 0, py: 0, m: 0, p: 0 },
      width: "100%",
    },
  },

  MuiAccordion: {
    defaultProps: {
      sx: {
        border: "none",
        mb: 2,
        borderRadius: "8px",
        bgcolor: "secondary.light",
        p: 1,
        "&:before": {
          display: "none",
        },
      },
    },
  },
  MuiAccordionSummary: {
    defaultProps: {
      sx: {
        bgcolor: "secondary.light",
      },
    },
  },
  MuiChip: {
    defaultProps: {
      sx: {
        borderRadius: 0,
        py: 3,
        px: 5,
        width: { lg: "auto", md: "auto", sm: "100%", xs: "100%" },
      },
      color: "primary",
    },
  },
  MuiLink: {
    defaultProps: {
      sx: {
        cursor: "pointer",
      },
    },
  },
  MuiDivider: {
    defaultProps: {
      sx: { borderBottomColor: "#dbdbdb" },
    },
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
      color: "primary",
      disableElevation: true,
      sx: {
        "&.Mui-disabled": {
          opacity: 0.5,
          color: "text.primary",
        },
      },
    },
    variants: [
      {
        props: { variant: "contained" },
        style: {
          minHeight: 38,
          boxShadow:
            "0px 1px 3px -1px rgba(0, 0, 0, 0.3), 0px 2px 5px -1px rgba(50, 50, 93, 0.25)",
          "&:hover": {
            boxShadow:
              "0px 2px 3px -1px rgba(0, 0, 0, 0.3), 0px 3px 6px -1px rgba(50, 50, 93, 0.25)",
          },
          "&:focus": {
            boxShadow:
              "0px 2px 3px -1px rgba(0, 0, 0, 0.3), 0px 3px 6px -1px rgba(50, 50, 93, 0.25)",
          },
          color: "#FFF",
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          height: 38,
          boxShadow:
            "0px 1px 3px -1px rgba(0, 0, 0, 0.15), 0px 2px 5px -1px rgba(50, 50, 93, 0.12)",
          "&:hover": {
            boxShadow:
              "0px 2px 3px -1px rgba(0, 0, 0, 0.15), 0px 3px 4px -1px rgba(50, 50, 93, 0.12)",
          },
          "&:focus": {
            boxShadow:
              "0px 2px 3px -1px rgba(0, 0, 0, 0.15), 0px 3px 4px -1px rgba(50, 50, 93, 0.12)",
          },
        },
      },
      {
        props: { variant: "text" },
        style: {
          height: 38,

          "&:hover": {
            boxShadow:
              "0px 2px 3px -1px rgba(0, 0, 0, 0.15), 0px 3px 4px -1px rgba(50, 50, 93, 0.12)",
          },
          "&:focus": {
            boxShadow:
              "0px 2px 3px -1px rgba(0, 0, 0, 0.15), 0px 3px 4px -1px rgba(50, 50, 93, 0.12)",
          },
        },
      },
    ],
  },

  MuiInputBase: {
    defaultProps: {
      sx: { fontFamily: "NovemberGeLC-Regular" },
    },
  },

  MuiTab: {
    defaultProps: {
      sx: { fontFamily: "NovemberGeLC-Regular" },
    },
  },
  MuiTableHead: {
    defaultProps: {
      sx: { fontFamily: "NovemberGeLC-Regular" },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: muiTheme.palette.text.primary,
      },
    },
  },
};
