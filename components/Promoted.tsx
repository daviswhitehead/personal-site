import React from "react";

import { Image, Stack, Text, VStack, Link, Box } from "native-base";
import HoverStyle from "./HoverStyle";
import Card from "./Card";
import Carousel from "./Carousel";

export default function Promoted() {
  const cardWidth = 400;
  const cardHeight = 400;
  const carouselContainerWidth = cardWidth + 100;
  const carouselContainerHeight = cardHeight + 120;

  return (
    <Stack flex={1} direction={"column"} overflow="hidden">
      <Stack
        flex={1}
        space={{ base: "5", lg: "10" }}
        direction={{ base: "column-reverse", lg: "row" }}
        px={{ base: "4", lg: "8" }}
        py={{ base: "3", lg: "5" }}
        alignItems={{ base: "center", lg: "center" }}
      >
        <VStack flex={1} alignItems={{ base: "center", lg: "flex-start" }}>
          <Text
            fontFamily="heading"
            fontWeight="200"
            fontSize="3xl"
            textAlign={{ base: "center", lg: "left" }}
            py={{ base: "3", lg: "6" }}
          >
            I’m passionate about creating products people love.
          </Text>
          <Text
            fontFamily="body"
            fontWeight="300"
            fontSize="lg"
            textAlign={{ base: "center", lg: "left" }}
            py={{ base: "2", lg: "4" }}
            lineHeight="lg"
          >
            I love solving a problem so well for someone that they can’t stop
            talking about how great your product is. Products like this come
            from listening to people and acting on their feedback. This doesn’t
            mean building precisely what’s described. It means thoughtfully
            combining a deep understanding of the problem with data revealing
            how people actually behave. It means considering a wide range of
            solutions, then choosing the best one intentionally. And it means
            keeping things simple by staying focused on why people use your
            product.
          </Text>
          <HoverStyle py={{ base: "2", lg: "4" }}>
            <Link
              _text={{
                fontSize: "xl",
                fontFamily: "body",
                fontWeight: "500",
              }}
              isUnderlined={false}
              href={"mailto:whitehead.davis@gmail.com"}
              isExternal
            >
              -- Let’s discuss creating products people love!
            </Link>
          </HoverStyle>
        </VStack>
        <VStack w={carouselContainerWidth} h={carouselContainerHeight}>
          <Carousel>
            <Box
              flex={1}
              justifyContent={{ base: "center", lg: "center" }}
              alignItems={{ base: "center", lg: "center" }}
            >
              <Card
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
              justifyContent={{ base: "center", lg: "center" }}
              alignItems={{ base: "center", lg: "center" }}
            >
              <Box
                flex={1}
                justifyContent={{ base: "center", lg: "center" }}
                alignItems={{ base: "center", lg: "center" }}
              >
                <Card
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
            </Box>
            <Box
              flex={1}
              justifyContent={{ base: "center", lg: "center" }}
              alignItems={{ base: "center", lg: "center" }}
            >
              <Box
                flex={1}
                justifyContent={{ base: "center", lg: "center" }}
                alignItems={{ base: "center", lg: "center" }}
              >
                <Card
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
            </Box>
          </Carousel>
        </VStack>
      </Stack>
      <Stack
        flex={1}
        space={{ base: "5", lg: "10" }}
        direction={{ base: "column", lg: "row" }}
        px={{ base: "4", lg: "8" }}
        py={{ base: "3", lg: "5" }}
        alignItems={{ base: "center", lg: "center" }}
      >
        <VStack w={carouselContainerWidth} h={carouselContainerHeight}>
          <Carousel>
            <Box
              flex={1}
              justifyContent={{ base: "center", lg: "center" }}
              alignItems={{ base: "center", lg: "center" }}
            >
              <Card
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
              justifyContent={{ base: "center", lg: "center" }}
              alignItems={{ base: "center", lg: "center" }}
            >
              <Box
                flex={1}
                justifyContent={{ base: "center", lg: "center" }}
                alignItems={{ base: "center", lg: "center" }}
              >
                <Card
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
            </Box>
            <Box
              flex={1}
              justifyContent={{ base: "center", lg: "center" }}
              alignItems={{ base: "center", lg: "center" }}
            >
              <Box
                flex={1}
                justifyContent={{ base: "center", lg: "center" }}
                alignItems={{ base: "center", lg: "center" }}
              >
                <Card
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
            </Box>
          </Carousel>
        </VStack>
        <VStack flex={1} alignItems={{ base: "center", lg: "flex-start" }}>
          <Text
            fontFamily="heading"
            fontWeight="200"
            fontSize="3xl"
            textAlign={{ base: "center", lg: "left" }}
            py={{ base: "3", lg: "6" }}
          >
            I’m passionate about creating products people love.
          </Text>
          <Text
            fontFamily="body"
            fontWeight="300"
            fontSize="lg"
            textAlign={{ base: "center", lg: "left" }}
            py={{ base: "2", lg: "4" }}
            lineHeight="lg"
          >
            I love solving a problem so well for someone that they can’t stop
            talking about how great your product is. Products like this come
            from listening to people and acting on their feedback. This doesn’t
            mean building precisely what’s described. It means thoughtfully
            combining a deep understanding of the problem with data revealing
            how people actually behave. It means considering a wide range of
            solutions, then choosing the best one intentionally. And it means
            keeping things simple by staying focused on why people use your
            product.
          </Text>
          <HoverStyle py={{ base: "2", lg: "4" }}>
            <Link
              _text={{
                fontSize: "xl",
                fontFamily: "body",
                fontWeight: "500",
              }}
              isUnderlined={false}
              href={"mailto:whitehead.davis@gmail.com"}
              isExternal
            >
              -- Let’s discuss creating products people love!
            </Link>
          </HoverStyle>
        </VStack>
      </Stack>
      <Stack
        flex={1}
        space={{ base: "5", lg: "10" }}
        direction={{ base: "column-reverse", lg: "row" }}
        px={{ base: "4", lg: "8" }}
        py={{ base: "3", lg: "5" }}
        alignItems={{ base: "center", lg: "center" }}
      >
        <VStack flex={1} alignItems={{ base: "center", lg: "flex-start" }}>
          <Text
            fontFamily="heading"
            fontWeight="200"
            fontSize="3xl"
            textAlign={{ base: "center", lg: "left" }}
            py={{ base: "3", lg: "6" }}
          >
            I’m passionate about creating products people love.
          </Text>
          <Text
            fontFamily="body"
            fontWeight="300"
            fontSize="lg"
            textAlign={{ base: "center", lg: "left" }}
            py={{ base: "2", lg: "4" }}
            lineHeight="lg"
          >
            I love solving a problem so well for someone that they can’t stop
            talking about how great your product is. Products like this come
            from listening to people and acting on their feedback. This doesn’t
            mean building precisely what’s described. It means thoughtfully
            combining a deep understanding of the problem with data revealing
            how people actually behave. It means considering a wide range of
            solutions, then choosing the best one intentionally. And it means
            keeping things simple by staying focused on why people use your
            product.
          </Text>
          <HoverStyle py={{ base: "2", lg: "4" }}>
            <Link
              _text={{
                fontSize: "xl",
                fontFamily: "body",
                fontWeight: "500",
              }}
              isUnderlined={false}
              href={"mailto:whitehead.davis@gmail.com"}
              isExternal
            >
              -- Let’s discuss creating products people love!
            </Link>
          </HoverStyle>
        </VStack>
        <VStack w={carouselContainerWidth} h={carouselContainerHeight}>
          <Carousel>
            <Box
              flex={1}
              justifyContent={{ base: "center", lg: "center" }}
              alignItems={{ base: "center", lg: "center" }}
            >
              <Card
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
              justifyContent={{ base: "center", lg: "center" }}
              alignItems={{ base: "center", lg: "center" }}
            >
              <Box
                flex={1}
                justifyContent={{ base: "center", lg: "center" }}
                alignItems={{ base: "center", lg: "center" }}
              >
                <Card
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
            </Box>
            <Box
              flex={1}
              justifyContent={{ base: "center", lg: "center" }}
              alignItems={{ base: "center", lg: "center" }}
            >
              <Box
                flex={1}
                justifyContent={{ base: "center", lg: "center" }}
                alignItems={{ base: "center", lg: "center" }}
              >
                <Card
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
            </Box>
          </Carousel>
        </VStack>
      </Stack>
    </Stack>
  );
}
