import React from "react";
import { Text, Box, Pressable, HStack, Icon } from "native-base";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pressableStyle?: any;
}

export default function LinkWithIcon(props: Props) {
  const handlePress = (url: string) => {
    Linking.canOpenURL(url).then(() => {
      return Linking.openURL(url, props.target ? props.target : "_self");
    });
  };
  const realOnPress = props.onPress
    ? props.onPress
    : () => props.url && handlePress(props.url);

  console.log("props", props);

  return (
    <Pressable onPress={realOnPress}>
      {({ isHovered }) => {
        const color = isHovered ? "orange.300" : "white";
        return (
          <Box
            justifyContent="center"
            alignItems="center"
            _dark={{ borderColor: color }}
            {...props.pressableStyle}
          >
            <HStack space={1} justifyContent="center" alignItems="center">
              {!props.noIcon &&
                (props.icon ? (
                  isHovered ? (
                    // @ts-expect-error duno what's going on here..
                    React.cloneElement(props.icon, { color: color })
                  ) : (
                    // @ts-expect-error duno what's going on here..
                    React.cloneElement(props.icon, { color: color })
                  )
                ) : (
                  <Icon
                    size="5"
                    name={props.iconName ? props.iconName : "east"}
                    as={MaterialIcons}
                    color={color}
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
          </Box>
        );
      }}
    </Pressable>
  );
}
