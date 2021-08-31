import React from "react";
import styled from "styled-components";

const Karta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: blanchedalmond;
  box-shadow: 0 0 10px rgba(15, 15, 15, 0.5);
  align-items: center;
  margin: 20px 20px;
`;
const Img = styled.img`
  max-width: 50%;
  max-height: 33vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  min-height: 33vh;
  justify-content: center;
`;

const CharacterName = styled.h3`
  width: 10vw;
  margin: 5px 0;
`;

const Paragraph = styled.p`
  margin: 5px 0;
`;

function KartaPostaci({ name, image, species, status, gender }) {
  return (
    <Karta data-name={name}>
      <Img src={image} alt={name} />
      <Container>
        <CharacterName>{name}</CharacterName>
        <Paragraph>{species}</Paragraph>
        <Paragraph>{status}</Paragraph>
        <Paragraph>{gender}</Paragraph>
      </Container>
    </Karta>
  );
}

export default KartaPostaci;
