import styled from "styled-components";
import Profile from "./components/Profile";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #E5E5E5;
`

function App() {
  return (
    <AppContainer>
      <Profile />
    </AppContainer>
  );
}

export default App;
