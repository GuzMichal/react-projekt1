import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://img.wallpapersafari.com/desktop/1920/1080/55/73/ghY4rc.jpg");
  height: 550px;
  justify-content: center;
  align-items: center;
`;

const LicznikDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: white;
  width: 70vw;
  height: 100%;
`;

const Buttons = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
`;

const Black = styled.h1`
  margin: 10px 0;
  font-size: 3rem;
`;

const Green = styled.h1`
  margin: 10px 0;
  font-size: 3rem;
  color: green;
`;

function Licznik({ defaultValue = 0, step = 1 }) {
  const [value, setValue] = useState(defaultValue);

  const onMinus = () => {
    setValue(value - step);
  };

  const onAdd = () => {
    setValue(value + step);
  };

  const reset = () => {
    setValue(defaultValue);
  };

  return (
    <Background>
      <LicznikDiv>
        <h1>Licznik </h1>
        {value % 5 === 0 && value !== 0 ? (
          <Green>{value}</Green>
        ) : (
          <Black>{value}</Black>
        )}
        <Buttons>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onMinus}
          >
            -
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={reset}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onAdd}
          >
            +
          </Button>
        </Buttons>
      </LicznikDiv>
    </Background>
  );
}

export default Licznik;
