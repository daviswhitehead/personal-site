import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Stack,
  Text,
  VStack,
  Box,
  useBreakpointValue,
} from "native-base";
import Card from "./Card";
import Carousel from "./Carousel";
import LinkWithIcon from "./LinkWithIcon";
import routes from "lib/routes";
import WHOOPSleepBanner from "../public/images/WHOOPSleepBanner.png";
import ShayrBanner from "../public/images/ShayrBanner.png";
import EverDriveBanner from "../public/images/EverDriveBanner.png";
import PressableStyle from "../components/PressableStyle";

export default function Promoted() {
  const [cardHeight, setCardHeight] = useState(0);
  const refA = useRef<HTMLElement>(null);
  const refB = useRef<HTMLElement>(null);
  const refC = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (refA.current) {
        setCardHeight(refA.current.offsetHeight);
      }
    }, 0);
  }, [cardHeight]);

  const cardWidth = "90%";
  const carouselContainerWidth = "100%";
  const carouselContainerHeight = cardHeight + 40;

  return (
    <Stack
      space={{ base: "5", md: "10" }}
      direction="column"
      px={{ base: "4", md: "8" }}
      py={{ base: "3", md: "5" }}
      alignItems="center"
    >
      <VStack
        flex={1}
        alignItems={useBreakpointValue({
          base: "center",
          md: "flex-start",
        })}
      >
        <Text
          fontFamily="heading"
          fontWeight="200"
          fontSize="3xl"
          textAlign={{ base: "center", md: "left" }}
          py={{ base: "3", md: "6" }}
        >
          Creating products people love
        </Text>
        <Text
          fontFamily="body"
          fontWeight="300"
          fontSize="lg"
          textAlign={{ base: "center", md: "left" }}
          py={{ base: "2", md: "4" }}
          // lineHeight="lg"
        >
          My expertise is in digital, consumer products. I specialize in
          understanding problems people have, then developing a product that
          delightfully solves their problems. I aspire to create innovative
          products that benefit a user so much they can’t stop talking about it.
        </Text>
        <LinkWithIcon url={routes.PRODUCTS.path} copy="Checkout my products" />
        <LinkWithIcon url={routes.PATRON.path} copy="Become a patron" />
      </VStack>
      <VStack w={carouselContainerWidth} h={carouselContainerHeight}>
        <Carousel>
          <PressableStyle url={routes.PRODUCTS.path}>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={refA}
                image={
                  <Image
                    source={{ uri: WHOOPSleepBanner.src }}
                    alt="Highlights from WHOOP's Sleep Coaching."
                    resizeMode="cover"
                  />
                }
                title="WHOOP"
                subtitle="WHOOP is an advanced fitness and health wearable."
                description="Sleep tight with help from WHOOP. Your personalized sleep coach alerts you to changes in sleep quality, recommends adjustments to your sleep schedule, and highlights trends in your sleep performance."
                meta="Wearable, Mobile App, Consumer, Fitness, Health, Sleep, Recommendations, Personalization, Coaching, Platform, Internal Tools"
                w={cardWidth}
              />
            </Box>
          </PressableStyle>
          <PressableStyle url={routes.PRODUCTS.path}>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={refB}
                image={
                  <Image
                    source={{ uri: ShayrBanner.src }}
                    alt="Highlights from Shayr."
                    resizeMode="cover"
                  />
                }
                title="Shayr"
                subtitle="Recommend and bond over content with close friends."
                description="Recommend a specific podcast episode (or any content) to a friend. Your friend keeps track and let's you know when they've listened. Then discuss within Shayr or in real life."
                meta="Mobile App, Content, Podcast, Recommendations, Close Friends, React Native, Firebase"
                w={cardWidth}
              />
            </Box>
          </PressableStyle>
          <PressableStyle url={routes.PRODUCTS.path}>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={refC}
                image={
                  <Image
                    source={{ uri: EverDriveBanner.src }}
                    alt="Highlights from EverDrive."
                    resizeMode="cover"
                  />
                }
                title="EverDrive"
                subtitle="Become a safer driver and get insurance discounts."
                description="Automatically track your drives and receive coaching on how to become a safer driver. Get rewarded for your safe driving by unlocking insurance discounts across a variety of insurers."
                meta="Mobile App, Safe Driving, Coaching, Insurance, Marketplace"
                w={cardWidth}
              />
            </Box>
          </PressableStyle>
        </Carousel>
      </VStack>
    </Stack>
  );
}
