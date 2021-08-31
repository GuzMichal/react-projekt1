import React from "react";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 1em;
`;

const Opis = styled.p`
  font-size: 0.5em;
`;

function OmnieProps(props) {
  return (
    <div>
      <Name> {props.name} </Name>
      <Opis> {props.info}</Opis>
    </div>
  );
}
export default OmnieProps;
