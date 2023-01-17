import React from "react";
import { HStack, Link } from "native-base";
import HoverStyle from "./HoverStyle";
import routes from "../lib/routes";

const list = [routes.ABOUT, routes.WORK, routes.WRITING];

export default function Header() {
  return (
    <HStack alignItems="center" space={10} justifyContent="flex-start">
      <HoverStyle>
        <Link
          _text={{
            fontSize: "lg",
          }}
          isUnderlined={false}
          href={routes.HOME.path}
        >
          {routes.HOME.title}
        </Link>
      </HoverStyle>
      <HStack alignItems="flex-start" space={5}>
        {list.map((item, idx) => {
          return (
            <HoverStyle key={idx}>
              <Link isUnderlined={false} href={item.path}>
                {item.title}
              </Link>
            </HoverStyle>
          );
        })}
      </HStack>
    </HStack>
  );
}
