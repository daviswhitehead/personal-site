import React from "react";
import { Button, IButtonProps } from "native-base";

interface Props extends IButtonProps {
  text: string;
  onPress?: () => void;
  key?: string | number;
}

export default function LinkHover(props: Props) {
  return (
    <Button
      {...props}
      key={props.key}
      onPress={props.onPress}
      variant="unstyled"
      _hover={{
        _text: {
          color: "orange.300",
        },
      }}
      justifyContent={"flex-start"}
      px="0"
      py="0"
    >
      {props.text}
    </Button>
  );
}
