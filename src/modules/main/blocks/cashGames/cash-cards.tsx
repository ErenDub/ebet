import { Box } from "@mui/material";
import { CashCard } from "modules/main/cards/cashCards/cash-card";

import ticket from "../../../../other/assets/ticket-icon-sm.png";
import plane from "../../../../other/assets/travel-icon-sm.png";

export const CashCards = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.light",
        my: 4,
        p: 2,
        borderRadius: "12px",
      }}
    >
      <CashCard icon={plane} description="The Festival in Malta-ს საგზური" />
      <CashCard
        icon={ticket}
        description="სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური"
      />
      <CashCard icon={plane} description="ტექნიკის მაღაზიის ვაუჩერი" />
    </Box>
  );
};
