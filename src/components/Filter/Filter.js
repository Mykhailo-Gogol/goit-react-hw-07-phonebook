import { filter_input } from './Filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { onChangeFilter } from '../../redux/phonebook/actions';
import { filterSelector } from '../../redux/phonebook/selectors';

// Material
import Input from '@material-ui/core/Input';

const Filter = () => {
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    return dispatch(onChangeFilter(event.target.value));
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Search contact"
        name="filter"
        value={filter}
        onChange={handleInputChange}
        className={filter_input}
      />
    </div>
  );
};

export default Filter;
