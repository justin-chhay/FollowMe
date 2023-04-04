import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//lambda syntax
const CreatePlace = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [place, setPlace] = useState({
      location_name: '',
      region: '',
      author: '',
      description: '',
      published_date: '',
      updated_date: '',
      view: '',
      hasWater: false,
      isUrban: false,
      climate: '',
  });

  const onChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/places', place)
      .then((res) => {
        setPlace({
            location_name: '',
            region: '',
            author: '',
            description: '',
            published_date: '',
            updated_date: '',
            view: '',
            hasWater: false,
            isUrban: false,
            climate: '',  
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreatePlace!');
      });
  };

  //add other features here like check boxes or sliders to describe place better

  return (
    <div className='CreatePlace'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Place List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Place</h1>
            <p className='lead text-center'>Create new place</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Location Name'
                  name='title'
                  className='form-control'
                  value={place.location_name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Region'
                  name='region'
                  className='form-control'
                  value={place.region}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={place.author}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this place'
                  name='description'
                  className='form-control'
                  value={place.description}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={place.published_date}
                  onChange={onChange}
                />
              </div>


              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlace;