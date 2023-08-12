import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import { ContactsItem } from './ContactsItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const ContactsList = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div>
      <h3>Contacts</h3>
      <Table sx={{ width: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Number</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleContacts?.map(({ id, name, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
