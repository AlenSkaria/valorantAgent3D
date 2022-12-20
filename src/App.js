import React from "react";
import "./App.css";

import styled from "styled-components";
import { ValoAgent } from "./components/ValoAgent";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <AppContainer>
      <ValoAgent />
    </AppContainer>
  );
}

export default App;
