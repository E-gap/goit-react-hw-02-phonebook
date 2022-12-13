import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ filter, contacts, deleteContact }) => {
  return (
    <ul>
      {contacts
        .filter(contact => contact.name.includes(filter))
        .map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                type="button"
                contact={contact.id}
                onClick={deleteContact}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
