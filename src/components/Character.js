import React from "react";
import styled from "styled-components";

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
  font-size: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 70vw;
  height: 100%;
`;

function Character({ name, image, species, status, gender, id, page }) {
  return (
    <Background>
      <CharDiv data-name={name}>
        {console.log({ name })}
        <img src={image} alt={name} />
        <div>!{name}</div>
        <div>!{species}</div>
        <div>!{status}</div>
        <div>!{gender}</div>
      </CharDiv>
    </Background>
  );
}
export default Character;
