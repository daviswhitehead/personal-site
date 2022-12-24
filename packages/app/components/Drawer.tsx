import React from 'react'
import { Link as SolitoLink } from 'solito/link'
import { Box, VStack, Text, Pressable } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import Routes from '../navigation/routes'

const list = [Routes.ABOUT, Routes.PROJECTS, Routes.WRITING, Routes.COMMUNITY]

export default function Drawer(props: any) {
  return (
    <Box
      w="100%"
      justifyContent={'flex-start'}
      alignItems={'flex-start'}
      borderWidth="1"
      _light={{ bg: 'white', borderRightColor: 'coolGray.200' }}
      _dark={{ bg: 'coolGray.900', borderRightColor: 'coolGray.800' }}
    >
      <VStack px="6" py="2">
        {list.map((item, idx) => {
          return (
            <SolitoLink key={idx} href={item.path}>
              <Pressable
                disabled
                _hover={{
                  _text: {
                    _light: {
                      color: 'primary.900',
                    },
                    _dark: {
                      color: 'primary.500',
                    },
                  },

                  _icon: {
                    _light: {
                      color: 'primary.900',
                    },
                    _dark: {
                      color: 'primary.500',
                    },
                  },
                  _light: {
                    bg: 'primary.100',
                  },
                  _dark: {
                    bg: 'coolGray.800',
                  },
                }}
              >
                <Text
                  _light={{ color: 'gray.700' }}
                  _dark={{ color: 'gray.400' }}
                  fontSize={'lg'}
                  borderWidth="1"
                  py="1"
                  px="1"
                >
                  {item.title}
                </Text>
              </Pressable>
            </SolitoLink>
          )
        })}
      </VStack>
    </Box>
  )
}
