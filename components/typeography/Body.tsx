import React from "react";
import { Text } from "native-base";
import { ITextProps } from "native-base";

interface Props extends ITextProps {
  children: React.ReactChild;
}

export default function Body({ children, ...props }: Props) {
  return (
    <Text
      fontFamily="body"
      fontWeight="300"
      fontSize="lg"
      textAlign={{ base: "center", md: "left" }}
      {...props}
    >
      {children}
    </Text>
  );
}
