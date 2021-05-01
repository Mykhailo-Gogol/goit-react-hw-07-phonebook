import { filter_input } from './Filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';

// Material
import Input from '@material-ui/core/Input';

const Filter = () => {
  const filter = useSelector(phonebookSelectors.filterSelector);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    return dispatch(phonebookActions.onChangeFilter(event.target.value));
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
