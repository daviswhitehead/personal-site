import React from 'react'
import { Box, Image, HStack, Text, VStack } from 'native-base'

const headshot = require('../images/Headshot.png')

export default function Drawer(props: any) {
  return (
    <Box>
      <HStack space={100} justifyContent="flex-start" alignItems="center">
        <Image
          source={{ uri: headshot }}
          alt="Davis Whitehead's Headshot"
          size={'150'}
          resizeMode="contain"
        />
        <VStack>
          <Text>Hi, I'm Davis.</Text>
          <Text>I'm a ...</Text>
        </VStack>
      </HStack>
    </Box>
  )
}
