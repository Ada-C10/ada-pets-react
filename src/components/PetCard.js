import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';


const PetCard = (props) => {
  const { id, name, species, about, location } = props.pet;
  return (
    <div>

      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{species}</li>
        <li>{about}</li>
      </ul>
    </div>
  );
};

export default PetCard;
