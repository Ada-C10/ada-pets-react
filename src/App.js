import React, { Component } from 'react';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPet: undefined,
    };
  }

  onSelectPet = (petId) => {

    const selectedPet = this.state.petList.find((pet) => {
      return pet.id === petId;
    });
    if (selectedPet) {
      this.setState({
        currentPet: selectedPet,
      });
    }
  }

  render() {
    const { currentPet } = this.state;
    console.log(this.state.petList);

    const details = currentPet ? <PetDetails currentPet={currentPet} /> : '';

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="pet-list">
          <PetList
          />
        </section>
      </main>
    );
  }
}

export default App;
