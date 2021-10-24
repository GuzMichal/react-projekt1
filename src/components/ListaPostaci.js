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

function ListaPostaci({ postaci, filtr, switchState }) {
  return (
    <ListaKart>
      {postaci.results
        .filter((postac) => {
          if (filtr === "Wszystkie") {
            return true;
          }
          return postac.status === filtr;
        })
        .sort((a, b) => {
          return switchState === true
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        })
        .map(({ name, species, image, status, gender, id, page }) => (
          <Karty>
            <KartaPostaci
              name={name}
              species={species}
              image={image}
              status={status}
              gender={gender}
              id={id}
              page={page}
            />
          </Karty>
        ))}
    </ListaKart>
  );
}

export default ListaPostaci;
