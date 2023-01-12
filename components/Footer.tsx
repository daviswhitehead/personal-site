import React from "react";
import { Button } from "native-base";

interface Props {
  key: string;
  onPress: () => void;
  text: string;
}
export default function Drawer(props: Props) {
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
