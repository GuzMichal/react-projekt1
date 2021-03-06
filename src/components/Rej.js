import React, { useState } from "react";
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

const RejDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 70vw;
  height: 100%;
`;

const Formularz = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  align-items: center;
  margin: auto;
`;

const STextField = styled(TextField)`
  && {
    margin: 2px;
  }
`;

const SButton = styled(Button)`
  && {
    margin: 2px;
  }
`;

function Rej() {
  const [nameReg, setNameReg] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const addUser = () => {
    const newUser = {
      name: nameReg,
      lastName: lastName,
      email: email,
      password: pass,
    };
    axios.post("http://localhost:3000/users", newUser);
  };

  return (
    <Background>
      <RejDiv>
        <h1>Rejestracja </h1>
        <form>
          <h1>Zarejestruj się już dziś !</h1>
          <Formularz>
            <STextField
              variant="outlined"
              placeholder="Imię"
              color="primary"
              size="small"
              onChange={(e) => setNameReg(e.target.value)}
            />
            <STextField
              variant="outlined"
              placeholder="Nazwisko"
              color="primary"
              size="small"
              onChange={(e) => setLastName(e.target.value)}
            />
            <STextField
              type="email"
              variant="outlined"
              placeholder="E-mail"
              color="primary"
              size="small"
              onChange={(e) => setEmail(e.target.value)}
            />
            <STextField
              type="password"
              variant="outlined"
              placeholder="Hasło"
              color="primary"
              size="small"
              onChange={(e) => setPass(e.target.value)}
            />
            <SButton
              variant="contained"
              color="primary"
              size="large"
              onClick={addUser}
            >
              Zarejestruj
            </SButton>
          </Formularz>
        </form>
      </RejDiv>
    </Background>
  );
}

export default Rej;
