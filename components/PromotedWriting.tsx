import React, { useState } from "react";
import { Image, Stack, useBreakpointValue, Box } from "native-base";
import LinkWithIcon from "./LinkWithIcon";
import SubscribeModal from "./SubscribeModal";
import routes from "lib/routes";
import CardWriting from "./CardWriting";
import digitalBookLibrary from "../public/images/digitalBookLibrary.png";
import eggShopping from "../public/images/eggShopping.png";
import touchscreenCookbook from "../public/images/touchscreenCookbook.png";
import PressableStyle from "./PressableStyle";
import { composeAction, trackEvent } from "lib/gtag";
import { actions, categories, objects } from "lib/analyticsDefinitions";
import { space } from "../styling/spacing";
import H2 from "./typeography/H2";
import Body from "./typeography/Body";

export default function Promoted() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Stack
      px={space.lg}
      py={space.md}
      direction={{ base: "column", md: "column" }}
      alignItems={useBreakpointValue({
        base: "center",
        md: "flex-start",
      })}
    >
      <H2 py={space.lg}>Writing about products, life, and more</H2>
      <Box w="100%" alignItems={"center"}>
        <Stack
          space={space.sm}
          direction={"column"}
          w="90%"
          alignItems={"flex-start"}
        >
          <PressableStyle url={routes.WRITING.path}>
            <CardWriting
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
            />
          </PressableStyle>
          <PressableStyle url={routes.WRITING.path}>
            <CardWriting
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
            />
          </PressableStyle>
          <PressableStyle url={routes.WRITING.path}>
            <CardWriting
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
            />
          </PressableStyle>
        </Stack>
      </Box>
      <Body py={space.md}>
        I write reflections on what it means to live a well-lived life. Some
        posts are product pitches, others are about experiments in living, and
        some are deeply personal. My goals in writing are to build an engaged
        community to create products for, to think critically, and to live
        transparently. I’d love to hear your feedback.
      </Body>
      <LinkWithIcon url={routes.WRITING.path} copy="Explore more writing" />
      <LinkWithIcon
        onPress={() => {
          trackEvent({
            action: composeAction(actions.PRESS, objects.SUBSCRIBE_LINK),
            category: categories.HOME,
            label: "Subscribe to stay up to date",
          });
          setModalVisible(!modalVisible);
        }}
        copy="Subscribe to stay up to date"
      />
      <SubscribeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Stack>
  );
}
