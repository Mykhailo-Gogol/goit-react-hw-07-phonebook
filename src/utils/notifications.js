import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const contactDuplicateValidation = name =>
  toast.warn(`${name} is already in contacts!`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const nameInputValidation = () =>
  toast.error(
    'The name can only consist of letters, apostrophes, dashes and spaces.',
    {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    },
  );

export const numberInputValidation = () =>
  toast.error(
    'The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +',
    {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    },
  );

// export const connectionErrorValidation = () =>
//   toast.error('The server is currently disabled', {
//     position: 'top-right',
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
