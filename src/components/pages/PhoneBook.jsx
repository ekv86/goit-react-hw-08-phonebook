import { ContactsList } from 'components/PhoneBook/ConactsList';
import { Filter } from 'components/PhoneBook/Filter';
import { Form } from 'components/PhoneBook/Form';
import { getContacts } from 'components/redux/selectors';
import { fetchTContacts } from 'components/redux/thunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchTContacts());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Phonebook
      </h1>
      <div
        style={{
          padding: '10px 15px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Form />
        <div style={{ marginLeft: '100px', marginRight: '200px' }}>
          <h3>Search</h3>
          <Filter />
        </div>

        {isLoading && !error && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        <ContactsList />
      </div>
    </>
  );
};

export default PhoneBook;
