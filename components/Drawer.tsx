import React from "react";
import { Box, VStack } from "native-base";
import Routes from "../lib/routes";
import LinkHover from "./LinkHover";

const list = [Routes.ABOUT, Routes.WORK, Routes.WRITING];

export default function Drawer() {
  return (
    <Box w="100%" justifyContent={"flex-start"} alignItems={"flex-start"}>
      <VStack px="4" py="2">
        {list.map((item, idx) => {
          return (
            <LinkHover
              key={idx}
              onPress={() => console.log("hello world")}
              text={item.title}
              px="3"
              py="2"
            />
          );
        })}
      </VStack>
    </Box>
  );
}
