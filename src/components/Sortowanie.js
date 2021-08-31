import React, { useState } from "react";

function Sortowanie({ kierunek, pole }) {
  const onChangeHandler = (event) => {
    setFiltr(event.target.value);
  };

  const filters = ["wszystkie", "alive", "dead", "unknown"];

  return (
    <>
      <div>Pokaż postacie: {filtr}</div>
      <select onChange={onChangeHandler}>
        {filters.map((item) => (
          <option selected={filtr === item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
export default Sortowanie;
