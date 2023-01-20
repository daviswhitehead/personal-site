import React from "react";

import {
  Text,
  Box,
  Pressable,
  useBreakpointValue,
  HStack,
  Icon,
} from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // east > trending-flat > subdirectory-arrow-right
// @ts-expect-error duno...
import { Linking } from "react-native-web";

interface Props {
  url: string;
  name?: string;
  copy: string;
}

export default function LinkWithIcon(props: Props) {
  const handlePress = (url: string) => {
    Linking.canOpenURL(url).then(() => {
      return Linking.openURL(url, "_self");
    });
  };

  return (
    <Box
      alignItems={useBreakpointValue({
        base: "center",
        xl: "flex-start",
      })}
      py={{ base: "4", md: "2" }}
    >
      <Pressable onPress={() => handlePress(props.url)}>
        {({ isHovered }) => {
          const color = isHovered ? "orange.300" : "white";
          return (
            <HStack space={1} justifyContent="center" alignItems="center">
              <Icon
                size="5"
                name={props.name ? props.name : "east"}
                as={MaterialIcons}
                _dark={{ color: color }}
              />
              <Text
                fontSize="lg"
                fontFamily="body"
                fontWeight="300"
                _dark={{ color: color }}
              >
                {props.copy}
              </Text>
            </HStack>
          );
        }}
      </Pressable>
    </Box>
  );
}
