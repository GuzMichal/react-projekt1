import React from "react";
import styled from "styled-components";
import OmnieProps from "./OmnieProps";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://img.wallpapersafari.com/desktop/1920/1080/55/73/ghY4rc.jpg");
  height: 550px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1em;
`;

const Img = styled.img`
  height: 40vh;
  border-radius: 50%;
`;

const OmnieDiv = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 70vw;
  height: 100%;
`;

function Omnie() {
  const name = {
    name: "Michał Guz",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis tellus, accumsan at semper eu, venenatis id velit. Sed porttitor tincidunt nulla, ac hendrerit lectus posuere ac. Ut eleifend, felis at elementum egestas, nunc felis venenatis lectus, ut tincidunt eros purus sed leo. Praesent vel lectus magna.",
  };
  return (
    <Background>
      <OmnieDiv>
        <Title>O mnie </Title>
        <Img
          alt="O mnie"
          src="https://otoklasyki.pl/Upload/posters/xbmw-318i-e30-coupe-1599804913867.jpg.pagespeed.ic.DFjb-qHpHt.webp"
        />
        <OmnieProps name={name.name} info={name.info} />
      </OmnieDiv>
    </Background>
  );
}

export default Omnie;
