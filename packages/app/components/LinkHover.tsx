import React from 'react'
import { Button } from 'native-base'

export default function Drawer(props: any) {
  return (
    <Button
      key={props.key}
      onPress={props.onPress}
      variant="unstyled"
      _hover={{
        _text: {
          color: 'green.500',
        },
      }}
      justifyContent={'flex-start'}
      px="0"
      py="0"
      {...props}
    >
      {props.text}
    </Button>
  )
}
