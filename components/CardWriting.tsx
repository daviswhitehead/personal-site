import React, { forwardRef } from "react";
import { Stack, Text, AspectRatio, Box } from "native-base";
import _ from "lodash";

export interface Props {
  image: React.ReactElement; // AspectRatio is 1:1
  title: string;
  description: string;
  publishDate: string;
  readTime?: string;
  size: "base" | "sm" | "md" | "lg" | "xl";
  url?: string;
  hoverColor?: string;
  w: number | string;
}

const Card = (props: Props, ref: HTMLElement) => {
  const imageSize = {
    base: "100",
    sm: "125",
    md: "150",
    lg: "175",
    xl: "200",
  };

  return (
    <Stack
      {...props}
      direction={{ base: "row", md: "row" }}
      justifyContent={{ base: "flex-start", md: "flex-start" }}
      alignItems="flex-start"
      // @ts-expect-error can't figure out this ref thing
      ref={ref}
      rounded="xl"
      overflow="hidden"
      borderWidth={1}
      shadow={4}
      _dark={{ borderColor: "gray.500" }}
      w={props.w}
    >
      <Box
        m="2"
        rounded="xl"
        overflow="hidden"
        w={imageSize[props.size]}
        h={imageSize[props.size]}
      >
        <AspectRatio w={imageSize[props.size]} ratio={1 / 1}>
          {props.image}
        </AspectRatio>
      </Box>
      <Stack m="2" space={2} flex={1}>
        <Stack space={0}>
          <Text
            fontFamily="heading"
            fontWeight="800"
            fontSize="md"
            _dark={{ color: props.hoverColor ? props.hoverColor : "white" }}
          >
            {_.truncate(props.title, {
              length: 100,
              separator: " ",
            })}
          </Text>
          <Text fontFamily="body" fontWeight="300" fontSize="sm">
            {_.truncate(props.description, {
              length: 300,
              separator: " ",
            })}
          </Text>
        </Stack>
        <Stack space={0}>
          <Text
            _dark={{
              color: "warmGray.200",
            }}
            fontFamily="body"
            fontWeight="500"
            fontSize="sm"
          >
            {props.publishDate}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

// @ts-expect-error can't figure out this ref thing
const forwardedRefCard = forwardRef(Card);

// Exporting the wrapped component
export default forwardedRefCard;
