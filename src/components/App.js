import React, { useState } from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';
import data from '../db.json';


const App = () => {
  const [filters, setFilters] = useState({ type: 'all' });
  const [pets, setPets] = useState([]);

  // Callback to update the selected pet type
  const handleChangeType = (type) => {
    setFilters({ type });
  };

  // Callback to find pets based on the selected type
  const handleFindPetsClick = () => {
    let filteredPets = data.pets;

    if (filters.type !== 'all') {
      filteredPets = filteredPets.filter(pet => pet.type === filters.type);
    }

    setPets(filteredPets);
  };

  // Callback to adopt a pet
  const handleAdoptPet = (id) => {
    setPets(pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    ));
  };

  return (
    <div className='ui container'>
      <header>
        <h1 className='ui dividing header'>React Animal Shelter</h1>
      </header>
      <div className='ui container'>
        <div className='ui grid'>
          <div className='four wide column'>
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick} />
          </div>
          <div className='twelve wide column'>
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;