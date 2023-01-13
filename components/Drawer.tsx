import React from "react";
import { Box, VStack, Link } from "native-base";
import Routes from "../lib/routes";
import HoverStyle from "./HoverStyle";

const list = [Routes.ABOUT, Routes.WORK, Routes.WRITING];

export default function Drawer() {
  return (
    <Box w="100%" justifyContent={"flex-start"} alignItems={"flex-start"}>
      <VStack px="4" py="2">
        {list.map((item, idx) => {
          return (
            <HoverStyle key={idx} px="3" py="2">
              <Link isUnderlined={false} href={item.path}>
                {item.title}
              </Link>
            </HoverStyle>
          );
        })}
      </VStack>
    </Box>
  );
}
