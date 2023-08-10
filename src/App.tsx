import { Routes, Route, useLocation } from "react-router-dom";
import Profile from "./components/Profile";
import Planning from "./views/Planning";
import Statistics from "./views/Statistics";
import MyDay from "./views/MyDay";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import MenuIcon from "./images/MenuIcon.png";
import TasksIcon from "./images/Tasks_icon";
import StatisticsIcon from "./images/Statistics_icon";
import PlanningIcon from "./images/Planning_icon";
import {
  AppContainer,
  MobileMenuContainer,
  PageContainer,
  PageTitle,
  PageTitleContainer,
} from "./components/UIKit.styled";
import store from "./Store";

function App() {
  const [currentView, setCurrentView] = useState({
    planning: true,
    myDay: false,
    statistics: false,
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:820px)");

  const pageTitle = (
    <PageTitleContainer>
      {currentView.myDay ? (
        <TasksIcon selected={false} />
      ) : currentView.statistics ? (
        <StatisticsIcon selected={false} />
      ) : (
        <PlanningIcon selected={false} />
      )}
      <PageTitle>
        {currentView.myDay
          ? "Tasks for Today"
          : currentView.statistics
          ? "Statistics"
          : "Planning"}
      </PageTitle>
    </PageTitleContainer>
  );

  function toggleMenu() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  useEffect(() => {
    if (location.pathname === "/MyDay") {
      setCurrentView({
        planning: false,
        myDay: true,
        statistics: false,
      });
    } else if (location.pathname === "/Statistics") {
      setCurrentView({
        planning: false,
        myDay: false,
        statistics: true,
      });
    } else {
      setCurrentView({
        planning: true,
        myDay: false,
        statistics: false,
      });
    }
  }, [location]);

  useEffect(() => {
    store.getTasks();
  }, []);

  return (
    <AppContainer>
      <Drawer
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
      </Drawer>
      <Drawer
        variant="permanent"
        open={!isMobile}
        sx={{ display: !isMobile ? "block" : "none", width: "242px" }}
      >
        <Profile
          currentView={currentView}
          isMobile={false}
          toggleMenu={toggleMenu}
        />
      </Drawer>
      <PageContainer isMobile={isMobile}>
        {isMobile ? (
          <MobileMenuContainer>
            <img
              src={MenuIcon}
              alt="menu"
              width={24}
              height={24}
              onClick={toggleMenu}
            />
            {pageTitle}
          </MobileMenuContainer>
        ) : (
          pageTitle
        )}
        <Routes>
          <Route path="/" element={<Planning />}></Route>
          <Route path="/Planning" element={<Planning />} />
          <Route path="/MyDay" element={<MyDay />} />
          <Route path="/Statistics" element={<Statistics />} />
        </Routes>
      </PageContainer>
    </AppContainer>
  );
}

export default App;
