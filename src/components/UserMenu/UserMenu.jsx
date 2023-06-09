import st from './UserMenu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/operations';
import Button from '@mui/material/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.user.user);
  const { token } = useSelector(state => state.user);
  const isAuth = Boolean(token);
  // const {token} = useSelector(state=>state.user)


  return (
    <>
    <div className={st.wrapper}>
      <p className={st.title}>Hello, {email}!</p>
      {isAuth ? (
        <Button variant="contained" onClick={() => dispatch(logoutUser())}>Logout</Button>
      ) : null}
      </div>
    </>
  );
};

export default UserMenu;
