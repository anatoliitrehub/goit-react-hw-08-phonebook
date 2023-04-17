import st from './App.module.css';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import { LoginForm } from '../pages/LoginRegForms/LoginForm';
import { RegisterForm } from 'pages/LoginRegForms/RegisterForm';
import ContactPage from 'pages/ContactsPage/ContactsPage';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import LinearProgress from '@mui/material/LinearProgress';

// const SharedLayout = () => {
//   return (
//     <>
//       <header></header>
//       <Suspense fallback={<CircularProgress />}>
//         <main>
//           <Outlet />
//         </main>
//       </Suspense>
//       <footer></footer>
//     </>
//   );
// };

export const App = () => {
  // const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.contacts);
  const { email } = useSelector(state => state.user.user);
  console.log('isLoading', isLoading);
  const isAuth = Boolean(email !== 'Guest');
  // console.log(isAuth);

  // const LoginForm = lazy(() => import('../pages/LoginRegForms/LoginForm'));
  // const RegisterForm = lazy(() => import('pages/LoginRegForms/RegisterForm'));
  // const ContactPage = lazy(() => import('pages/Contacts/ContactsPage'));

  return (
    <>
      <nav className={st.nav}>
        <UserMenu />
        {!isAuth && (
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            className={st.buttons}
          >
            <NavLink to="/login">
              <Button>Login</Button>
            </NavLink>
            <NavLink to="/register">
              <Button>Register</Button>
            </NavLink>
          </ButtonGroup>
        )}
        {isLoading && <LinearProgress color="success" />}
      </nav>
      <main className={st.main}>
        {isAuth ? (
          <Routes>
            {/* <Route path="/" element={<SharedLayout />}> */}
            {/* <Route index element={<Home />} /> */}
            <Route path="/contacts" element={<ContactPage />} />

            <Route path="*" element={<Navigate to="/contacts" />} />
            {/* </Route> */}
          </Routes>
        ) : (
          <Routes>
            {/* <Route path="/" element={<SharedLayout />}> */}
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />

            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            {/* </Route> */}
          </Routes>
        )}
      </main>
      <footer></footer>
    </>
  );
};
