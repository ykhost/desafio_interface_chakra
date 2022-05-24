import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { City } from "./City";

export function Slide() {
  return (
    <Flex
      w="100%"
      height={["15.62rem","28.125rem"]}
      maxW="77.5rem"
      mx="auto"
      mb="10"
      mt="3.25rem"
    >
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true}}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 4000
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <City href="europe" bgImage="europe_slide" description="Pa e bola nas europa" city="Guainazes"/>
        </SwiperSlide>

        <SwiperSlide>
          <City href="europe" bgImage="europe_slide" description="Pa e bola nas europa" city="Guainazes"/>
        </SwiperSlide>

      </Swiper>
    </Flex>
  );
}
