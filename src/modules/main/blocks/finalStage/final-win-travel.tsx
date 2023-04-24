import Masonry from "@mui/lab/Masonry";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { DialogItemLayout } from "other/layouts/dialogItemLayout";

import oneTicket from "../../../../other/assets/poker-item-1-ticket-icon.png";
import twoTicket from "../../../../other/assets/poker-item-2-ticket-icon.png";
export const FinalWinTravel = () => {
  const isLgScreen = useMediaQuery("(min-width: 600px)");

  const cards = [
    {
      title: "“Cashgame Highrollers” -",
      description: (
        <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
          1 საგზური
        </Typography>
      ),
      height: 110,
      ticket: oneTicket,
    },
    {
      title: "„The Festival in Malta, GTD“",
      description: (
        <Stack gap={1}>
          <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
            A კატეგორიის 1 საგზური
          </Typography>
          <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
            B კატეგორიის 1 საგზური
          </Typography>
          <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
            ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
            ბაი-ინის გადახდით.
          </Typography>
        </Stack>
      ),
      height: 173,
      ticket: twoTicket,
    },
    {
      title: "„Cashgame Grinders”",
      description: (
        <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
          1 საგზური
        </Typography>
      ),
      height: 110,
      ticket: oneTicket,
    },
    {
      title: "„The Lord of the Rings“",
      description: (
        <Stack gap={1}>
          <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
            C კატეგორიის 1 საგზური
          </Typography>
          <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
            ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
            ბაი-ინის გადახდით.
          </Typography>
        </Stack>
      ),
      height: 173,
      ticket: oneTicket,
    },
    {
      title: "„Cashgame Grinders”",
      description: (
        <Typography fontSize={{ lg: 15, md: 15, sm: 13, xs: 13 }}>
          1 საგზური
        </Typography>
      ),
      height: 110,
      ticket: oneTicket,
    },
  ];
  return (
    <DialogItemLayout title="მოიგე საგზური 30 აპრილის ფინალურ ტურნირებზე">
      <Masonry columns={{ lg: 2, md: 2, sm: 1, xs: 1 }} spacing={2}>
        {cards.map((card, index) => (
          <Stack
            key={`win-card- ${index}`}
            sx={{
              bgcolor: "secondary.main",
              borderRadius: "12px",
              position: "relative",
            }}
            height={card.height}
            justifyContent="center"
            px={1}
            gap={1}
          >
            <Box
              component="img"
              src={card.ticket}
              width={isLgScreen ? "70px" : "60px"}
              sx={{
                position: "absolute",
                right: { lg: 20, md: 20, sm: 10, xs: 10 },
                top: 0,
              }}
            />
            <Typography
              fontWeight={600}
              fontSize={{ lg: 16, md: 16, sm: 14, xs: 14 }}
            >
              {card.title}
            </Typography>
            {card.description}
          </Stack>
        ))}
      </Masonry>
      <Stack alignItems="center" justifyContent="center" gap={2}>
        <Typography fontSize={14} textAlign="center">
          * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings
          ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
        </Typography>
        <Typography fontSize={14} textAlign="center">
          *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
          ბაი-ინის გადახდით.
        </Typography>
      </Stack>
    </DialogItemLayout>
  );
};
