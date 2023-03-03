import { useEffect } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';

import css from 'pages/Pages.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPage}>
      <h1 className={css.titleContacts}>Contacts</h1>
      <div className={css.contactsWrap}>
        <ContactForm />
        {error && <h2 className={css.subTitle}>Error...</h2>}
        {isLoading && <Loader />}
        {contacts.length > 0 ? (
          <div className={css.contactsItem}>
            <Filter name="filter" />
            <ContactList />
          </div>
        ) : (
          <h2 className={css.subTitle}>You have not added contacts yet...</h2>
        )}
      </div>
    </div>
  );
};
export default Contacts;
