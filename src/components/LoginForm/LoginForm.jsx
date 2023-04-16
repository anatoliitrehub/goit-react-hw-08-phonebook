import { useState } from 'react';
import st from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser,loginUser } from 'redux/operations';
// import { addUser } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const LoginForm = () => {
 const dispatch = useDispatch();
//  const {name,password} = useSelector(state=>state.user.user);
 const {error,isLoading} = useSelector(state=>state.user);
//  const {error,isLoading} = useSelector(state=>state)

console.log(error,isLoading)

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [login,setLogin] = useState(true)
  console.log(name,email,password)

  const handleRegisterUser = e => {
    e.preventDefault();
    // if (items.find(el => el.name.toLowerCase() === name.toLowerCase())) {
    //   Notify.failure(`${name} is already in contacts`);
    //   return;
    // }
    // addUser({name,number});
    dispatch(registerUser({name,email,password}));
    !error&&!isLoading&&
    Notify.success(`Hallo, ${name}! You has registered`);
    if(error){
      Notify.failure(`${error}!`);
      return;};

    // e.target.reset()
    // setName('');
    // setEmail('');
    // setPassword('')
  };

  const handleLoginUser = e => {
    e.preventDefault();
    // if (items.find(el => el.name.toLowerCase() === name.toLowerCase())) {
    //   Notify.failure(`${name} is already in contacts`);
    //   return;
    // }
    // addUser({name,number});
    dispatch(loginUser({email,password}));
    !error&&!isLoading&&
    Notify.success(`Hallo, ${name}! You has registered`);
    if(error){
      Notify.failure(`${error}!`);
      return;};

    // e.target.reset()
    // setName('');
    // setEmail('');
    // setPassword('')
  };

  
    return (
        <>
      {!login&&(<form action="#" onSubmit={handleRegisterUser} className={st.form}>
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
        <label htmlFor="" className={st.labelName}>
          E-mail
          <input
            type="email"
            name="email"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="E-mail may contain only letters, apostrophe, dash and spaces. For example example@e.mail.com"
            className={st.name}
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="" className={st.labelNumber}>
          Password
          <input
            type="text"
            name="password"
            // pattern="d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Pass must be digits and can contain spaces, dashes, parentheses and can start with +"
            className={st.number}
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
          />
        </label>
        <button className={st.addContact}>Register</button>
      </form>)}

      {login&&(<form action="#" onSubmit={handleLoginUser} className={st.form}>
        
        <label htmlFor="" className={st.labelName}>
          E-mail
          <input
            type="email"
            name="email"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="E-mail may contain only letters, apostrophe, dash and spaces. For example example@e.mail.com"
            className={st.name}
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="" className={st.labelNumber}>
          Password
          <input
            type="text"
            name="password"
            // pattern="d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Pass must be digits and can contain spaces, dashes, parentheses and can start with +"
            className={st.number}
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
          />
        </label>
        <button className={st.addContact}>Login</button>
      </form>)}
      </>
    );
  }

LoginForm.propTypes = {
  items: PropTypes.array,
  error:PropTypes.string,
  isLoading:PropTypes.bool,
    filter: PropTypes.string,
    addContact: PropTypes.func,
}