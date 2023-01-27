import React, { useState } from "react";
import { Box, Text, Image, useBreakpointValue } from "native-base";
import CardWriting from "../components/CardWriting";
import Card from "../components/Card";
import WHOOPSleepBanner from "../public/images/WHOOPSleepBanner.png";
import PressableStyle from "../components/PressableStyle";
import Header from "../components/Header";
import SubscribeModal from "../components/SubscribeModal";
import LinkWithIcon from "components/LinkWithIcon";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(window.scrollY);

  return (
    <>
      <SubscribeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Box
        flex={1}
        _dark={{ bg: "gray.800" }}
        alignItems={useBreakpointValue({
          base: "flex-start",
          xl: "center",
        })}
        borderWidth={2}
        borderColor={"red.500"}
      >
        <Box
          alignSelf={useBreakpointValue({
            base: "flex-start",
            xl: "center",
          })}
          w={{ base: "100%", xl: "container.xl" }}
        >
          <Header
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <Text>Scratch</Text>
          <LinkWithIcon
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            copy="Subscribe"
            noIcon
          />
          <Box
            justifyContent="flex-start"
            alignItems={{ base: "center", md: "center" }}
            w="100%"
            borderWidth={2}
            borderColor={"red.500"}
          >
            <PressableStyle url="https://www.linkedin.com/in/daviswhitehead/">
              <CardWriting
                size="base"
                image={
                  <Image
                    source={{ uri: WHOOPSleepBanner.src }}
                    alt="Highlights from WHOOP's Sleep Coaching."
                    resizeMode="cover"
                  />
                }
                title="Digital books are superior to analog in all but one way"
                description="I love books. I’m not a fast reader, and sometimes reading can feel like a chore, but it’s so rewarding to learn"
                publishDate="Jan 26, 2023"
              />
            </PressableStyle>
          </Box>
          <Box
            justifyContent="flex-start"
            alignItems={{ base: "center", md: "center" }}
            w="100%"
            borderWidth={2}
            borderColor={"red.500"}
          >
            <PressableStyle url="https://www.linkedin.com/in/daviswhitehead/">
              <CardWriting
                size="base"
                image={
                  <Image
                    source={{ uri: WHOOPSleepBanner.src }}
                    alt="Highlights from WHOOP's Sleep Coaching."
                    resizeMode="cover"
                  />
                }
                title="Digital books are superior to analog in all but one way"
                description="I love books. I’m not a fast reader, and sometimes reading can feel like a chore, but it’s so rewarding to learn"
                publishDate="Jan 26, 2023"
              />
            </PressableStyle>
          </Box>
          <Box
            justifyContent="flex-start"
            alignItems={{ base: "center", md: "center" }}
            w="100%"
            borderWidth={2}
            borderColor={"red.500"}
          >
            <PressableStyle url="https://www.linkedin.com/in/daviswhitehead/">
              <CardWriting
                size="base"
                image={
                  <Image
                    source={{ uri: WHOOPSleepBanner.src }}
                    alt="Highlights from WHOOP's Sleep Coaching."
                    resizeMode="cover"
                  />
                }
                title="Digital books are superior to analog in all but one way"
                description="I love books. I’m not a fast reader, and sometimes reading can feel like a chore, but it’s so rewarding to learn"
                publishDate="Jan 26, 2023"
              />
            </PressableStyle>
          </Box>
          <Box
            justifyContent="flex-start"
            alignItems={{ base: "center", md: "center" }}
            w="100%"
            borderWidth={2}
            borderColor={"red.500"}
          >
            <PressableStyle url="https://www.linkedin.com/in/daviswhitehead/">
              <CardWriting
                size="base"
                image={
                  <Image
                    source={{ uri: WHOOPSleepBanner.src }}
                    alt="Highlights from WHOOP's Sleep Coaching."
                    resizeMode="cover"
                  />
                }
                title="Digital books are superior to analog in all but one way"
                description="I love books. I’m not a fast reader, and sometimes reading can feel like a chore, but it’s so rewarding to learn"
                publishDate="Jan 26, 2023"
              />
            </PressableStyle>
          </Box>
          <Box
            justifyContent="flex-start"
            alignItems={{ base: "center", md: "center" }}
            w="100%"
            borderWidth={2}
            borderColor={"red.500"}
          >
            <PressableStyle url="https://www.linkedin.com/in/daviswhitehead/">
              <CardWriting
                size="base"
                image={
                  <Image
                    source={{ uri: WHOOPSleepBanner.src }}
                    alt="Highlights from WHOOP's Sleep Coaching."
                    resizeMode="cover"
                  />
                }
                title="Digital books are superior to analog in all but one way"
                description="I love books. I’m not a fast reader, and sometimes reading can feel like a chore, but it’s so rewarding to learn"
                publishDate="Jan 26, 2023"
              />
            </PressableStyle>
          </Box>
          <Box
            justifyContent="flex-start"
            alignItems={{ base: "center", md: "center" }}
            w="100%"
            borderWidth={2}
            borderColor={"red.500"}
          >
            <PressableStyle url="https://www.linkedin.com/in/daviswhitehead/">
              <CardWriting
                size="base"
                image={
                  <Image
                    source={{ uri: WHOOPSleepBanner.src }}
                    alt="Highlights from WHOOP's Sleep Coaching."
                    resizeMode="cover"
                  />
                }
                title="Digital books are superior to analog in all but one way"
                description="I love books. I’m not a fast reader, and sometimes reading can feel like a chore, but it’s so rewarding to learn"
                publishDate="Jan 26, 2023"
              />
            </PressableStyle>
          </Box>
          <Box
            justifyContent="flex-start"
            alignItems={{ base: "center", md: "center" }}
            w="100%"
            borderWidth={2}
            borderColor={"red.500"}
          >
            <PressableStyle url="https://www.linkedin.com/in/daviswhitehead/">
              <CardWriting
                size="base"
                image={
                  <Image
                    source={{ uri: WHOOPSleepBanner.src }}
                    alt="Highlights from WHOOP's Sleep Coaching."
                    resizeMode="cover"
                  />
                }
                title="Digital books are superior to analog in all but one way"
                description="I love books. I’m not a fast reader, and sometimes reading can feel like a chore, but it’s so rewarding to learn"
                publishDate="Jan 26, 2023"
              />
            </PressableStyle>
          </Box>
          <Box
            justifyContent="flex-start"
            alignItems={{ base: "center", md: "center" }}
            w="100%"
            borderWidth={2}
            borderColor={"red.500"}
          >
            <PressableStyle url="https://www.linkedin.com/in/daviswhitehead/">
              <CardWriting
                size="base"
                image={
                  <Image
                    source={{ uri: WHOOPSleepBanner.src }}
                    alt="Highlights from WHOOP's Sleep Coaching."
                    resizeMode="cover"
                  />
                }
                title="Digital books are superior to analog in all but one way"
                description="I love books. I’m not a fast reader, and sometimes reading can feel like a chore, but it’s so rewarding to learn"
                publishDate="Jan 26, 2023"
              />
            </PressableStyle>
          </Box>
          <Box
            flex={1}
            justifyContent="flex-start"
            alignItems={{ base: "center", md: "center" }}
            w="100%"
            borderWidth={2}
            borderColor={"red.500"}
          >
            <PressableStyle url="https://www.linkedin.com/in/daviswhitehead/">
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
                w={"500"}
              />
            </PressableStyle>
          </Box>
        </Box>
      </Box>
    </>
  );
}
