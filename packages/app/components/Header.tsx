import React from 'react'
import { Box, Hidden, useColorMode } from 'native-base'
import HeaderMobile from './HeaderMobile'
import HeaderDesktop from './HeaderDesktop'
import Drawer from './Drawer'

export default function Header(props: any) {
  const { colorMode } = useColorMode()
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(false)
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible)
  }
  return (
    <Box>
      <Box
        px={{ base: '4', md: '8' }}
        py={{ base: '3', md: '5' }}
        _dark={{
          bg: 'coolGray.900',
          borderColor: 'blue.500',
        }}
        _light={{
          bg: 'white',
          borderColor: 'blue.500',
        }}
      >
        <Hidden from="md">
          <HeaderMobile
            toggleDrawer={toggleSidebar}
            isDrawerVisible={isSidebarVisible}
          />
        </Hidden>
        <Hidden till="md">
          <HeaderDesktop />
        </Hidden>
      </Box>
      {isSidebarVisible && <Drawer />}
    </Box>
  )
}
