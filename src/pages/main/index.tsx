import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { CashGames } from "modules/main/blocks/cashGames/cash-games";
import { FinalStage } from "modules/main/blocks/finalStage/final-stage";
import { BottomCarousel } from "modules/main/blocks/mutual/bottom-carousel";
import { TermsAccordion } from "modules/main/blocks/mutual/terms-accordion";
import { SpringSeries } from "modules/main/blocks/springSeries/spring-series";
import { DialogLayout } from "other/layouts/dialogLayout";
import { useState } from "react";

import banner from "../../other/assets/banner.jpg";
import logo from "../../other/assets/logo.png";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Main = () => {
  const [value, setValue] = useState(0);

  const activeTabStyle = {
    backgroundColor: "#ff6600",
    transition:
      "background-color 0.5s ease, transform 0.3s ease, margin 0.3s ease",
    transform: "scale(1.2)",
    ml: value === 0 ? "2.5vw" : "0",
    mr: value === 2 ? "2.5vw" : "0",
    color: "white",
    zIndex: 1,
    height: 77,
    boxShadow: "none",
  };

  const inactiveTabStyle = {
    backgroundColor: "secondary.light",
    transition:
      "background-color 0.5s ease, transform 0.3s ease, margin 0.3s ease",
    color: "white",
    height: 77,
    boxShadow: "none",
  };

  return (
    <DialogLayout>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={1}
        sx={{
          display: { lg: "none", md: "none", sm: "stack", xs: "stack" },
        }}
      >
        <Box component="img" src={logo} sx={{ width: 24, height: 24 }} />
        <Stack gap={1} direction="row">
          <Button variant="text" sx={{ color: "white" }}>
            Sign up
          </Button>
          <Button>Sign in</Button>
        </Stack>
      </Stack>
      <Box
        sx={{
          objectFit: "cover",
          width: 1,
          borderRadius: "inherit",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        component="img"
        src={banner}
      />
      <Container
        component={Paper}
        maxWidth="md"
        sx={{
          my: 2,
          border: "none",
          borderRadius: "13px",
          bgcolor: "transparent",
          position: { lg: "fixed", md: "fixed", sm: "block", xs: "block" },
          zIndex: 200,
          top: 30,
        }}
      >
        <Stack direction="row" justifyContent="space-between" width={1}>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
              borderRadius: "35px",
              bgcolor: "rgba(37, 41, 43, 0.9)",
              border: "1px solid #25292B",
              py: 0.5,
              px: 1,
            }}
          >
            <Box
              sx={{
                borderRadius: "13px",
                bgcolor: "rgba(255, 255, 255, 0.15)",
                py: 0.5,
                px: 1,
              }}
            >
              <Typography fontFamily="Helvetica75" fontSize={14}>
                სლოტები
              </Typography>
            </Box>
            <Box>
              <Typography fontFamily="Helvetica75">
                10 იანვარი - 12 მარტი
              </Typography>
            </Box>
          </Stack>
          <IconButton
            sx={{
              bgcolor: "#25292B",
              display: { lg: "inherit", md: "inherit", sm: "none", xs: "none" },
              "&:hover": {
                bgcolor: "#15181a",
                transition: "background-color 0.3s ease-in-out",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
      </Container>
      <Box px={{ lg: 5, md: 5, sm: 2, xs: 2 }} py={2}>
        <Stack gap={2}>
          <Typography variant="h1">
            მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
          </Typography>
          <Typography sx={{ opacity: 0.9 }}>
            მოხვდი პოკერის ფესტივალზე მალტაში
          </Typography>
        </Stack>

        <Box sx={{ width: "100%" }} my={6}>
          <Box sx={{ bgcolor: "secondary.light", borderRadius: "6px" }}>
            <Stack direction="row">
              <Button
                fullWidth
                onClick={() => setValue(0)}
                color={value === 0 ? "primary" : "secondary"}
                sx={value === 0 ? activeTabStyle : inactiveTabStyle}
              >
                <Box>
                  <Typography fontSize={{ lg: 12, md: 12, sm: 10, xs: 10 }}>
                    1-29 აპრილი
                  </Typography>
                  <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
                    Cash Games
                  </Typography>
                </Box>
              </Button>
              <Button
                fullWidth
                onClick={() => setValue(1)}
                color={value === 1 ? "primary" : "secondary"}
                sx={value === 1 ? activeTabStyle : inactiveTabStyle}
              >
                <Box>
                  <Typography fontSize={{ lg: 12, md: 12, sm: 10, xs: 10 }}>
                    13-29 აპრილი
                  </Typography>
                  <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
                    Spring Series
                  </Typography>
                </Box>
              </Button>
              <Button
                fullWidth
                onClick={() => setValue(2)}
                color={value === 2 ? "primary" : "secondary"}
                sx={value === 2 ? activeTabStyle : inactiveTabStyle}
              >
                <Box>
                  <Typography fontSize={{ lg: 12, md: 12, sm: 10, xs: 10 }}>
                    30 აპრილი
                  </Typography>
                  <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
                    Final Stage
                  </Typography>
                </Box>
              </Button>
            </Stack>
          </Box>
          <TabPanel value={value} index={0}>
            <CashGames />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SpringSeries />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FinalStage />
          </TabPanel>
        </Box>
        <TermsAccordion />
        <BottomCarousel />
      </Box>
      <Container
        component={Paper}
        maxWidth="md"
        sx={{
          border: "none",
          borderRadius: 0,
          bgcolor: "secondary.dark",
          position: "fixed",
          bottom: 0,
          borderTop: "4px solid #ff6600",
          zIndex: 200,
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            height: 70,
          }}
        >
          <Button size="large">ითამაშე</Button>
        </Stack>
      </Container>
    </DialogLayout>
  );
};
export default Main;
