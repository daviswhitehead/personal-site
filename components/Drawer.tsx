import React from "react";
import { Box, VStack, Link } from "native-base";
import routes from "../lib/routes";
import HoverStyle from "./HoverStyle";
import LinkWithIcon from "./LinkWithIcon";

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

export default function Drawer(props: Props) {
  return (
    <Box w="100%" justifyContent={"flex-start"} alignItems={"flex-start"}>
      <VStack px="4" py="2" alignItems={"flex-start"}>
        {list.map((item, idx) => {
          return (
            <HoverStyle key={idx} py="2">
              <Link
                isUnderlined={false}
                href={item.path}
                _text={{
                  fontSize: "md",
                  fontFamily: "body",
                  fontWeight: "300",
                  textAlign: "left",
                }}
              >
                {item.title}
              </Link>
            </HoverStyle>
          );
        })}
        <LinkWithIcon
          onPress={() => {
            props.setModalVisible(!props.modalVisible);
          }}
          copy="Subscribe"
          noIcon
        />
      </VStack>
    </Box>
  );
}
