import React from 'react'
import { VStack, Box, StatusBar, Text } from 'native-base'
import Header from '../../components/Header'

export function AboutScreen(props: any) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box safeAreaTop />
      <VStack flex={1}>
        <Header />
        <Box mt="6">
          <Text color="blue.300"> Hello World</Text>
          <Text color="'gray.900'"> Hello World</Text>
        </Box>
      </VStack>
    </>
  )
}
