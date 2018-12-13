import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: '',
      location: '',
      name: '',
      species: '',
      image: '',
    };
  }

  resetState = () => {
    this.setState({
      about: '',
      location: '',
      name: '',
      species: '',
      image: '',
    });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    
    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { name, species, image } = this.state;

    console.log(event);
    this.props.addPetCallback(this.state);
    this.resetState();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} name="new-pet-form" id="new-pet-form" className="new-pet-form">
        <div>
          <label className="new-pet-form--label" htmlFor="Name">Name</label>
          <input name="name" placeholder="name" onChange={this.onFormChange} value={this.state.name} />
        </div>
        
        <div>
          <textarea className="new-pet-form--about" name="about" onChange={this.onFormChange} value={this.state.about}></textarea>
        </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
