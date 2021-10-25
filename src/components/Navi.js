import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 75px;
  background: linear-gradient(45deg, rgb(0, 0, 139), #8080ff);
  z-index: 1;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  list-style: none;
  font-family: "Poppins", sans-serif;
  height: 100%;
`;

const Items = styled.li`
  position: relative;
  margin-right: 35px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  letter-spacing: 0.5px;
  padding: 0 10px;
`;

const Img = styled.img`
  height: 60px;
  margin-left: 50px;
  border-radius: 5%;
`;

function Navi() {
  return (
    <Nav>
      <Link to="/">
        <Img
          alt="Logo"
          src="https://t3.ftcdn.net/jpg/03/69/31/10/360_F_369311059_6MpPoh1HkqIgK6GzMk8Rk7ufZSOQhhad.jpg"
        />
      </Link>
      <List>
        <Link to="/lista" style={{ textDecoration: "none" }}>
          <Items>Lista Postaci</Items>
        </Link>
        <Link to="/stoper" style={{ textDecoration: "none" }}>
          <Items className="items">Stoper</Items>
        </Link>
        <Link to="/licznik" style={{ textDecoration: "none" }}>
          <Items className="items">Licznik</Items>
        </Link>
        <Link to="/rej" style={{ textDecoration: "none" }}>
          <Items className="items">Rejestracja</Items>
        </Link>
        <Link to="/log" style={{ textDecoration: "none" }}>
          <Items className="items">Logowanie</Items>
        </Link>
        <Link to="/omnie" style={{ textDecoration: "none" }}>
          <Items className="items">O mnie</Items>
        </Link>
      </List>
    </Nav>
  );
}

export default Navi;
