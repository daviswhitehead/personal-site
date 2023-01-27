import React, { forwardRef } from "react";
import { AspectRatio, VStack } from "native-base";

export interface Props {
  image: React.ReactElement;
  w: number | string;
}

const Card = (props: Props, ref: HTMLElement) => {
  return (
    <VStack
      {...props}
      // @ts-expect-error can't figure out this ref thing
      ref={ref}
      rounded="xl"
      overflow="hidden"
      // borderWidth={1}
      shadow={4}
      _dark={{ borderColor: "gray.500" }}
      w={props.w}
      borderWidth={2}
      borderColor={"red.500"}
    >
      <AspectRatio w="100%" ratio={16 / 9}>
        {props.image}
      </AspectRatio>
    </VStack>
  );
};

// @ts-expect-error can't figure out this ref thing
const forwardedRefCard = forwardRef(Card);

// Exporting the wrapped component
export default forwardedRefCard;
