import React from "react";
import { Text } from "native-base";
import { ITextProps } from "native-base";

interface Props extends ITextProps {
  children: React.ReactChild;
}

export default function H1({ children, ...props }: Props) {
  return (
    <Text
      fontFamily="heading"
      fontWeight="800"
      fontSize="5xl"
      textAlign={{ base: "center", md: "left" }}
      {...props}
    >
      {children}
    </Text>
  );
}
