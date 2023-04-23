import { Link, Stack, Typography } from "@mui/material";
import { DialogItemLayout } from "other/layouts/dialogItemLayout";

import { CashBottomInfo } from "../cashGames/cash-bottom-info";
import { CashCards } from "../cashGames/cash-cards";
import { CashTop20 } from "../cashGames/cash-top20";
import { SpringEveryday } from "./spring-everyday";
import { SpringTournaments } from "./spring-tournaments";

export const SpringSeries = () => {
  return (
    <>
      <SpringTournaments />
      <DialogItemLayout title="მოხვდი TOP20 ლიდერგორდში ტურნირებზე დაგროვებული ქულებით">
        <CashTop20 title="TOP20 ლიდერბორდი ჰოლდემში" />
        <CashCards />
        <Stack alignItems="center" justifyContent="center" gap={2}>
          <Typography fontSize={14} textAlign="center">
            * ლიდერბორდის შედეგები განახლდება <Link>პოკერის ლობიში</Link>
          </Typography>
          <Typography fontSize={14} textAlign="center">
            * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
            სატელიტები
          </Typography>
        </Stack>
      </DialogItemLayout>
      <SpringEveryday />
      <CashBottomInfo />
    </>
  );
};
