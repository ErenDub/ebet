import { Grid } from "@mui/material";
import { FinalCardItem } from "modules/main/cards/finalCards/final-card-item";
import { FinalCardMain } from "modules/main/cards/finalCards/final-card-main";

import roll from "../../../../other/assets/final-item-event-icon.png";
import hotel from "../../../../other/assets/final-item-hotel-icon.png";
import money from "../../../../other/assets/final-item-money-icon.png";
import tickets from "../../../../other/assets/final-item-ticket-icon.png";
export const FinalCards = () => {
  const cards = [
    {
      title: "A კატეგორიის საგზურში შედის",
      includes: [
        { icon: tickets, text: "ორმხრივი ავიაბილეთი" },
        { icon: roll, text: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი" },
        { icon: roll, text: "Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი" },
        { icon: hotel, text: "სასტუმრო Golden Tulip Vivaldi Hote" },
        { icon: money, text: "€500 სახარჯი ფული" },
      ],
    },
    {
      title: "A კატეგორიის საგზურში შედის",
      includes: [
        { icon: tickets, text: "ორმხრივი ავიაბილეთი" },
        { icon: roll, text: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი" },
        { icon: roll, text: "Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი" },
        { icon: hotel, text: "სასტუმრო Golden Tulip Vivaldi Hote" },
        { icon: money, text: "€500 სახარჯი ფული" },
      ],
    },
    {
      title: "A კატეგორიის საგზურში შედის",
      includes: [
        { icon: tickets, text: "ორმხრივი ავიაბილეთი" },
        { icon: roll, text: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი" },
        { icon: hotel, text: "სასტუმრო Golden Tulip Vivaldi Hote" },
        { icon: money, text: "€500 სახარჯი ფული" },
      ],
    },
  ];
  return (
    <>
      <Grid container spacing={{ lg: 2, md: 2, sm: 4, xs: 4 }}>
        {cards.map((card, index) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={`final-card-${index}`}>
            <FinalCardMain title={card.title}>
              {card.includes.map((cardItem, cardIndex) => (
                <FinalCardItem
                  key={`final-card-item-${cardIndex}`}
                  description={cardItem.text}
                  icon={cardItem.icon}
                />
              ))}
            </FinalCardMain>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
