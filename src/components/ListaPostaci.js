import React from "react";
import styled from "styled-components";
import KartaPostaci from "./KartaPostaci";

const ListaKart = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

const Karty = styled.div`
  width: 30vw;
`;

function ListaPostaci({ postaci }) {
  return (
    <ListaKart>
      {postaci.results
        // .filter((item, index) => index < 40)
        .map(({ name, species, image, status, gender }) => (
          <Karty>
            <KartaPostaci
              name={name}
              species={species}
              image={image}
              status={status}
              gender={gender}
            />
          </Karty>
        ))}
    </ListaKart>
  );
}

export default ListaPostaci;
