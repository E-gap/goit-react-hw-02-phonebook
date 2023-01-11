import React from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter.jsx';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  handlerChangeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = event => {
    const deleteContactId = event.currentTarget.getAttribute('contact');

    const newContacts = this.state.contacts.filter(
      contact => contact.id !== deleteContactId
    );

    this.setState({
      contacts: [...newContacts],
    });
  };

  formHandlerSubmit = data => {
    const array = this.state.contacts.filter(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (array.length > 0) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return { contacts: [data, ...prevState.contacts] };
      });
    }
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          paddingLeft: '50px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formHandlerSubmit} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.handlerChangeFilter}
        />
        <ContactList
          filter={this.state.filter}
          filteredContacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
