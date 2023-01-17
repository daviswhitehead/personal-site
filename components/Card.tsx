import React from "react";
import { Stack, Text, AspectRatio, HStack, VStack } from "native-base";
import _ from "lodash";

export interface Props {
  image: React.ReactElement;
  title: string;
  subtitle: string;
  description: string;
  meta: string;
  w: number;
  h?: number;
}

export default function Card(props: Props) {
  return (
    <VStack
      rounded="xl"
      overflow="hidden"
      borderWidth={1}
      shadow={4}
      _dark={{ borderColor: "gray.500" }}
      w={props.w}
      h={props.h}
    >
      <AspectRatio w="100%" ratio={16 / 9}>
        {props.image}
      </AspectRatio>
      <Stack p="4" space={2}>
        <Stack space={0}>
          <Text fontSize="lg" fontFamily="heading" fontWeight="800">
            {_.truncate(props.title, {
              length: 50,
              separator: " ",
            })}
          </Text>
          <Text fontFamily="heading" fontWeight="200" fontSize="sm" mt="-.5">
            {_.truncate(props.subtitle, {
              length: 100,
              separator: " ",
            })}
          </Text>
        </Stack>
        <Text fontFamily="body" fontWeight="300" fontSize="sm">
          {_.truncate(props.description, {
            length: 300,
            separator: " ",
          })}
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              _dark={{
                color: "warmGray.200",
              }}
              fontSize="sm"
              fontFamily="body"
              fontWeight="500"
            >
              {_.truncate(props.meta, {
                length: 100,
                separator: " ",
              })}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </VStack>
  );
}
