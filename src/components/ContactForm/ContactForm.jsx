import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
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

  handlerSubmit = event => {
    event.preventDefault();

    const array = this.props.contacts.filter(
      contact => contact.name === this.state.name
    );
    if (array.length > 0) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.onSubmit(this.state);
      this.reset();
    }
  };

  render() {
    return (
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
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactForm;
