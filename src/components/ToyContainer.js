import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDeleteToy }) {

  const toyCards = toys.map(toyObj =>
    <ToyCard key={toyObj.id} toy={toyObj} handleDeleteToy={handleDeleteToy} />
  )

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
