import React from "react";
import { Text } from "native-base";
import { ITextProps } from "native-base";

interface Props extends ITextProps {
  children: React.ReactChild;
}

export default function H3({ children, ...props }: Props) {
  return (
    <Text
      fontFamily="heading"
      fontWeight="200"
      fontSize="2xl"
      textAlign={{ base: "center", md: "left" }}
      {...props}
    >
      {children}
    </Text>
  );
}
