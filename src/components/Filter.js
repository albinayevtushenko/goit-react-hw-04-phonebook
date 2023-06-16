import PropTypes from 'prop-types';
import { Input } from './FormStyle.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contact by name {}
        <Input type="text" name="filter" onChange={onChange} value={value} />
      </label>
    </>
  );
};

Filter.filter = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
