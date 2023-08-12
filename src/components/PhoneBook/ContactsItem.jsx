import { useDispatch } from 'react-redux';
import { deleteContacts } from 'components/redux/thunk';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Button, TableRow } from '@mui/material';
import PropTypes from 'prop-types';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContacts(id));
  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {name}
      </StyledTableCell>
      <StyledTableCell align="right">{number}</StyledTableCell>
      <StyledTableCell align="center">
        <Button onClick={onDeleteContact}>Delete</Button>
      </StyledTableCell>
    </StyledTableRow>
  )
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
