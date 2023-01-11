import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem.jsx';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ filter, filteredContacts, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.name}
          id={contact.name}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
