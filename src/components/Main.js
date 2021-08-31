import React from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import TimerIcon from "@material-ui/icons/Timer";
import MoneyIcon from "@material-ui/icons/Money";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";

const Body = styled.div``;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://img.wallpapersafari.com/desktop/1920/1080/55/73/ghY4rc.jpg");
  height: 550px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 65px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  justify-content: center;
  align-items: center;
  color: white;
  letter-spacing: 5px;
  margin-bottom: 15px;
`;
const Opis = styled.h3`
  font-family: garamond;
  font-size: 1em;
  text-align: center;
  color: white;
  letter-spacing: 2px;
  margin-bottom: 50px;
`;

const SearchInput = styled.div`
  margin: 10px;
  position: unset;
`;

const SearchButton = styled.div`
  margin: 10px;
  position: unset;
`;

const SearchEngine = styled.div`
  display: flex;
  align-items: center;
`;

const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b0c4de;
  border: 2px solid #1e90ff;
  border-radius: 10px;
  height: 200px;
  width: 28vw;
  margin: 20px;
  box-shadow: 0 0 10px rgba(15, 15, 15, 0.5);
`;

const ContainerTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 3px;
`;

const ContainerDesc = styled.div``;

function Main() {
  return (
    <Body>
      <Background>
        <Title>PIERWSZY PROJEKT REACT</Title>
        <Opis>
          Strona ma pokazać zdobyte umiejętności w tworzeniu stron internetowych
        </Opis>
        <SearchEngine>
          <SearchInput>
            <TextField
              variant="outlined"
              placeholder="Wyszukiwarka"
              color="primary"
              size="small"
              style={{ position: "initial" }}
            />
          </SearchInput>
          <SearchButton>
            <Button
              onClick={() => alert("Błąd")}
              variant="contained"
              color="primary"
              size="large"
              style={{ position: "initial" }}
            >
              Wyszukaj...
            </Button>
          </SearchButton>
        </SearchEngine>
      </Background>
      <MainBox>
        <Link
          to="/lista"
          style={{
            color: "navy",
            textDecoration: "none",
          }}
        >
          <MainContainer>
            <ListAltIcon style={{ fontSize: 100 }} />
            <ContainerTitle>Lista Postaci</ContainerTitle>
            <ContainerDesc>
              Lista postaci z serialu Rick and Morty
            </ContainerDesc>
          </MainContainer>
        </Link>
        <Link
          to="/stoper"
          style={{
            color: "navy",
            textDecoration: "none",
          }}
        >
          <MainContainer>
            <TimerIcon style={{ fontSize: 100 }} />
            <ContainerTitle>Stoper</ContainerTitle>
            <ContainerDesc>Strona z aplikacją Stopera</ContainerDesc>
          </MainContainer>
        </Link>
        <Link
          to="/licznik"
          style={{
            color: "navy",
            textDecoration: "none",
          }}
        >
          <MainContainer>
            <MoneyIcon style={{ fontSize: 100 }} />
            <ContainerTitle>Licznik</ContainerTitle>
            <ContainerDesc>Stona z aplikacją Licznika</ContainerDesc>
          </MainContainer>
        </Link>
        <Link
          to="/rej"
          style={{
            color: "navy",
            textDecoration: "none",
          }}
        >
          <MainContainer>
            <HowToRegIcon style={{ fontSize: 100 }} />
            <ContainerTitle>Rejestracja</ContainerTitle>
            <ContainerDesc>Zarejestruj się juz dziś !</ContainerDesc>
          </MainContainer>
        </Link>
        <Link
          to="/log"
          style={{
            color: "navy",
            textDecoration: "none",
          }}
        >
          <MainContainer>
            <VpnKeyIcon style={{ fontSize: 100 }} />
            <ContainerTitle>Logowanie</ContainerTitle>
            <ContainerDesc>Zaloguj sie do swojego konta</ContainerDesc>
          </MainContainer>
        </Link>
        <Link
          to="/omnie"
          style={{
            color: "navy",
            textDecoration: "none",
          }}
        >
          <MainContainer>
            <InfoIcon style={{ fontSize: 100 }} />
            <ContainerTitle>O mnie</ContainerTitle>
            <ContainerDesc>Informacje o autorze</ContainerDesc>
          </MainContainer>
        </Link>
      </MainBox>
    </Body>
  );
}

export default Main;
