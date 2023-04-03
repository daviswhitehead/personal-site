import React from "react";
import { Pressable } from "native-base";

interface Props {
  icon: React.ReactNode;
  onPress?: () => void;
}

export default function IconButton(props: Props) {
  return (
    <Pressable variant="unstyled" onPress={props.onPress}>
      {({ isHovered }) => {
        return isHovered
          ? // @ts-expect-error duno what's going on here..
            React.cloneElement(props.icon, { color: "orange.300" })
          : // @ts-expect-error duno what's going on here..
            React.cloneElement(props.icon, { color: "white" });
      }}
    </Pressable>
  );
}
