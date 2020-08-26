// Libs
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// Components
import { Box, Flex, Button } from 'rebass';
import { Label, Select } from '@rebass/forms';

// Services
import duckService from '../../services/duck.service';

export default (): JSX.Element => {  
  const [state, setState] = useState({
    location: {
      coords: {
        latitude: 0,
        longitude: 0
      }
    }
  });
  
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async (values: any, e: any) => {
    const newReport = {
      ...values,
      location: state.location.coords
    };

    await duckService.createNewReport(newReport);
    e.target.reset();
    alert('Thanks for encoding');
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        setState((state: any) => {
          return {
            ...state,
            location: position
          };
        });
      });
    }
  }, []);

  return (
    <Box onSubmit={e => e.preventDefault()}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Label>Location</Label>
          {state.location.coords.latitude} - {state.location.coords.longitude}
        </Box>

        <Box pt={2}>
          <Label htmlFor="time">Time</Label>
          <Select
            ref={register}
            id="time"
            name="time"
            defaultValue="1 - 5 min">
            <option>1 - 5 min</option>
            <option>5 - 10 min</option>
            <option>+ 10 min</option>
          </Select>
        </Box>

        <Flex pt={2}>
          <Box mr={2} width={1 / 2}>
            <Label htmlFor="food">Food</Label>
            <Select
              ref={register}
              id="food"
              name="food"
              defaultValue="Bread">
              <option>Bread</option>
              <option>Meet</option>
              <option>Vegetables</option>
            </Select>
          </Box>

          <Box width={1 / 2}>
            <Label htmlFor="quantity">Quantity</Label>
            <Select
              ref={register}
              id="quantity"
              name="quantity"
              defaultValue="100g">
              <option>- 100g</option>
              <option>100g</option>
              <option>500g</option>
              <option>1kg</option>
              <option>+ 1kg</option>
            </Select>
          </Box>
        </Flex>

        <Box pt={2}>
          <Label htmlFor="ducksNumber">Number of ducks</Label>
          <Select
            ref={register}
            id="ducksNumber"
            name="ducksNumber"
            defaultValue="1 - 5 min">
            <option>1 - 5</option>
            <option>5 - 10</option>
            <option>+ 10</option>
          </Select>
        </Box>

        {errors.username && errors.username.message}
        <Box pt={3}>
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Box>
  );
};
