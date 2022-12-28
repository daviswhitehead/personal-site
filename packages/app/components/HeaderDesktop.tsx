import React from 'react'
import { HStack, useColorMode } from 'native-base'
import { useRouter } from 'solito/router'
import LinkHover from './LinkHover'
import Routes from '../navigation/routes'

const list = [Routes.ABOUT, Routes.WORK, Routes.WRITING]

export default function Header(props: any) {
  const { colorMode } = useColorMode()
  const { push } = useRouter()
  return (
    <HStack alignItems="center" space={10} justifyContent="flex-start">
      <LinkHover
        onPress={() => push(Routes.HOME.path)}
        text={Routes.HOME.title}
        _text={{ fontSize: 'lg' }}
      />
      <HStack alignItems="flex-start" space={5}>
        {list.map((item, idx) => {
          return (
            <LinkHover
              key={idx}
              onPress={() => push(item.path)}
              text={item.title}
            />
          )
        })}
      </HStack>
    </HStack>
  )
}
