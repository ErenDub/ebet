import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";

import carousel1 from "../../../../other/assets/carousel1.png";
import carousel2 from "../../../../other/assets/carousel2.png";
import carousel3 from "../../../../other/assets/carousel3.png";
export const BottomCarousel = () => {
  const showFullText = useMediaQuery("(min-width:600px)");
  const carouselItems = [
    {
      title: "Get 300% Cashback",
      description: "retrieve 300% bet amount as real money only here",
      image: carousel1,
      color:
        "linear-gradient(0deg, rgba(13,100,155,1) 0%, rgba(13,100,155,1) 30%, rgba(255,255,255,0) 50%)",
    },
    {
      title: "Coming Soon",
      description: "retrieve 300% bet amount as real money only here",
      image: carousel2,
      color:
        "linear-gradient(0deg, rgba(239,84,28,1) 0%, rgba(239,84,28,1) 30%, rgba(255,255,255,0) 50%)",
    },
    {
      title: "Win a Jackpot",
      description: "retrieve 300% bet amount as real money only here",
      image: carousel3,
      color:
        "linear-gradient(0deg, rgba(26,23,108,1) 0%, rgba(26,23,108,1) 30%, rgba(255,255,255,0) 50%)",
    },
    {
      title: "Get 300% Cashback",
      description: "retrieve 300% bet amount as real money only here",
      image: carousel1,
      color:
        "linear-gradient(0deg, rgba(13,100,155,1) 0%, rgba(13,100,155,1) 30%, rgba(255,255,255,0) 50%)",
    },
    {
      title: "Coming Soon",
      description: "retrieve 300% bet amount as real money only here",
      image: carousel2,
      color:
        "linear-gradient(0deg, rgba(239,84,28,1) 0%, rgba(239,84,28,1) 30%, rgba(255,255,255,0) 50%)",
    },
    {
      title: "Win a Jackpot",
      description: "retrieve 300% bet amount as real money only here",
      image: carousel3,
      color:
        "linear-gradient(0deg, rgba(26,23,108,1) 0%, rgba(26,23,108,1) 30%, rgba(255,255,255,0) 50%)",
    },
  ];
  return (
    <>
      <Box mb={4} mt={6}>
        <Typography variant="h2">მსგავსი აქციები</Typography>
      </Box>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          350: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={`carousel-${index}`}>
            <Box sx={{ borderRadius: "5px", position: "relative" }}>
              <Box
                sx={{
                  background: item.color,
                  width: "100%",
                  borderRadius: "inherit",
                  height: "100%",
                  position: "absolute",
                  zIndex: 1,
                }}
              />
              <Stack
                gap={1}
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  bottom: 0,
                  left: 0,
                  p: 2,
                }}
              >
                <Typography
                  textAlign="left"
                  fontSize={{ lg: 14, md: 14, sm: 12, xs: 12 }}
                  fontWeight={600}
                >
                  {item.title}
                </Typography>
                <Typography
                  textAlign="left"
                  fontSize={{ lg: 14, md: 14, sm: 12, xs: 12 }}
                >
                  {showFullText
                    ? item.description
                    : `${item.description.slice(0, 25)}...`}
                </Typography>
              </Stack>
              <Box component="img" width={230} src={item.image} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
