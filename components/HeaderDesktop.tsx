import React from "react";
import { HStack } from "native-base";
// import { useRouter } from "solito/router";
import LinkHover from "./LinkHover";
import Routes from "../lib/routes";

const list = [Routes.ABOUT, Routes.WORK, Routes.WRITING];

export default function Header() {
  // const { push } = useRouter();
  return (
    <HStack alignItems="center" space={10} justifyContent="flex-start">
      <LinkHover
        onPress={() => console.log("hello world")}
        text={Routes.HOME.title}
        _text={{ fontSize: "lg" }}
      />
      <HStack alignItems="flex-start" space={5}>
        {list.map((item, idx) => {
          return (
            <LinkHover
              key={idx}
              onPress={() => console.log("hello world")}
              text={item.title}
            />
          );
        })}
      </HStack>
    </HStack>
  );
}
