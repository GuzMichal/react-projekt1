import React from "react";

function Filtry({ filtr, setFiltr }) {
  const onChangeHandler = (event) => {
    setFiltr(event.target.value);
  };

  const filters = ["Wszystkie", "Alive", "Dead", "unknown"];

  return (
    <>
      <h3>Filtruj postacie: {filtr}</h3>
      <select onChange={onChangeHandler}>
        {filters.map((item) => (
          <option key={item} defaultChecked={filtr === item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}
export default Filtry;
