import { Routes, Route} from "react-router-dom";
import Profile from "./components/Profile";
import Planning from "./views/Planning";
import Statistics from "./views/Statistics";
import MyDay from "./views/MyDay";
import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #E5E5E5;
`

function App() {
  return (
    <AppContainer>
      <Profile />
      <Routes>
        <Route path="/" element={<Planning />}></Route>
        <Route path="/Planning" element={<Planning />} />
        <Route path="/MyDay" element={<MyDay />} />
        <Route path="/Statistics" element={<Statistics />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
