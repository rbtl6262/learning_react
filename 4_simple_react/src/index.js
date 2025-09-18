import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const RedBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background-color: #ff6b6b;
`;

const BlueBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background-color: #4ecdc4;
`;

const GreenBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background-color: #45b7d1;
`;

// App component
function App() {
  return (
    <Container>
      <RedBox>Box 1</RedBox>
      <BlueBox>Box 2</BlueBox>
      <GreenBox>Box 3</GreenBox>
    </Container>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
