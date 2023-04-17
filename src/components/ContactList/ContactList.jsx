import { useDispatch, useSelector } from 'react-redux';
import st from './Contactlist.module.css';
import PropTypes from 'prop-types';
// import { removeUser } from 'redux/contactsSlice';
import { deleteContact } from 'redux/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = () => {
  const { items, error, isLoading } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handlerRemove = id => {
    dispatch(deleteContact(id));
    setTimeout(
      () => !error && !isLoading && Notify.success('Contact has been removed'),
      500
    );

    error && Notify.failure(`${error}!`);
  };

  return (
    <>
      <ol className={st.list}>
        {items &&
          items
            .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
            .map(el => {
              const { id, name, number: phone } = el;
              return (
                <li className={st.listItem} key={id}>
                  <span className={st.userName}>{name}:</span>
                  <span className={st.userNumber}>{phone}</span>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => handlerRemove(id)}
                  >
                    <DeleteIcon fontSize="inherit"/>
                  </IconButton>
                  {/* <button className={st.btn} onClick={() => handlerRemove(id)}>
                  Delete
                </button> */}
                </li>
              );
            })}
        {items && items.length === 0 && (
          <li className={st.listItem}>There are no contacts</li>
        )}
      </ol>
    </>
  );
};

ContactList.propTypes = {
  items: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactList;
