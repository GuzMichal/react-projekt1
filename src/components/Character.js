import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://img.wallpapersafari.com/desktop/1920/1080/55/73/ghY4rc.jpg");
  height: 550px;
  justify-content: center;
  align-items: center;
`;

const CharDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 70vw;
  height: 100%;
`;

const SLink = styled(Link)`
  width: 90%;
  display: flex;
  align-items: flex-start;
  margin: 10px;
`;

const SpecBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

const Spec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

function Character({ match }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const loadInfo = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${match.params.id}`
      );
      setInfo(response.data);
    };
    loadInfo();
  }, [match.params.id]);

  console.log(info);
  console.log(info.origin?.name);

  return (
    <Background>
      <CharDiv data-name={info.name}>
        <SLink
          to={"/lista"}
          style={{
            textDecoration: "none",
          }}
        >
          <Button variant="contained" color="primary" size="large">
            Powrót
          </Button>
        </SLink>
        <img src={info.image} alt={info.name} />
        <h1>{info.name}</h1>
        <SpecBox>
          <Spec>Species: {info.species}</Spec>
          <Spec>Status: {info.status}</Spec>
          <Spec>Gender: {info.gender}</Spec>
          <Spec>Origin: {info.origin?.name}</Spec>
        </SpecBox>
      </CharDiv>
    </Background>
  );
}
export default Character;
