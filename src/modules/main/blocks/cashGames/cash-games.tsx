import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { DialogItemLayout } from "other/layouts/dialogItemLayout";

import { CashBottomInfo } from "./cash-bottom-info";
import { CashCards } from "./cash-cards";
import { CashTop20 } from "./cash-top20";

export const CashGames = () => {
  return (
    <DialogItemLayout title="1₾ რეიკი = 1 ქულას">
      <CashTop20 title="ჰოლდემის TOP20 ლიდერბორდი" />
      <CashCards />
      <CashTop20 title="TOP20 ლიდერბორდი ჰოლდემში" />
      <CashCards />
      <Stack alignItems="center" justifyContent="center">
        <Typography fontSize={14} textAlign="center">
          * ლიდერბორდის შედეგები განახლდება <Link>პოკერის ლობიში</Link>
        </Typography>
      </Stack>
      <CashBottomInfo />
    </DialogItemLayout>
  );
};
