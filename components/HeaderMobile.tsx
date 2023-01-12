import React from "react";
import { HStack, IconButton, Icon } from "native-base";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import LinkHover from "./LinkHover";
// import { useRouter } from 'solito/router'
import Routes from "../lib/routes";

export default function HeaderMobile(props: any) {
  // const { push } = useRouter()
  return (
    <HStack space="2" justifyContent="space-between" alignItems="center">
      <LinkHover
        text={Routes.HOME.title}
        _text={{
          fontSize: "lg",
        }}
        // onPress={() => push(Routes.HOME.path)}
      />
      <IconButton
        m="0"
        p="1"
        variant="unstyled"
        onPress={props.toggleDrawer}
        _hover={{
          _icon: {
            color: "orange.300",
          },
        }}
        icon={
          <Icon
            size="5"
            name={props.isDrawerVisible ? "close" : "menu"}
            as={MaterialIcons}
            color="black"
          />
        }
      />
    </HStack>
  );
}
