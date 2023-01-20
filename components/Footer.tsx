import React from "react";
import { Box, HStack, Link, Stack, Text } from "native-base";
import HoverStyle from "./HoverStyle";
import routes from "lib/routes";
import socials from "lib/socials";
import LinkWithIcon from "./LinkWithIcon";

export default function Footer() {
  return (
    <Box px={{ base: "4", md: "8" }} py={{ base: "3", md: "5" }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
      >
        <HStack space={5} alignItems="center">
          <HoverStyle>
            <Link
              _text={{
                fontSize: "lg",
              }}
              isUnderlined={false}
              href={routes.HOME.path}
            >
              {routes.HOME.title}
            </Link>
          </HoverStyle>
          <HStack space={2} alignItems="center">
            <Text fontSize="sm">&copy; 2023</Text>
            <LinkWithIcon
              url={"https://github.com/daviswhitehead/daviswhitehead.com"}
              copy="Checkout the source code"
              target="_blank"
              fontSize="sm"
            />
          </HStack>
        </HStack>
        <HStack alignItems="flex-start" space={5}>
          {Object.entries(socials).map(([key, value]) => {
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
      </Stack>
    </Box>
  );
}
