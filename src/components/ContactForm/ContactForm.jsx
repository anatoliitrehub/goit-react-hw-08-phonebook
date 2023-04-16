import { useState } from 'react';
import st from './Contactform.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
// import { addUser } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const ContactForm = () => {
 const dispatch = useDispatch();
 const {items,isLoading, error} = useSelector(state=>state.contacts)

  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')

  const handleAddUser = e => {
    e.preventDefault();
    if (items.find(el => el.name.toLowerCase() === name.toLowerCase())||
    items.find(el => el.phone === phone)) {
      Notify.failure(`${name} or ${phone} is already in contacts`);
      return;
    }
    // addUser({name,number});
    dispatch(addContact({name,phone}));
    !error&&!isLoading&&
    Notify.success(`Contact ${name} has been added`);
    if(error){
      Notify.failure(`${error}!`);
      return;};

    e.target.reset()
    setName('');
    setPhone('')
  };

  
    return (
      <form action="#" onSubmit={handleAddUser} className={st.form}>
        <label htmlFor="" className={st.labelName}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className={st.name}
            value={name}
            onChange={e=>setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="" className={st.labelNumber}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            className={st.number}
            value={phone}
            onChange={e=>setPhone(e.target.value)}
            required
          />
        </label>
        <button className={st.addContact}>Add contact</button>
      </form>
    );
  }

ContactForm.propTypes = {
  items: PropTypes.array,
  error:PropTypes.string,
  isLoading:PropTypes.bool,
    filter: PropTypes.string,
    addContact: PropTypes.func,
}