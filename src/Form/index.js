import React from 'react';
import './main.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    alert(`Ім'я та номер телефону були надіслані: ${this.state.name}, ${this.state.phone}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-wrapper" >
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className={`name-input ${this.props.grey && 'grey'}`}
            type="text"
            value={this.state.name}
            placeholder="Ваше ім'я"
            onChange={this.handleNameChange}
            autoComplete="name"
          />
          <input
            className={`phone-input ${this.props.grey && 'grey'}`}
            type="tel"
            value={this.state.phone}
            placeholder={`Ваш ${this.props.email ? 'E-mail' : 'номер телефону'}`}
            onChange={this.handlePhoneChange}
            autoComplete="tel"
          />
          <input
            className="submit-button"
            type="submit"
            value={`${this.props.email ? 'Отримати' : 'Надіслати'}`}
          />
        </form>
      </div>
    );
  }
}

export default Form;
