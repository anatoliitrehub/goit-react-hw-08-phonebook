// import { useState } from 'react';
// import sid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css'
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { fetchAll } from 'redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const {isLoading,error} = useSelector(state=>state.contacts);

  useEffect(()=>{
    dispatch(fetchAll())
  },[dispatch]);

   return (
    <main className={styles.main}>
      <h1>Phonebook</h1>
      <ContactForm  />

      <h2>Contacts</h2>
      <Filter />
      <ContactList   />
      {isLoading&& !error && <p>Contacts loading..</p>}
      {error&& <p>{error}</p>}

    </main>
  );
};
