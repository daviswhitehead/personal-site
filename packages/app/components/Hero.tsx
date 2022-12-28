import React from 'react'
import { Box, Image, Stack, Text, VStack } from 'native-base'

const headshot = require('../images/Headshot.png')

export default function Hero(props: any) {
  return (
    <Box px={{ base: '4', md: '8' }} py={{ base: '3', md: '5' }}>
      <Stack
        space={{ base: '5', md: '10' }}
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'flex-start' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <Image
          source={{ uri: headshot }}
          alt="Davis Whitehead's Headshot"
          size={'150'}
          resizeMode="contain"
        />
        <VStack flex={1} textAlign="center">
          <Text
            fontFamily="heading"
            fontWeight="800"
            fontSize="5xl"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Hi, I'm Davis.
          </Text>
          <Text
            fontFamily="heading"
            fontWeight="200"
            fontSize="3xl"
            textAlign={{ base: 'center', md: 'left' }}
          >
            I'm a product maker and a proud generalist.
          </Text>
        </VStack>
      </Stack>
    </Box>
  )
}
