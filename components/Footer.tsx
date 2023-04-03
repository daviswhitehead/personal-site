import React from "react";
import { VStack, HStack, Link, Stack, Text } from "native-base";
import HoverStyle from "./HoverStyle";
import routes from "lib/routes";
import socials from "lib/socials";
import LinkWithIcon from "./LinkWithIcon";
import { composeAction, trackEvent } from "../lib/gtag";
import { categories, actions, objects } from "../lib/analyticsDefinitions";
import { space } from "styling/spacing";

export default function Footer() {
  return (
    <VStack
      w="100%"
      px={{ base: "4", md: "8" }}
      py={{ base: "3", md: "5" }}
      alignItems={{ base: "center", md: "flex-start" }}
      space={space.xl}
    >
      <Stack
        w="100%"
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        space={space.xl}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
          space={{ base: 0, md: 5 }}
        >
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
        </Stack>
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
                extraOnPress={() => {
                  trackEvent({
                    action: composeAction(actions.PRESS, objects.ICON),
                    category: categories.SOCIAL,
                    label: value.label,
                  });
                }}
              />
            );
          })}
        </HStack>
      </Stack>
      <LinkWithIcon
        onPress={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        copy="Back to the top"
        target="_blank"
        fontSize="sm"
        iconName="north"
      />
    </VStack>
  );
}
