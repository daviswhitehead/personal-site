import { Link as SolitoLink } from 'solito/link'
import React from 'react'
import {
  Center,
  Image,
  HStack,
  Text,
  Heading,
  Code,
  Link,
  VStack,
  Button,
  AspectRatio,
  Box,
  StatusBar,
  Hidden,
  IconButton,
  Icon,
  useColorMode,
  Input,
  Pressable,
  Menu,
  Avatar,
  Divider,
} from 'native-base'
import Header from '../../components/Header'
import Drawer from '../../components/Drawer'

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
        <Drawer />
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
