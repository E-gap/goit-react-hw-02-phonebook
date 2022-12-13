import React from 'react';
import { v4 as uuidv4 } from 'uuid';
//import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
//import Statistics from './Statistics/Statistics.jsx';
//import Section from './Section/Section.jsx';
//import Notification from './Notification/Notification.jsx';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handlerChangeName = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handlerChangeNumber = event => {
    this.setState({
      number: event.target.value,
    });
  };

  handlerChangeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handlerSubmit = event => {
    event.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });

    this.reset();
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
        <form onSubmit={this.handlerSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handlerChangeName}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handlerChangeNumber}
            />
          </label>

          <button type="Submit">Add contact</button>
        </form>
        <p>Contacts</p>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handlerChangeFilter}
          ></input>
        </label>
        <ul>
          {this.state.contacts.map(contact => {
            return (
              <li key={uuidv4()}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
