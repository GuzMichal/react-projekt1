import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://img.wallpapersafari.com/desktop/1920/1080/55/73/ghY4rc.jpg");
  height: 550px;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-evenly;
`;

const Counter = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  letter-spacing: 2px;
  font-size: 3rem;
  font-weight: 800;
`;

const StoperDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: white;
  width: 70vw;
  height: 100%;
`;

const TextFields = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
`;

function Stoper() {
  const [seconds, setSeconds] = useState(0);
  const [value, setValue] = useState();
  const [step, setStep] = useState(1);
  const [stepValue, setStepValue] = useState();
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(
        () => setSeconds((seconds) => seconds + step),
        1000
      );
      return () => clearInterval(id);
    }
  }, [isRunning, seconds, step]);

  const onValue = (e) => {
    setSeconds(Math.floor(value));
  };

  const onStep = (e) => {
    setStep(Math.floor(stepValue));
  };

  return (
    <Background>
      <StoperDiv>
        <h1>Stoper </h1>
        <Counter>{seconds}</Counter>
        <Buttons>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setIsRunning(true)}
          >
            Start
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setIsRunning(false)}
          >
            Stop
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              setIsRunning(false);
              setSeconds(0);
            }}
          >
            Reset
          </Button>
        </Buttons>
        <TextFields>
          <TextField
            variant="outlined"
            placeholder="Wartość startowa"
            color="primary"
            size="small"
            style={{ position: "initial" }}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              onValue();
            }}
          >
            Ustaw
          </Button>
        </TextFields>
        <TextFields>
          <TextField
            variant="outlined"
            placeholder="Zwiększenie licznika"
            color="primary"
            size="small"
            style={{ position: "initial" }}
            onChange={(e) => setStepValue(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              onStep();
            }}
          >
            Ustaw
          </Button>
        </TextFields>
      </StoperDiv>
    </Background>
  );
}

export default Stoper;
