import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Stack,
  Text,
  VStack,
  Box,
  useBreakpointValue,
  HStack,
} from "native-base";
import Card from "./Card";
import Carousel from "./Carousel";
import LinkWithIcon from "./LinkWithIcon";
import routes from "lib/routes";
import socials from "lib/socials";

export default function Promoted() {
  const [cardHeight, setCardHeight] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        setCardHeight(ref.current.offsetHeight);
      }
    }, 0);
  }, [cardHeight]);

  const cardWidth = "90%";
  const carouselContainerWidth = useBreakpointValue({
    base: "100%",
    md: "500",
  });
  const carouselContainerHeight = cardHeight + 40;

  return (
    <Stack
      direction="column"
      overflow="hidden"
      space={useBreakpointValue({
        base: "5",
        md: "10",
      })}
      py={useBreakpointValue({
        base: "5",
        md: "10",
      })}
    >
      <Stack
        space={{ base: "5", md: "10" }}
        direction={{ base: "column-reverse", md: "row" }}
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
            products that benefit a user so much they can’t stop talking about
            it.
          </Text>
          <LinkWithIcon url={routes.ABOUT.path} copy="Checkout my products" />
          <LinkWithIcon url={routes.ABOUT.path} copy="Become a patron" />
        </VStack>
        <VStack w={carouselContainerWidth} h={carouselContainerHeight}>
          <Carousel>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={ref}
                image={
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                    resizeMode="cover"
                  />
                }
                title="Shayr"
                subtitle="A social network for sharing poetry"
                description="Shayr is a social network for sharing poetry. It's a place for poets to share their work and for readers to discover new poets. Shayr is a passion project of mine. I built it to learn more about building a social network and to explore the intersection of poetry and technology."
                meta="React Native, Expo, Firebase, TypeScript"
                w={cardWidth}
              />
            </Box>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={ref}
                image={
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                    resizeMode="cover"
                  />
                }
                title="Shayr"
                subtitle="A social network for sharing poetry"
                description="Shayr is a social network for sharing poetry. It's a place for poets to share their work and for readers to discover new poets. Shayr is a passion project of mine. I built it to learn more about building a social network and to explore the intersection of poetry and technology."
                meta="React Native, Expo, Firebase, TypeScript"
                w={cardWidth}
              />
            </Box>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={ref}
                image={
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                    resizeMode="cover"
                  />
                }
                title="Shayr"
                subtitle="A social network for sharing poetry"
                description="Shayr is a social network for sharing poetry. It's a place for poets to share their work and for readers to discover new poets. Shayr is a passion project of mine. I built it to learn more about building a social network and to explore the intersection of poetry and technology."
                meta="React Native, Expo, Firebase, TypeScript"
                w={cardWidth}
              />
            </Box>
          </Carousel>
        </VStack>
      </Stack>
      <Stack
        space={{ base: "5", md: "10" }}
        direction={{ base: "column-reverse", md: "row-reverse" }}
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
            Writing about products, life, and more
          </Text>
          <Text
            fontFamily="body"
            fontWeight="300"
            fontSize="lg"
            textAlign={{ base: "center", md: "left" }}
            py={{ base: "2", md: "4" }}
            // lineHeight="lg"
          >
            TO DO.
          </Text>
          <LinkWithIcon url={routes.ABOUT.path} copy="Explore my writing" />
          {/* <LinkWithIcon url={routes.ABOUT.path} copy="Signup for my newsletter" /> */}
        </VStack>
        <VStack w={carouselContainerWidth} h={carouselContainerHeight}>
          <Carousel>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={ref}
                image={
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                    resizeMode="cover"
                  />
                }
                title="Shayr"
                subtitle="A social network for sharing poetry"
                description="Shayr is a social network for sharing poetry. It's a place for poets to share their work and for readers to discover new poets. Shayr is a passion project of mine. I built it to learn more about building a social network and to explore the intersection of poetry and technology."
                meta="React Native, Expo, Firebase, TypeScript"
                w={cardWidth}
              />
            </Box>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={ref}
                image={
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                    resizeMode="cover"
                  />
                }
                title="Shayr"
                subtitle="A social network for sharing poetry"
                description="Shayr is a social network for sharing poetry. It's a place for poets to share their work and for readers to discover new poets. Shayr is a passion project of mine. I built it to learn more about building a social network and to explore the intersection of poetry and technology."
                meta="React Native, Expo, Firebase, TypeScript"
                w={cardWidth}
              />
            </Box>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={ref}
                image={
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                    resizeMode="cover"
                  />
                }
                title="Shayr"
                subtitle="A social network for sharing poetry"
                description="Shayr is a social network for sharing poetry. It's a place for poets to share their work and for readers to discover new poets. Shayr is a passion project of mine. I built it to learn more about building a social network and to explore the intersection of poetry and technology."
                meta="React Native, Expo, Firebase, TypeScript"
                w={cardWidth}
              />
            </Box>
          </Carousel>
        </VStack>
      </Stack>
      <Stack
        space={{ base: "5", md: "10" }}
        direction={{ base: "column-reverse", md: "row" }}
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
            Collaborating with others
          </Text>
          <Text
            fontFamily="body"
            fontWeight="300"
            fontSize="lg"
            textAlign={{ base: "center", md: "left" }}
            py={{ base: "2", md: "4" }}
            // lineHeight="lg"
          >
            To do
          </Text>
          <LinkWithIcon
            url={socials.email.link}
            copy="Send me a message"
            target="_blank"
            fontSize="md"
            icon={socials.email.icon}
          />
          <LinkWithIcon
            url={socials.calendar.link}
            copy="Schedule time with me"
            target="_blank"
            fontSize="md"
            icon={socials.calendar.icon}
          />
          <HStack justifyContent="center" alignItems="center" space={2}>
            <Text fontSize="md" fontFamily="body" fontWeight="300">
              Follow me on social:{" "}
            </Text>
            {Object.entries(socials).map(([key, value]) => {
              if (key === "email" || key === "calendar") {
                return null;
              }

              return (
                <LinkWithIcon
                  key={key}
                  url={value.link}
                  copy=""
                  target="_blank"
                  fontSize="sm"
                  icon={value.icon}
                />
              );
            })}
          </HStack>
        </VStack>
        <VStack w={carouselContainerWidth} h={carouselContainerHeight}>
          <Carousel>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={ref}
                image={
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                    resizeMode="cover"
                  />
                }
                title="Shayr"
                subtitle="A social network for sharing poetry"
                description="Shayr is a social network for sharing poetry. It's a place for poets to share their work and for readers to discover new poets. Shayr is a passion project of mine. I built it to learn more about building a social network and to explore the intersection of poetry and technology."
                meta="React Native, Expo, Firebase, TypeScript"
                w={cardWidth}
              />
            </Box>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={ref}
                image={
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                    resizeMode="cover"
                  />
                }
                title="Shayr"
                subtitle="A social network for sharing poetry"
                description="Shayr is a social network for sharing poetry. It's a place for poets to share their work and for readers to discover new poets. Shayr is a passion project of mine. I built it to learn more about building a social network and to explore the intersection of poetry and technology."
                meta="React Native, Expo, Firebase, TypeScript"
                w={cardWidth}
              />
            </Box>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <Card
                ref={ref}
                image={
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                    }}
                    alt="image"
                    resizeMode="cover"
                  />
                }
                title="Shayr"
                subtitle="A social network for sharing poetry"
                description="Shayr is a social network for sharing poetry. It's a place for poets to share their work and for readers to discover new poets. Shayr is a passion project of mine. I built it to learn more about building a social network and to explore the intersection of poetry and technology."
                meta="React Native, Expo, Firebase, TypeScript"
                w={cardWidth}
              />
            </Box>
          </Carousel>
        </VStack>
      </Stack>
    </Stack>
  );
}
