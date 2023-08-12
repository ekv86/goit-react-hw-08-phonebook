import { useDispatch } from 'react-redux';
import { filterContact } from 'components/redux/filterSlice';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    const value = e.target.value;
    const normalizedValue = value.toLowerCase();
    dispatch(filterContact(normalizedValue));
    
  }
  return (
    <FormControl sx={{ display: 'block', marginBottom: 3 }}>
      <InputLabel htmlFor="component-outlined">
        Find contacts by name
      </InputLabel>
      <OutlinedInput
        id="component-outlined"
        label="Find contacts by name"
        onChange={onInputChange}
      />
    </FormControl>
  )};

Filter.propTypes = {
  value: PropTypes.string,
  onChange:PropTypes.func
};
