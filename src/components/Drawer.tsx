import DrawerEl from "@mui/material/Drawer";
import Profile from "./Profile";
import React from "react";
import { ViewType } from "../App";

const Drawer = ({
  isMobile,
  isDrawerOpen,
  toggleMenu,
  currentView,
}: {
  isMobile: boolean;
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
  currentView: ViewType;
}) => {
  return (
    <>
      <DrawerEl
        variant="temporary"
        open={isDrawerOpen}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{ display: isMobile ? "block" : "none" }}
        onClose={toggleMenu}
      >
        <Profile
          currentView={currentView}
          isMobile={true}
          toggleMenu={toggleMenu}
        />
      </DrawerEl>
      <DrawerEl
        variant="permanent"
        open={!isMobile}
        sx={{ display: !isMobile ? "block" : "none", width: "242px" }}
      >
        <Profile
          currentView={currentView}
          isMobile={false}
          toggleMenu={toggleMenu}
        />
      </DrawerEl>
    </>
  );
};

export default Drawer;
