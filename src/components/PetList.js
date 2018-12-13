import React from 'react';
import PetCard from './PetCard';
import NewPetForm from './NewPetForm';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';


class PetList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      pets: [],
    }
  }

  componentDidMount() {
    console.log("The component did in fact mount");
    const GET_ALL_PETS_URL = "https://petdibs.herokuapp.com/pets";

    axios.get(GET_ALL_PETS_URL)
    .then((response) => {
      this.setState({
        pets: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  addPet = (petData) => {
    console.log("Trying to add pet in the PetList component");
    console.log(petData, "petData");
    axios.post('https://petdibs.herokuapp.com/pets', petData)
      .then((response) => {
        // What should we do when we know the post request worked?
        console.log('we definitely have a new pet!', petData);

        const updatedPetList = [ ...this.state.pets, petData]

        this.setState({
          pets: updatedPetList,
        })
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
      });

  }

  render() {
    const petList = this.state.pets.map((pet) => {

      const formattedPet = {
        id: pet.id,
        name: pet.name,
        species: pet.breed,
        about: pet.owner,

      }
      return <PetCard key={pet.id}
               pet={formattedPet} />
    });

    return (
      <div>

        <section>
          <NewPetForm
            addPetCallback={ this.addPet }
            />
        </section>

        <section>
          {petList}
        </section>
      </div>
    )
  }
}


export default PetList;
