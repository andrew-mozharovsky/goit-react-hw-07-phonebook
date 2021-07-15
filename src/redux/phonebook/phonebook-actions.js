import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };
  axios
    .post('/contacts', contact)
    .then(({ data }) =>
      dispatch({ type: 'contact/addContactSuccess', payload: data }),
    )
    .catch(error =>
      dispatch({ type: 'contact/addContactSuccess', paload: error }),
    );
};

// const addContact = createAction('phonebook/add', (name, number) => {
//   return {
//     payload: {
//       name,
//       number,
//     },
//   };
// });

const deleteContact = createAction('phonebook/delete');
const contact_filter = createAction('phonebook/contact_filter');

const actions = {
  addContact,
  deleteContact,
  contact_filter,
};
export default actions;
