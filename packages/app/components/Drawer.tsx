import React from 'react'
import { Link as SolitoLink } from 'solito/link'
import { Box, VStack, Text, Button, Link } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import Routes from '../navigation/routes'
import { useRouter } from 'solito/router'
import LinkHover from './LinkHover'

const list = [Routes.ABOUT, Routes.WORK, Routes.WRITING]

export default function Drawer(props: any) {
  const { push } = useRouter()

  return (
    <Box w="100%" justifyContent={'flex-start'} alignItems={'flex-start'}>
      <VStack px="4" py="2">
        {list.map((item, idx) => {
          return (
            <LinkHover
              key={idx}
              onPress={() => push(item.path)}
              text={item.title}
              px="3"
              py="2"
            />
          )
        })}
      </VStack>
    </Box>
  )
}
