import React from "react";
import { useBreakpointValue, VStack } from "native-base";
import LinkWithIcon from "./LinkWithIcon";
import { composeAction, trackEvent } from "../lib/gtag";
import { categories, actions, objects } from "../lib/analyticsDefinitions";
import socials from "lib/socials";
import { space } from "styling/spacing";

export default function SocialStack() {
  const buttonWidth = useBreakpointValue({
    base: 300,
    md: 400,
  });
  const buttonHeight = 75;
  return (
    <VStack m={space.xl2} alignItems="center" space={5}>
      {Object.entries(socials).map(([key, value]) => {
        return (
          <LinkWithIcon
            key={key}
            url={value.link}
            copy={value.label}
            target="_blank"
            fontSize="sm"
            icon={value.icon}
            pressableStyle={{
              borderWidth: "1",
              shadow: "4",
              w: buttonWidth,
              h: buttonHeight,
              borderRadius: "50",
            }}
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
    </VStack>
  );
}
