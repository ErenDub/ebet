import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { DialogItemLayout } from "other/layouts/dialogItemLayout";
import { muiTheme } from "other/theme";

import leftPromo from "../../../../other/assets/promo-left-img.png";
import rightPromo from "../../../../other/assets/promo-right-img.png";
export const SpringTournaments = () => {
  return (
    <DialogItemLayout title="ტურნირები და სატელიტები">
      <Stack alignItems="center" gap={2}>
        <Typography variant="h3" textAlign="center">
          სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
        </Typography>
        <Stack
          gap={1}
          alignItems="center"
          direction="row"
          sx={{
            border: `2px solid ${muiTheme.palette.primary.main}`,
            // p: 1,
            bgcolor: "transparent",
            boxShadow:
              "inset 0px 0px 15px 0px rgba(240,90,34,0.75), 0px 0px 15px 0px rgba(240,90,34,0.75) ",
            borderRadius: "8px",
          }}
        >
          <AccessTimeRoundedIcon
            sx={{
              //   outline: `2px solid ${muiTheme.palette.primary.main}`,
              bgcolor: "primary.main",
              p: 1,
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          />
          <Typography p={1}>19:00 / 19:30 / 20:00</Typography>
        </Stack>
        <Typography fontSize={13} sx={{ opacity: 0.9 }} textAlign="center">
          * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
        </Typography>
        <Typography fontSize={13} sx={{ opacity: 0.9 }} textAlign="center">
          ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
        </Typography>
        <Button size="large">პოკერის ლობი</Button>
      </Stack>
      <Box
        width={{ lg: 203, md: 203, sm: 100, xs: 100 }}
        component="img"
        src={leftPromo}
        sx={{ position: "absolute", bottom: 0, left: 0 }}
      />
      <Box
        width={{ lg: 220, md: 220, sm: 110, xs: 110 }}
        component="img"
        src={rightPromo}
        sx={{ position: "absolute", bottom: 0, right: 0 }}
      />
    </DialogItemLayout>
  );
};
