import React from 'react'
import { Box, Stack, Text, VStack, Image } from 'native-base'
import LinkHover from './LinkHover'
// import { Link as SolitoLink } from 'solito/link'
import { useRouter } from 'solito/router'
import Card from './Card'

export default function Promoted(props: any) {
  const { push } = useRouter()
  return (
    <Box>
      <Stack
        space={{ base: '5', md: '10' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        px={{ base: '4', md: '8' }}
        py={{ base: '3', md: '5' }}
        alignItems={{ base: 'center', md: 'center' }}
      >
        <VStack flex={1} alignItems={{ base: 'center', md: 'flex-start' }}>
          <Text
            fontFamily="heading"
            fontWeight="200"
            fontSize="3xl"
            textAlign={{ base: 'center', md: 'left' }}
            py={{ base: '3', md: '6' }}
          >
            I’m passionate about creating products people love.
          </Text>
          <Text
            fontFamily="body"
            fontWeight="300"
            fontSize="lg"
            textAlign={{ base: 'center', md: 'left' }}
            py={{ base: '2', md: '4' }}
            lineHeight="lg"
          >
            I love solving a problem so well for someone that they can’t stop
            talking about how great your product is. Products like this come
            from listening to people and acting on their feedback. This doesn’t
            mean building precisely what’s described. It means thoughtfully
            combining a deep understanding of the problem with data revealing
            how people actually behave. It means considering a wide range of
            solutions, then choosing the best one intentionally. And it means
            keeping things simple by staying focused on why people use your
            product.
          </Text>
          <LinkHover
            text={'-> Let’s discuss creating products people love!'}
            _text={{
              fontSize: 'xl',
            }}
            onPress={() => push('mailto:whitehead.davis@gmail.com')}
            py={{ base: '2', md: '4' }}
          />
        </VStack>
        <Card
          image={
            <Image
              source={{
                uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
              }}
              alt="image"
              resizeMode="cover"
            />
          }
          title="Shayr"
          subtitle="A social network for sharing poetry"
          description="Shayr is a social network for sharing poetry. It's a place for poets to share their work and for readers to discover new poets. Shayr is a passion project of mine. I built it to learn more about building a social network and to explore the intersection of poetry and technology."
          meta="React Native, Expo, Firebase, TypeScript"
        />
      </Stack>

      <Text
        fontFamily="heading"
        fontWeight="200"
        fontSize="3xl"
        textAlign={{ base: 'center', md: 'left' }}
      >
        As a <Text>product manager</Text> ...
      </Text>
      <Text>[Product Management] Create products for others</Text>
      <Text>[Product Management] Description...</Text>
      <Text>[Product Creation] Create products that scratch an itch</Text>
      <Text>[Product Creation] Description...</Text>
      <Text>[Writing] Write about pursuing a well-lived life</Text>
      <Text>[Writing] Description...</Text>
      <Text>Carousel of promoted work</Text>
    </Box>
  )
}
