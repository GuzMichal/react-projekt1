import React, { useState, useEffect } from "react";
import axios from "axios";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListaPostaci from "./ListaPostaci";
import Filtry from "./Filtry";
import Sortowanie from "./Sortowanie";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function Lista() {
  const [postaci, setPostaci] = useState(null);
  const [filtr, setFiltr] = useState("Wszystkie");
  const [page, setPage] = useState(1);
  const [switchState, setSwitchState] = useState(false);

  const prev = () => {
    if (page === 1) {
      alert("Jesteś na pierwszej stronie");
    } else setPage(page - 1);
  };

  const next = () => {
    if (page === 34) {
      alert("Jesteś na ostatniej stronie");
    } else setPage(page + 1);
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((result) => setPostaci(result.data));
  }, [page]);

  if (!postaci) {
    return <div>Brak danych z Backendu</div>;
  }

  return (
    <div>
      <h1>Lista {postaci.info.count} postaci z serialu Rick & Morty</h1>
      <Nav>
        <Filtry filtr={filtr} setFiltr={setFiltr} />
        <Sortowanie switchState={switchState} setterSwitch={setSwitchState} />
        <h3>Jesteś na {page} stronie</h3>
        <Buttons>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ position: "initial", margin: 5 }}
            onClick={prev}
          >
            Poprzednia
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ position: "initial", margin: 5 }}
            onClick={next}
          >
            Następna
          </Button>
        </Buttons>
      </Nav>
      <ListaPostaci
        postaci={postaci}
        filtr={filtr}
        switchState={switchState}
        setterSwitch={setSwitchState}
        page={page}
      />
    </div>
  );
}

export default Lista;
