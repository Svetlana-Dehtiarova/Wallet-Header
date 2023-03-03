import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/contactSlice';

import { selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <div className={css.filter}>
      <label className={css.labelFilter}>
        Filter
        <input
          type="name"
          value={filter}
          onChange={filterChange}
          className={css.filterInput}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};
