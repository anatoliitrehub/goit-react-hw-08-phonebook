import { useState } from 'react';
import st from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/operations';
// import { addUser } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import { Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user.user);
  const { error, isLoading } = useSelector(state => state.user);
  //  const {error,isLoading} = useSelector(state=>state)

  // console.log('error,isloading', error, isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log(email,password)

  const handleLoginUser = e => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
    setTimeout(() => {
      !error &&
        !isLoading &&
        Notify.success(`Hallo, ${name}! You has loginned`);
      if (error) {
        Notify.failure(`${error}!`);
        return;
      }
    }, 1000);
  };

  return (
    <>
      <form action="#" onSubmit={handleLoginUser} className={st.form}>
        <label htmlFor="" className={st.labelName}>
          E-mail
          <input
            type="email"
            name="email"
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            title="E-mail may contain only letters and @. For example example@mail.com"
            className={st.name}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="" className={st.labelNumber}>
          Password
          <input
            type="password"
            name="password"
            // pattern="d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Pass must be digits and can contain spaces, dashes, parentheses and can start with +"
            className={st.number}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>

        <Button
          variant="contained"
          onClick={handleLoginUser}
          startIcon={<Icon sx={{ color: green[500] }}></Icon>}
        >
          Login
        </Button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  items: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  filter: PropTypes.string,
  addContact: PropTypes.func,
};
