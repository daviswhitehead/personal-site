import React from 'react'
import {
  Box,
  Stack,
  Text,
  AspectRatio,
  Image,
  Center,
  Heading,
  HStack,
  VStack,
} from 'native-base'

export default function Card(props: any) {
  return (
    <VStack
      w={{ base: '500', md: '250', lg: '375', xl: '500' }}
      rounded="xl"
      overflow="hidden"
      _dark={{
        backgroundColor: 'gray.700',
      }}
    >
      <AspectRatio ratio={16 / 9}>{props.image}</AspectRatio>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {props.title}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: 'violet.500',
            }}
            _dark={{
              color: 'violet.400',
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            {props.subtitle}
          </Text>
        </Stack>
        <Text fontWeight="400">{props.description}</Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400"
            >
              {props.meta}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </VStack>
  )
}
