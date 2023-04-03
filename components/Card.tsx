import React, { forwardRef } from "react";
import {
  Stack,
  Text,
  AspectRatio,
  HStack,
  VStack,
  useBreakpointValue,
} from "native-base";
import _ from "lodash";

export interface Props {
  image: React.ReactElement;
  title: string;
  subtitle: string;
  description: string;
  meta: string;
  w: number | string;
  hoverColor?: string;
}

const Card = (props: Props, ref: HTMLElement) => {
  const showDescription = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <VStack
      {...props}
      // @ts-expect-error can't figure out this ref thing
      ref={ref}
      rounded="xl"
      overflow="hidden"
      borderWidth={1}
      shadow={4}
      _dark={{ borderColor: "gray.500" }}
      w={props.w}
    >
      <AspectRatio w="100%" ratio={16 / 9}>
        {props.image}
      </AspectRatio>
      <Stack p="4" space={2}>
        <Stack space={0}>
          <Text
            fontSize="lg"
            fontFamily="heading"
            fontWeight="800"
            _dark={{ color: props.hoverColor ? props.hoverColor : "white" }}
          >
            {_.truncate(props.title, {
              length: 50,
              separator: " ",
            })}
          </Text>
          <Text fontFamily="heading" fontWeight="200" fontSize="sm" mt="-.5">
            {_.truncate(props.subtitle, {
              length: 60,
              separator: " ",
            })}
          </Text>
        </Stack>
        {showDescription && (
          <Text fontFamily="body" fontWeight="300" fontSize="sm">
            {_.truncate(props.description, {
              length: 200,
              separator: " ",
            })}
          </Text>
        )}
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            {/* <Text
              _dark={{
                color: "warmGray.200",
              }}
              fontSize="sm"
              fontFamily="body"
              fontWeight="500"
            >
              {_.truncate(props.meta, {
                length: 50,
                separator: " ",
              })}
            </Text> */}
          </HStack>
        </HStack>
      </Stack>
    </VStack>
  );
};

// @ts-expect-error can't figure out this ref thing
const forwardedRefCard = forwardRef(Card);

// Exporting the wrapped component
export default forwardedRefCard;
