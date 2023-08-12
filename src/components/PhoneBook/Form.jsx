import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'components/redux/selectors';
import { addContacts } from 'components/redux/thunk';
import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';

export function Form() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
  const data = {};

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    data.name = form.elements.name.value;
    data.number = form.elements.number.value;
    const repeatContact = contacts.filter(el => el.name === data.name);
    repeatContact.length > 0
      ? alert(`${data.name} is already in contacts`)
      : dispatch(addContacts(data));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>New contact</h3>
      <FormControl sx={{ display: 'block', marginBottom: 3 }}>
        <InputLabel htmlFor="component-name">Name</InputLabel>
        <OutlinedInput
          id="component-name"
          label="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormControl>
      <FormControl sx={{ display: 'block', marginBottom: 3 }}>
        <InputLabel htmlFor="component-number">Number</InputLabel>
        <OutlinedInput
          id="component-number"
          label="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormControl>
      <Button type="submit">Add contact</Button>
    </form>
  );
}
