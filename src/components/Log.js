import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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

function Log() {
  const [email, setEmail] = useState(null);
  const [isEmailInData, setIsEmailInData] = useState(false);
  const [pass, setPass] = useState(null);
  const [isPassCorrect, setIsPassCorrect] = useState(false);

  let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((result) => {
      const isUserInData = result.data
        .map((item) => item.email)
        .includes(email);
      setIsEmailInData(isUserInData);

      const isPassInData = result.data
        .map((item) => item.password)
        .includes(pass);
      setIsPassCorrect(isPassInData);
    });
  }, [email, pass]);

  const handleLogin = () => {
    if (isEmailInData === false)
      return alert(
        "Brak użytkownika o tym adresie E-mail. Zarejestruj się i spróbuj ponownie."
      );
    else if (isEmailInData === true && isPassCorrect === false)
      return alert("Wprowadzono błędne hasło");
    else if (isEmailInData === true && isPassCorrect === true)
      history.push("/success");
  };

  return (
    <Background>
      <LogDiv>
        <h1>Logowanie</h1>
        <Logowanie>
          <h1>Zaloguj się do swojego konta</h1>
          <STextField
            type="email"
            variant="outlined"
            placeholder="Wpisz e-mail"
            color="primary"
            size="small"
            onChange={(e) => setEmail(e.target.value)}
          />
          <STextField
            type="password"
            variant="outlined"
            placeholder="Wpisz hasło"
            color="primary"
            size="small"
            onChange={(e) => setPass(e.target.value)}
          />
          <SButton
            onClick={handleLogin}
            variant="contained"
            color="primary"
            size="large"
          >
            Zaloguj się
          </SButton>
        </Logowanie>
      </LogDiv>
    </Background>
  );
}

export default Log;
