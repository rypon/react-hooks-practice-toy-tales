import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";


//Component hierarchy 
//-App
//   -header
//   -ToyForm
//   -ToyContainer
//      -ToyCard


function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [newToyName, setNewToyName] = useState('')
  const [newToyImage, setNewToyImage] = useState('')



  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(resp => resp.json())
      .then(toyArray => setToys(toyArray))
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(e) {
    e.preventDefault()
    const newToy = {
      name: newToyName,
      image: newToyImage
    }
    const updatedToys = [...toys, newToy]
    setToys(updatedToys)
  }

  function deleteToy(id) {
    const updatedToys = toys.filter(toy => toy.id !== id)
    setToys(updatedToys)
    console.log(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy} setNewToyName={setNewToyName} setNewToyImage={setNewToyImage} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteToy={deleteToy} />
    </>
  );
}

export default App;
