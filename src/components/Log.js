import React, { useState, useEffect } from "react";
import axios from "axios";
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

const LogDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: white;
  width: 70vw;
  height: 100%;
`;

const Logowanie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Log() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((result) => {
      console.log("result", result.data);
      setUsers(result.data);
    });
  }, []);

  return (
    <Background>
      <LogDiv>
        <h1>Logowanie</h1>
        <Logowanie>
          <h1>Zaloguj się do swojego konta</h1>
          <TextField
            type="email"
            variant="outlined"
            placeholder="Wpisz e-mail"
            color="primary"
            size="small"
          />
          <TextField
            type="password"
            variant="outlined"
            placeholder="Wpisz hasło"
            color="primary"
            size="small"
          />
          <Button variant="contained" color="primary" size="large">
            Zaloguj się
          </Button>
        </Logowanie>
      </LogDiv>
    </Background>
  );
}

export default Log;
