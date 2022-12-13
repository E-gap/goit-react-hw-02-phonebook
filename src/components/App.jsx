import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  formHandlerSubmit = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          //display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
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
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
