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
  url?: string;
  copy: string;
  target?: string;
  fontSize?: string;
  iconName?: string;
  icon?: React.ReactNode;
  noIcon?: boolean;
  onPress?: () => void;
}

export default function LinkWithIcon(props: Props) {
  const handlePress = (url: string) => {
    Linking.canOpenURL(url).then(() => {
      return Linking.openURL(url, props.target ? props.target : "_self");
    });
  };

  return (
    <Box
      alignItems={useBreakpointValue({
        base: "center",
        xl: "flex-start",
      })}
      py={{ base: "2", md: "2" }}
    >
      <Pressable
        onPress={
          props.onPress
            ? props.onPress
            : () => props.url && handlePress(props.url)
        }
      >
        {({ isHovered }) => {
          const color = isHovered ? "orange.300" : "white";
          return (
            <HStack space={1} justifyContent="center" alignItems="center">
              {!props.noIcon &&
                (props.icon ? (
                  // @ts-expect-error duno...
                  React.cloneElement(props.icon, { _dark: { color: color } })
                ) : (
                  <Icon
                    size="5"
                    name={props.iconName ? props.iconName : "east"}
                    as={MaterialIcons}
                    _dark={{ color: color }}
                  />
                ))}
              <Text
                fontSize={props.fontSize ? props.fontSize : "md"}
                fontFamily="body"
                fontWeight="300"
                textAlign={"left"}
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
