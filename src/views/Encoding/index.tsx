// Libs
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// Components
import { Box, Flex, Button } from 'rebass';
import { Label, Select } from '@rebass/forms';

// Services
import duckService from '../../services/duck.service';

interface Food {
  _id: string;
  title: string;
  type: number;
}
interface Location {
  latitude: number;
  longitude: number;
}
 interface Encoding {
  location: Location;
  foods: Food[];
  isLoading: boolean;
}

export default (): JSX.Element => {
  const [state, setState] = useState<Encoding>({
    location: {
      latitude: 0,
      longitude: 0
    },
    foods: [],
    isLoading: false
  });

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async (values: any, e: any) => {
    setState({...state, isLoading: true});
    const newReport = {
      ...values,
      location: {
        latitude: state.location.latitude,
        longitude: state.location.longitude
      }
    };

    await duckService.createNewReport(newReport);
    e.target.reset();
    setState({...state, isLoading: false});
    alert('Thanks for encoding');
  };

  useEffect(() => {
    duckService.getAll().then(foods => {
      setState(state => {
        return {
          ...state,
          foods
        };
      });
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        setState((state: any) => {
          return {
            ...state,
            location: position.coords
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
          <Box mt={1}>
            🌎 Lat {state.location.latitude} - Lon {state.location.longitude}
          </Box>
        </Box>
        <Flex pt={2}>
          <Box mr={2} width={1 / 2}>
            <Label htmlFor="food">Food</Label>
            <Select
              mt={1}
              ref={register}
              id="food"
              name="food"
              defaultValue="Bread">
              {
                state.foods.map((food, i) => <option key={i} value={food._id}>{food.title}</option>)
              }
            </Select>
          </Box>
          <Box width={1 / 2}>
            <Label htmlFor="quantity">Quantity</Label>
            <Select
              mt={1}
              ref={register}
              id="quantity"
              name="quantity"
              defaultValue="100g">
              {[100, 200, 300, 400, 500].map((n, i) => <option key={i} value={n}>{n}g</option>)}
            </Select>
          </Box>
        </Flex>
        <Box pt={2}>
          <Label htmlFor="duckCount">Number of ducks</Label>
          <Select
            mt={1}
            ref={register}
            id="duckCount"
            name="duckCount"
            defaultValue="5">
            {[...Array(30)].map((_, i) => <option key={i}>{ ++i }</option>)}
          </Select>
        </Box>
        {errors.username && errors.username.message}
        <Box pt={3}>
          <Button width="100%" type="submit" disabled={state.isLoading}>
            {state.isLoading ? 'Sending report...' : 'Submit'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
