import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ filter, contacts }) => {
  return (
    <ul>
      {contacts
        .filter(contact => contact.name.includes(filter))
        .map(contact => {
          return (
            <li key={uuidv4()}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactList;
