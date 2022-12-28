import React from 'react'
import { VStack, Box, StatusBar, Text } from 'native-base'
import Header from '../../components/Header'

export function AboutScreen(props: any) {
  return (
    <Box alignItems={{ base: 'flex-start', xl: 'center' }}>
      <Box w={{ base: '100%', xl: 'container.xl' }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Box safeAreaTop />
        <VStack flex={1} maxW="container.xl">
          <Header />
          <Box mt="6">
            <Text color="blue.300"> About</Text>
            <Text color="'gray.900'"> Hello World</Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}
