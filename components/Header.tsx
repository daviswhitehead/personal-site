import React from "react";
import { Box, Hidden } from "native-base";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import Drawer from "./Drawer";

interface Props {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

export default function Header(props: Props) {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <Box
      px={{ base: "4", md: "8" }}
      py={{ base: "3", md: "5" }}
      position="sticky"
      top="0"
      _dark={{
        bg: "gray.800",
      }}
      opacity="0.97"
      zIndex={1}
    >
      <Hidden from="md">
        <Box>
          <HeaderMobile
            toggleDrawer={toggleSidebar}
            isDrawerVisible={props.modalVisible ? false : isSidebarVisible}
          />
          {isSidebarVisible && (
            <Drawer
              modalVisible={props.modalVisible}
              setModalVisible={props.setModalVisible}
            />
          )}
        </Box>
      </Hidden>
      <Hidden till="md">
        <HeaderDesktop
          modalVisible={props.modalVisible}
          setModalVisible={props.setModalVisible}
        />
      </Hidden>
    </Box>
  );
}
