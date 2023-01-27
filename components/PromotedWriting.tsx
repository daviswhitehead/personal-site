import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "native-base";
import LinkWithIcon from "./LinkWithIcon";
import SubscribeModal from "./SubscribeModal";
import routes from "lib/routes";
import CardWriting from "./CardWriting";
import digitalBookLibrary from "../public/images/digitalBookLibrary.png";
import eggShopping from "../public/images/eggShopping.png";
import touchscreenCookbook from "../public/images/touchscreenCookbook.png";
import PressableStyle from "./PressableStyle";
import Carousel from "./Carousel";
import { composeAction, trackEvent } from "lib/gtag";
import { actions, categories, objects } from "lib/analyticsDefinitions";

export default function Promoted() {
  const [modalVisible, setModalVisible] = useState(false);

  const [cardHeight, setCardHeight] = useState(0);
  const refA = useRef<HTMLElement>(null);
  const refB = useRef<HTMLElement>(null);
  const refC = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (refC.current) {
        setCardHeight(refC.current.offsetHeight);
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
        >
          I write thoughts and ideas loosely related to living a well-lived
          life. Some posts are product pitches or critiques, others are about
          experiments in living, and some are deeply personal. My goals in
          writing are to build an engaged community to create products for, to
          think critically, and to live transparently. I’d love to hear your
          feedback.
        </Text>
        <LinkWithIcon url={routes.WRITING.path} copy="Explore my writing" />
        <LinkWithIcon
          onPress={() => {
            trackEvent({
              action: composeAction(actions.PRESS, objects.SUBSCRIBE_LINK),
              category: categories.HOME,
              label: "Subscribe to my newsletter",
            });
            setModalVisible(!modalVisible);
          }}
          copy="Subscribe to my newsletter"
        />
        <SubscribeModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </VStack>
      <VStack w={carouselContainerWidth} h={carouselContainerHeight}>
        <Carousel>
          <PressableStyle url={routes.WRITING.path}>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <CardWriting
                ref={refA}
                size="base"
                image={
                  <Image
                    source={{ uri: digitalBookLibrary.src }}
                    alt="a digital book library where the books are inside of a medium-sized touch screen mounted on a wall inside a living room."
                    resizeMode="cover"
                  />
                }
                title="Digital books are superior to analog in all but one way"
                description="I prefer digital books to analog. A digital book collection means you have your entire library in your pocket, saving physical space in your home. However, a digital library is invisible compared to an analog one. The visibility of an analog library is where analog beats digital."
                publishDate="Jan 26, 2023"
                w={cardWidth}
              />
            </Box>
          </PressableStyle>
          <PressableStyle url={routes.WRITING.path}>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <CardWriting
                ref={refB}
                size="base"
                image={
                  <Image
                    source={{ uri: eggShopping.src }}
                    alt="A person shopping in a huge room of varied egg cartons confused about which carton of eggs to purchase."
                    resizeMode="cover"
                  />
                }
                title="How to buy the perfect carton of eggs"
                description="I panic when it's time to buy eggs. The egg section of a grocery store has so too many options. The number of brands, prices, sizes, colors, animal-welfare descriptors, etc is overwhelming and makes a values-aligned purchase decision challenging. Is cage-free worth an extra $2?? I don't know :/."
                publishDate="Jan 23, 2023"
                w={cardWidth}
              />
            </Box>
          </PressableStyle>
          <PressableStyle url={routes.WRITING.path}>
            <Box
              flex={1}
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "center" }}
            >
              <CardWriting
                ref={refC}
                size="base"
                image={
                  <Image
                    source={{ uri: touchscreenCookbook.src }}
                    alt="How Michelin star chefs keep track of their recipes | gallery of beautiful homemade recipes | touchscreen cookbook."
                    resizeMode="cover"
                  />
                }
                title="How Michelin star chefs keep track of their recipes"
                description="What should we have for dinner tonight? The question posed in billions of households per day. As my family's chef de cuisine, I'm usually responsible for answering this question. That's easier said than done when you've cooked the same thing the last three weeks and you're not feeling inspired."
                publishDate="Jan 21, 2023"
                w={cardWidth}
              />
            </Box>
          </PressableStyle>
        </Carousel>
      </VStack>
    </Stack>
  );
}
