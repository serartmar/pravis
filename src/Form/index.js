import React from 'react';
import './main.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-wrapper" >
        <form className='form' onSubmit={this.handleSubmit}>
          <input className="name-input" type="text" value={this.state.name} placeholder="Ваше ім'я" onChange={this.handleNameChange} />
          <input className="phone-input" type="tel" value={this.state.phone} placeholder="Ваш номер телефону" onChange={this.handlePhoneChange} />
          <input className="submit-button"  type="submit" value="Надіслати" />
        </form>
      </div>
    );
  }
}

export default Form;