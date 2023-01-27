import React from "react";
import { HStack, IconButton, Icon, Link } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import HoverStyle from "./HoverStyle";
import routes from "../lib/routes";

interface Props {
  toggleDrawer: () => void;
  isDrawerVisible: boolean;
}

export default function HeaderMobile(props: Props) {
  return (
    <HStack space="2" justifyContent="space-between" alignItems="center">
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
      <HoverStyle>
        <IconButton
          m="0"
          p="1"
          variant="unstyled"
          onPress={props.toggleDrawer}
          _dark={{ _icon: { color: "white" } }}
          icon={
            <Icon
              size="5"
              name={props.isDrawerVisible ? "close" : "menu"}
              as={MaterialIcons}
            />
          }
        />
      </HoverStyle>
    </HStack>
  );
}
