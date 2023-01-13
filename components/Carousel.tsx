import React from "react";
import Swiper from "react-native-web-swiper";
import { Box, Pressable, Text } from "native-base";

export default function MyCarousel() {
  return (
    <>
      <Box boxSize="sm" bg={"red.400"} />
      <Text>FIRST</Text>
      <Box flex={1} width="100%" borderWidth={2} borderColor="red">
        <Swiper
          controlsProps={{
            dotActiveStyle: { backgroundColor: "#f59e0b" },
            dotsTouchable: true,
            nextPos: "right",
            prevPos: "left",
            //prevTitle: "",
            nextTitle: ">",
            nextTitleStyle: { color: "black", fontSize: 24, fontWeight: "500" },
            // @ts-expect-error because of the way the library is written
            PrevComponent: ({ onPress }) => (
              <Pressable onPress={onPress}>
                <Text
                  _dark={{
                    color: "black",
                  }}
                  _light={{
                    color: "black",
                  }}
                  fontSize={24}
                  fontWeight={500}
                >
                  {"<"}
                </Text>
              </Pressable>
            ),
          }}
          loop
          timeout={5}
        >
          <Text>FIRST</Text>
          <Text>SECOND</Text>
          <Text>THIRD</Text>
        </Swiper>
      </Box>
    </>
  );
}
