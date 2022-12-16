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
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons'

export function AboutScreen(props: any) {
  const { colorMode } = useColorMode()
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
        <Box
          px={{ base: '4', md: '8' }}
          pt={{ base: '4', md: '3' }}
          pb={{ base: '5', md: '3' }}
          borderBottomWidth={{ md: '1' }}
          _dark={{ bg: 'coolGray.900', borderColor: 'coolGray.700' }}
          _light={{
            bg: { base: 'primary.900', md: 'white' },
            borderColor: 'coolGray.200',
          }}
        >
          {/* Mobile header */}
          <Hidden from="md">
            <HStack space="2" justifyContent="space-between">
              <Link href="/">
                <Text
                  _light={{ color: 'gray.700' }}
                  _dark={{ color: 'gray.400' }}
                  fontSize={'lg'}
                >
                  Davis Whitehead
                </Text>
              </Link>
              <Text
                _light={{ color: 'gray.700' }}
                _dark={{ color: 'gray.400' }}
                fontSize="lg"
              >
                Hamburger
              </Text>
              <IconButton
                variant="ghost"
                colorScheme="primary"
                // onPress={props.toggleSidebar}
                icon={
                  <Icon
                    size="6"
                    name="menu"
                    as={MaterialIcons}
                    _light={{ color: 'coolGray.800' }}
                    _dark={{ color: 'coolGray.50' }}
                  />
                }
              />
            </HStack>
          </Hidden>
          {/* Desktop header */}
          <Hidden till="md">
            <HStack alignItems="center" justifyContent="space-between">
              <HStack space="8" alignItems="center">
                <IconButton
                  variant="ghost"
                  colorScheme="light"
                  onPress={props.toggleSidebar}
                  icon={
                    <Icon
                      size="6"
                      name="menu-sharp"
                      as={Ionicons}
                      _light={{ color: 'coolGray.800' }}
                      _dark={{ color: 'coolGray.50' }}
                    />
                  }
                />

                {colorMode == 'light' ? (
                  <Image
                    //@ts-ignore
                    h="10"
                    w="56"
                    alt="NativeBase Startup+"
                    resizeMode="contain"
                    src={require('./components/header_logo_light.png')}
                  />
                ) : (
                  <Image
                    //@ts-ignore
                    h="10"
                    w="56"
                    alt="NativeBase Startup+"
                    resizeMode="contain"
                    src={require('./components/header_logo_dark.png')}
                  />
                )}
              </HStack>
              <HStack space="8" alignItems="center">
                <Input
                  px="4"
                  w="30%"
                  size="sm"
                  placeholder="Search"
                  InputLeftElement={
                    <Icon
                      px="2"
                      size="4"
                      name={'search'}
                      as={FontAwesome}
                      _light={{
                        color: 'coolGray.400',
                      }}
                      _dark={{
                        color: 'coolGray.100',
                      }}
                    />
                  }
                />

                <HStack space="5" alignItems="center">
                  <IconButton
                    icon={
                      <Icon
                        size="6"
                        _dark={{ color: 'coolGray.50' }}
                        _light={{ color: 'coolGray.400' }}
                        as={Entypo}
                        name={'share'}
                      />
                    }
                  />
                  <IconButton
                    icon={
                      <Icon
                        size="6"
                        name={'heart'}
                        as={FontAwesome}
                        _dark={{ color: 'coolGray.50' }}
                        _light={{ color: 'coolGray.400' }}
                      />
                    }
                  />
                  <IconButton
                    icon={
                      <Icon
                        size="6"
                        _dark={{ color: 'coolGray.50' }}
                        _light={{ color: 'coolGray.400' }}
                        as={Feather}
                        name={'shopping-cart'}
                      />
                    }
                  />
                </HStack>

                <Menu
                  closeOnSelect={false}
                  w="190"
                  onOpen={() => console.log('opened')}
                  onClose={() => console.log('closed')}
                  trigger={(triggerProps) => {
                    return (
                      <Pressable {...triggerProps}>
                        <Avatar
                          w="8"
                          h="8"
                          borderWidth="2"
                          _dark={{ borderColor: 'primary.700' }}
                          source={{
                            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                          }}
                        />
                      </Pressable>
                    )
                  }}
                >
                  <Menu.Group title="Profile">
                    <Menu.Item>Account</Menu.Item>
                    <Menu.Item>Billing</Menu.Item>
                    <Menu.Item>Security</Menu.Item>
                  </Menu.Group>
                  <Divider mt="3" w="100%" />
                  <Menu.Group title="Shortcuts">
                    <Menu.Item>Settings</Menu.Item>
                    <Menu.Item>Logout</Menu.Item>
                  </Menu.Group>
                </Menu>
              </HStack>
            </HStack>
          </Hidden>
        </Box>
        <VStack alignItems="center" space="md">
          <HStack alignItems="center" space="sm"></HStack>
        </VStack>
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
