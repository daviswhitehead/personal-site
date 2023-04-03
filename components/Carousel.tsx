import React, { useEffect, useRef, useState } from "react";
import Swiper from "react-native-web-swiper";
import { Pressable, Center, Progress, Stack } from "native-base";

interface Props {
  children: React.ReactNode;
}

export default function Carousel({ children }: Props) {
  const timeout = 10;
  const counterInit = 0.5;

  const swiperRef = useRef(null);

  const [counter, setCounter] = useState<number>(counterInit);
  const timerRef = useRef<number>(0);

  useEffect(() => {
    if (timerRef.current < 10) {
      // @ts-expect-error can't figure out this ref thing

      timerRef.current =
        counter < timeout &&
        setInterval(() => setCounter((counter) => counter + 0.2), 200);

      return () => {
        clearInterval(timerRef.current);
      };
    } else {
    }
  }, [counter]);

  return (
    // @ts-expect-error don't know what's going on here...
    <Swiper
      ref={swiperRef}
      loop
      // timeout={timeout}
      onIndexChanged={() => {
        setCounter(counterInit);
      }}
      controlsProps={{
        dotsTouchable: true,
        nextPos: false,
        prevPos: false,
        DotComponent: ({ isActive, onPress }) => (
          <Center w="70%">
            <Stack w="100%" mx="2">
              {isActive ? (
                <Pressable flex={1} justifyContent="center" onPress={onPress}>
                  <Progress
                    _dark={{ bg: "gray.500" }}
                    _filledTrack={{
                      _dark: { bg: "orange.400" },
                    }}
                    value={timeout * 100}
                    // value={(counter / timeout) * 100}
                    size="sm"
                  />
                </Pressable>
              ) : (
                <Pressable
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  onPress={onPress}
                >
                  <Progress
                    _dark={{ bg: "gray.500" }}
                    _filledTrack={{
                      _dark: { bg: "orange.400" },
                    }}
                    value={0}
                    size="sm"
                    w={2}
                  />
                </Pressable>
              )}
            </Stack>
          </Center>
        ),
      }}
    >
      {children}
    </Swiper>
  );
}
