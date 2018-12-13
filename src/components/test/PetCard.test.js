import React from 'react';
import PetCard from '../PetCard';
import { shallow } from 'enzyme';

describe('petcard', () => {
  
  it('will match the PetCard Snapshot', () => {
    const wrapper = shallow( <PetCard 
      species="dog" 
      name="stinker"
      id={1}
      about="stinky"
      images={["pic"]}
      deletePetCallback={() => {} }
      selectPetCallback={() => {}}
    /> );

    expect(wrapper).toMatchSnapshot();
  });
});