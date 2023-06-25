import React from "react";
import { Image, Stack, VStack, Box, useBreakpointValue } from "native-base";
import Card from "./Card";
import Carousel from "./Carousel";
import LinkWithIcon from "./LinkWithIcon";
import routes from "lib/routes";
import WHOOPSleepBanner from "../public/images/WHOOPSleepBanner.png";
import ShayrBanner from "../public/images/ShayrBanner.png";
import EverDriveBanner from "../public/images/EverDriveBanner.png";
import PressableStyle from "../components/PressableStyle";
import { space } from "../styling/spacing";
import H2 from "./typeography/H2";
import Body from "./typeography/Body";

export default function Promoted() {
  const cardHeight = useBreakpointValue({
    base: 270,
    sm: 340,
    md: 480,
    lg: 590,
    xl: 720,
  });
  const cardWidth = useBreakpointValue({
    base: 300,
    sm: 450,
    md: 700,
    lg: 768,
    xl: 992,
  });
  // const cardWidth = "90%";
  const carouselContainerWidth = "100%";
  const carouselContainerHeight = cardHeight + 40;

  return (
    <Stack
      space={space.xl}
      px={space.lg}
      py={space.md}
      direction="column"
      alignItems="center"
    >
      <VStack
        flex={1}
        alignItems={useBreakpointValue({
          base: "center",
          md: "flex-start",
        })}
      >
        <H2 py={space.lg}>Creating products people love</H2>
        <VStack w={carouselContainerWidth} h={carouselContainerHeight}>
          <Carousel>
            <PressableStyle url={routes.PRODUCTS.path}>
              <Box
                flex={1}
                justifyContent="flex-start"
                alignItems={{ base: "center", md: "center" }}
              >
                <Card
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
        <Body py={{ base: "2", md: "4" }}>
          My expertise is in digital, consumer products. I specialize in
          understanding problems people have, then developing a product that
          delightfully meets their needs. I aspire to create innovative products
          that benefit a user so much they can’t stop talking about it.
        </Body>
        <LinkWithIcon
          url={routes.PRODUCTS.path}
          copy="Discover more great products"
        />
        <LinkWithIcon url={routes.PATRON.path} copy="Become a patron" />
      </VStack>
    </Stack>
  );
}
