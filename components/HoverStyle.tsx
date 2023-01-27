import React, { Children } from "react";
import { IPressableProps } from "native-base";

interface Props extends IPressableProps {
  children: React.ReactChild;
}

export default function HoverStyle({ children, ...rest }: Props) {
  const child = Children.only(children) as React.ReactElement;
  return React.cloneElement(child, {
    ...rest,
    _hover: {
      _text: { color: "orange.300" },
      _icon: { color: "orange.300" },
    },
  });
}
