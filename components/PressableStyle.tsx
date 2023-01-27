import React, { Children } from "react";
import { Pressable } from "native-base";
// @ts-expect-error duno...
import { Linking } from "react-native-web";

interface Props {
  children: React.ReactChild;
  url?: string;
  target?: string;
}

export default function SubscribeModal({ children, ...props }: Props) {
  const child = Children.only(children) as React.ReactElement;

  const handlePress = (url: string) => {
    Linking.canOpenURL(url).then(() => {
      return Linking.openURL(url, props.target ? props.target : "_self");
    });
  };

  return (
    <Pressable onPress={() => props.url && handlePress(props.url)}>
      {({ isHovered }) => {
        const color = isHovered ? "orange.300" : "white";
        return React.cloneElement(child, {
          ...props,
          hoverColor: color,
        });
      }}
    </Pressable>
  );
}
