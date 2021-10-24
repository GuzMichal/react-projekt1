import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  color: black;
`;

const Paragraph = styled.p`
  margin: 5px 0;
  color: black;
`;

function KartaPostaci({ name, image, species, status, gender, id, page }) {
  return (
    <Link to={`${name}/${id}`} style={{ textDecoration: "none" }}>
      <Karta data-name={name}>
        <Img src={image} alt={name} />
        <Container>
          <CharacterName>{name}</CharacterName>
          <Paragraph>{species}</Paragraph>
          <Paragraph>{status}</Paragraph>
          <Paragraph>{gender}</Paragraph>
        </Container>
      </Karta>
    </Link>
  );
}

export default KartaPostaci;
