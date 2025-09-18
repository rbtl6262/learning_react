import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background-color: ${(props) => props.color};
`;

// Reusable Box component
function Box({ color, text }) {
  return (
    <StyledBox color={color}>
      <p>{text}</p>
    </StyledBox>
  );
}

// App component
function App() {
  return (
    <Container>
      <Box color="#ff6b6b" text="Box 1" />
      <Box color="#4ecdc4" text="Box 2" />
      <Box color="#45b7d1" text="Box 3" />
    </Container>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
