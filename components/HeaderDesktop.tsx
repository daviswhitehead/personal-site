import React from "react";
import { HStack, Link } from "native-base";
import HoverStyle from "./HoverStyle";
import routes from "../lib/routes";
import LinkWithIcon from "./LinkWithIcon";
import { composeAction, trackEvent } from "../lib/gtag";
import { categories, actions, objects } from "../lib/analyticsDefinitions";

const list = [
  routes.ABOUT,
  routes.PRODUCTS,
  routes.WRITING,
  routes.COLLABORATE,
];

interface Props {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

export default function Header(props: Props) {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <HStack alignItems="center" space={10} justifyContent="flex-start">
        <HoverStyle>
          <Link
            _text={{
              fontSize: "lg",
              fontFamily: "body",
              fontWeight: "300",
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
                <Link
                  isUnderlined={false}
                  href={item.path}
                  _text={{
                    fontSize: "md",
                    fontFamily: "body",
                    fontWeight: "300",
                  }}
                >
                  {item.title}
                </Link>
              </HoverStyle>
            );
          })}
        </HStack>
      </HStack>
      <LinkWithIcon
        onPress={() => {
          trackEvent({
            action: composeAction(actions.PRESS, objects.SUBSCRIBE_LINK),
            category: categories.HEADER,
            label: "Subscribe",
          });
          props.setModalVisible(!props.modalVisible);
        }}
        copy="Subscribe"
        noIcon
      />
    </HStack>
  );
}
