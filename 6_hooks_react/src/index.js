import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background-color: ${(props) => props.color};
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;

// Reusable Button component with local state
function CounterButton({ color, children }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      console.log("Count is 10");
    }
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <StyledButton color={color} onClick={handleClick}>
      {children}: {count}
    </StyledButton>
  );
}

// App component
function App() {
  return (
    <Container>
      <CounterButton color="#ff6b6b">Button 1</CounterButton>
      <CounterButton color="#4ecdc4">Button 2</CounterButton>
      <CounterButton color="#45b7d1">Button 3</CounterButton>
    </Container>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
