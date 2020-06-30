import React from 'react';
import PropTypes from 'prop-types';

//Styles
import styles from './SearchInput.module';

const SearchInput = ({onChange}) => <input
  className={styles.searchInput}
  onChange={onChange}
  type="text"
  placeholder='search by city name or date in format YYYY-MM-DD' />

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired
};
export default SearchInput;
