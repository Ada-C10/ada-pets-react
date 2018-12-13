import React from 'react';
import PetCard from './PetCard';
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
        pets: [response.data[0]],
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
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
        {petList}
      </div>
    )
  }
}


export default PetList;
