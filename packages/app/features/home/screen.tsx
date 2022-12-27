import React from 'react'
import { VStack, Box, StatusBar, Text } from 'native-base'
import Header from '../../components/Header'
import Introduction from '../../components/Introduction'
import Promoted from '../../components/Promoted'
import Subscribe from '../../components/Subscribe'
import Footer from '../../components/Footer'

export function HomeScreen(props: any) {
  return (
    <Box alignItems={{ base: 'flex-start', xl: 'center' }}>
      <Box w="container.xl">
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Box safeAreaTop />
        <VStack>
          <Header />
          <Introduction />
          <Promoted />
          <Subscribe />
          <Footer />
        </VStack>
      </Box>
    </Box>
  )
}
