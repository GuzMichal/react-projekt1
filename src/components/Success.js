import React from "react";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  background-image: url("https://img.wallpapersafari.com/desktop/1920/1080/55/73/ghY4rc.jpg");
  height: 550px;
  justify-content: center;
  align-items: center;
`;

const SuccessDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 70vw;
  height: 100%;
  font-size: 2rem;
  letter-spacing: 5px;
  text-transform: capitalize;
  font-weight: 600;
`;

function Success() {
  return (
    <Background>
      <SuccessDiv>ZALOGOWANO POMYŚLNIE</SuccessDiv>
    </Background>
  );
}

export default Success;
