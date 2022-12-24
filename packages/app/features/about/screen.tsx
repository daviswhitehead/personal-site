import React from 'react'
import { VStack, Button, Box, StatusBar } from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import Header from '../../components/Header'

export function AboutScreen(props: any) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{ bg: 'primary.900' }}
        _dark={{ bg: 'coolGray.900' }}
      />
      <VStack
        flex={1}
        _light={{ bg: 'primary.50' }}
        _dark={{ bg: 'customGray' }}
      >
        <Header />
        <Box mt="6">
          <SolitoLink href="/">
            <Button
              pointerEvents="none"
              variant="outline"
              colorScheme="coolGray"
            >
              home
            </Button>
          </SolitoLink>
        </Box>
      </VStack>
    </>
  )
}
