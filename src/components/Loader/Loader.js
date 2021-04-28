import Spinner from 'react-loader-spinner';
import { loader } from './Loader.module.scss';

const Loader = () => {
  return (
    <div>
      <Spinner
        type="Circles"
        color="#00BFFF"
        height={150}
        width={150}
        timeout={3000}
        className={loader}
      />
    </div>
  );
};

export default Loader;
