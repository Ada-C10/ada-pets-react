import React from 'react';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


class PetList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      pets: [],
    }
  }

  render() {
    const petList = this.state.pets.map((pet) => {
      return <PetCard key={pet.id}
               {...pet} />
    });

    return (
      <div className="card-group">
        {petList}
      </div>
    )
  }
}


export default PetList;
