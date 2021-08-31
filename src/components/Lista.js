import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListaPostaci from "./ListaPostaci";
import Filtry from "./Filtry";

function Lista() {
  const [postaci, setPostaci] = useState(null);
  const [filtr, setFiltr] = useState("wszystkie");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((result) => setPostaci(result.data));
  }, []);

  if (!postaci) {
    return <div>Brak danych z Backendu</div>;
  }
  console.log(postaci.results, "postaci");

  return (
    <div>
      <h1>Lista {postaci.info.count} postaci z serialu Rick & Morty</h1>
      <Filtry filtr={filtr} setFiltr={setFiltr} />
      <ListaPostaci postaci={postaci} />
    </div>
  );
}

export default Lista;
