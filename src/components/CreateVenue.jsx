import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { apiUrl } from '../api/constants';
import { Card, CheckboxGroup, CheckboxLabel, FormGroup, Input, Label, SubmitButton, TextArea } from '../styledComponents/Form';

const initialVenueState = {
  name: '',
  description: '',
  media: [],
  price: 0,
  maxGuests: 0,
  rating: 0,
  meta: {
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  },
  location: {
    address: '',
    city: '',
    country: '',
  },
};
  
const VenueCreationForm = ({ onSubmitVenue }) => {
  const [newVenue, setNewVenue] = useState(initialVenueState);

  const handleVenueInputChange = (field, value) => {
    if (field === 'price' || field === 'maxGuests') {
      value = isNaN(value) ? 0 : value;
    }
    setNewVenue((prevVenue) => ({
      ...prevVenue,
      [field]: value,
    }));
  };

  VenueCreationForm.propTypes = {
    onSubmitVenue: PropTypes.func.isRequired,
  };

  const handleCheckboxChange = (field) => {
    setNewVenue((prevVenue) => ({
      ...prevVenue,
      meta: {
        ...prevVenue.meta,
        [field]: !prevVenue.meta[field],
      },
    }));
  };

  const handleSubmitVenue = async (event) => {
    event.preventDefault();
    try {
      const createURL = `${apiUrl}/holidaze/venues`;
      const token = localStorage.getItem('token');
      const response = await fetch(createURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newVenue),
      });
      
      if (response.ok) {
        const createdVenue = await response.json();
        // onSubmitVenue(createdVenue);
        setNewVenue(initialVenueState);
      } else {
        console.error('Failed to create venue');
      }
    } catch (error) {
      console.error('Error creating venue:', error);
    }
  };
 
  return (
    <Card>
    <form onSubmit={handleSubmitVenue}>

      <h2>Create a New Venue</h2>
      
      <FormGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          value={newVenue.name}
          onChange={(e) => handleVenueInputChange('name', e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Description:</Label>
        <TextArea
          value={newVenue.description}
          onChange={(e) => handleVenueInputChange('description', e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Media (comma-separated URLs):</Label>
        <Input
          type="text"
          value={newVenue.media.join(', ')} // Convert array to comma-separated string
          onChange={(e) => handleVenueInputChange('media', e.target.value.split(', ').filter(url => url.trim() !== ''))}
        />
      </FormGroup>
      <FormGroup>
        <Label>Price:</Label>
        <Input
          type="number"
          value={newVenue.price}
          onChange={(e) => {
            const val = parseFloat(e.target.value);
            handleVenueInputChange('price', isNaN(val) ? 0 : val);
          }}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Max Guests:</Label>
        <Input
          type="number"
          value={newVenue.maxGuests}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            handleVenueInputChange('maxGuests', isNaN(val) ? 0 : val);
          }}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Address:</Label>
        <Input
          type="text"
          value={newVenue.location.address}
          onChange={(e) => handleVenueInputChange('location', { ...newVenue.location, address: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label>City:</Label>
        <Input
          type="text"
          value={newVenue.location.city}
          onChange={(e) => handleVenueInputChange('location', { ...newVenue.location, city: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label>Country:</Label>
        <Input
          type="text"
          value={newVenue.location.country}
          onChange={(e) => handleVenueInputChange('location', { ...newVenue.location, country: e.target.value })}
        />
      </FormGroup>

      <FormGroup>
        <CheckboxGroup>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={newVenue.meta.wifi}
              onChange={() => handleCheckboxChange('wifi')}
            />
            WiFi
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={newVenue.meta.parking}
              onChange={() => handleCheckboxChange('parking')}
            />
            Parking
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={newVenue.meta.breakfast}
              onChange={() => handleCheckboxChange('breakfast')}
            />
            Breakfast
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={newVenue.meta.pets}
              onChange={() => handleCheckboxChange('pets')}
            />
            Pets
          </CheckboxLabel>

        </CheckboxGroup>
      </FormGroup>
      
      <FormGroup>
        <SubmitButton type="submit">Create Venue</SubmitButton>
      </FormGroup>
    
    </form>
    </Card>
  );

};
export default VenueCreationForm;
