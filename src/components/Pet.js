import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { id, name, type, age, weight, gender, isAdopted } = pet;

  const handleAdoptPet = () => {
    onAdoptPet(id);
  };

  return (
    <div className="card" data-testid="pet"
    >
      <div className="content">
        <a className="header">
          {gender === "male" ? "♂" : "♀"} {name}
        </a>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdoptPet}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;