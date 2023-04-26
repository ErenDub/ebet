import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { DialogItemLayout } from "other/layouts/dialogItemLayout";

import longRing from "../../../../other/assets/main-bg.png";
import longRingM from "../../../../other/assets/main-bg-sm.png";
import smallRing from "../../../../other/assets/tournament-bg.png";
export const SpringEveryday = () => {
  const isLgScreen = useMediaQuery("(min-width: 1280px)");
  return (
    <DialogItemLayout
      bg={false}
      light={false}
      title="ყოველდღიური ტურნირები და სატელიტები"
    >
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box sx={{ position: "relative" }}>
            <Box component="img" src={smallRing} width={1} />
            <Stack
              width={1}
              gap={2}
              direction="row"
              position="absolute"
              sx={{
                top: "50%",
                left: "50%",
                transform: "translate(-45%, -50%)",
              }}
            >
              <Stack gap={{ lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Typography
                  fontWeight={600}
                  fontSize={{ lg: 15, md: 15, sm: 15, xs: 12 }}
                >
                  Holdem Highrollers
                </Typography>
                <Typography fontWeight={600} fontSize={24} color="#FFBE00">
                  50 000 ₾
                </Typography>
              </Stack>
              <Stack gap={{ lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Box>
                  <Typography fontWeight={600} fontSize={13}>
                    ბაი-ინი - 550₾
                  </Typography>
                </Box>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  px={3}
                  py={0.5}
                  sx={{
                    bgcolor: "#B78648",
                    borderRadius: "15px 15px 0 15px",
                  }}
                >
                  <Typography fontSize={14}>27 აპრილი</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box sx={{ position: "relative" }}>
            <Box component="img" src={smallRing} width={1} />
            <Stack
              width={1}
              gap={2}
              direction="row"
              position="absolute"
              sx={{
                top: "50%",
                left: "50%",
                transform: "translate(-45%, -50%)",
              }}
            >
              <Stack gap={{ lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Typography
                  fontWeight={600}
                  fontSize={{ lg: 15, md: 15, sm: 15, xs: 12 }}
                >
                  Omaha Highrollers
                </Typography>
                <Typography fontWeight={600} fontSize={24} color="#FFBE00">
                  50 000 ₾
                </Typography>
              </Stack>
              <Stack gap={{ lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Box>
                  <Typography fontWeight={600} fontSize={13}>
                    ბაი-ინი - 550₾
                  </Typography>
                </Box>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  px={3}
                  py={0.5}
                  sx={{
                    bgcolor: "#B78648",
                    borderRadius: "15px 15px 0 15px",
                  }}
                >
                  <Typography fontSize={14}>28 აპრილი</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item lg={12}>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={isLgScreen ? longRing : longRingM}
              width={1}
            />
            <Stack
              width={1}
              gap={{ lg: 6, md: 6, sm: 3, xs: 3 }}
              alignItems="center"
              justifyContent="center"
              direction="row"
              position="absolute"
              sx={{
                top: "50%",
                transform: "translate(0, -50%)",
              }}
            >
              <Stack gap={{ lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Typography
                  fontWeight={600}
                  fontSize={{ lg: 15, md: 15, sm: 15, xs: 12 }}
                >
                  Main Events
                </Typography>
                <Typography fontWeight={600} fontSize={24} color="#FFBE00">
                  150 000 ₾
                </Typography>
              </Stack>
              <Stack gap={{ lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Box>
                  <Typography fontWeight={600} fontSize={13}>
                    ბაი-ინი - 550₾
                  </Typography>
                </Box>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  px={3}
                  py={0.5}
                  sx={{
                    bgcolor: "#D7C860",
                    borderRadius: "15px 15px 0 15px",
                  }}
                >
                  <Typography color="#094B3D" fontSize={14}>
                    28 აპრილი
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Stack alignItems="center" justifyContent="center" gap={2} mt={2}>
        <Typography fontSize={14} textAlign="center">
          * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
          The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
          საგზურის მისაღებად.
        </Typography>
      </Stack>
    </DialogItemLayout>
  );
};
