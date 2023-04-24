import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { CashCardLight } from "modules/main/cards/cashCards/cash-card-light";
import { DialogItemLayout } from "other/layouts/dialogItemLayout";

import banner from "../../../../other/assets/final-info-img.jpg";
import { FinalCards } from "./final-cards";
import { FinalMysteryKey } from "./final-mystery-key";
import { FinalWinTravel } from "./final-win-travel";
export const FinalStage = () => {
  return (
    <>
      <DialogItemLayout>
        <Box
          component="img"
          src={banner}
          width={1}
          sx={{ borderRadius: "12px" }}
        />
        <Stack mt={2} gap={2} p={{ lg: 4, md: 4, sm: 0, xs: 0 }}>
          <Typography textAlign="center" fontWeight={600}>
            გაიგე THE FESTIVAL OF MALTA-ზე!
          </Typography>
          <Typography textAlign="center">
            The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს
            პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
          </Typography>
          <CashCardLight description="15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს" />
        </Stack>
        <FinalCards />
      </DialogItemLayout>
      <FinalWinTravel />

      <FinalMysteryKey />
    </>
  );
};
