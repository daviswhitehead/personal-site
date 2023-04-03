import React from "react";
import { Stack, Text, AspectRatio, Box, useBreakpointValue } from "native-base";
import _ from "lodash";

export interface Props {
  image: React.ReactElement; // AspectRatio is 1:1
  title: string;
  description: string;
  publishDate: string;
  url?: string;
  hoverColor?: string;
}

export default function Card(props: Props) {
  const imageSize = "100";
  const showDescription = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Stack
      {...props}
      direction={"row"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      rounded="xl"
      overflow="hidden"
      w={"100%"}
    >
      <Box m="2" rounded="xl" overflow="hidden" w={imageSize} h={imageSize}>
        <AspectRatio w={imageSize} ratio={1 / 1}>
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
          {showDescription && (
            <Text fontFamily="body" fontWeight="300" fontSize="sm">
              {_.truncate(props.description, {
                length: 300,
                separator: " ",
              })}
            </Text>
          )}
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
}
