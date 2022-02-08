import React from "react";

function ToyCard({ toy, handleDeleteToy }) {
  const { id, name, image, likes } = toy

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button onClick={() => handleDeleteToy(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
