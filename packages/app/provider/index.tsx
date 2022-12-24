import { NavigationProvider } from './navigation'
import React from 'react'
import { NativeBaseProvider, extendTheme, Box } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const customTheme = extendTheme({ config })

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <NativeBaseProvider isSSR theme={customTheme}>
        <Box display={'flex'} flex={1} _dark={{ bg: 'gray.800' }}>
          {children}
        </Box>
      </NativeBaseProvider>
    </NavigationProvider>
  )
}
