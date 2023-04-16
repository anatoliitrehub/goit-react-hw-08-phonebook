import { useDispatch, useSelector } from 'react-redux';
import st from './Filter.module.css';
import PropTypes from 'prop-types';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state=>state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <label className={st.label}>
        Find contacts by name
        <input
          type="text"
          onChange={ev => dispatch(changeFilter(ev.target.value))}
          className={st.wordForSearch}
          value={filter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func,
};

export default Filter;
