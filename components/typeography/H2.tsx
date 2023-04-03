import React from "react";
import { Text } from "native-base";
import { ITextProps } from "native-base";

interface Props extends ITextProps {
  children: React.ReactChild;
}

export default function H2({ children, ...props }: Props) {
  return (
    <Text
      fontFamily="heading"
      fontWeight="400"
      fontSize="3xl"
      textAlign={{ base: "center", md: "left" }}
      {...props}
    >
      {children}
    </Text>
  );
}
