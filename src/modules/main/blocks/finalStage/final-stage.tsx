import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { CashCardLight } from "modules/main/cards/cashCards/cash-card-light";
import { DialogItemLayout } from "other/layouts/dialogItemLayout";

import banner from "../../../../other/assets/final-info-img.jpg";
import { FinalCards } from "./final-cards";
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
        <FinalWinTravel />
        <Stack alignItems="center" justifyContent="center" gap={2}>
          <Typography fontSize={14} textAlign="center">
            * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
            Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
          </Typography>
          <Typography fontSize={14} textAlign="center">
            *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
            ბაი-ინის გადახდით.
          </Typography>
        </Stack>
      </DialogItemLayout>
    </>
  );
};
