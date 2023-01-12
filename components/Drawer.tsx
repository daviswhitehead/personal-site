import React from "react";
import { Box, VStack, Text, Button, Link } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Routes from "../lib/routes";
import LinkHover from "./LinkHover";

const list = [Routes.ABOUT, Routes.WORK, Routes.WRITING];

export default function Drawer(props: any) {
  return (
    <Box w="100%" justifyContent={"flex-start"} alignItems={"flex-start"}>
      <VStack px="4" py="2">
        {list.map((item, idx) => {
          return (
            <LinkHover
              key={idx}
              // onPress={() => push(item.path)}
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
