// import st from './ContactsPage.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const ContactPage = () => {
  const { error,token } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch,token]);

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {/* {isLoading && !error && <p>Contacts loading..</p>} */}
      {error && <p>{error}</p>}
    </>
  );
};

export default ContactPage;
