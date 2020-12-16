import React, { Component } from 'react'

export class FormWithRefs extends Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
  }

  componentDidMount() {
    this.emailRef.current.focus();
  }

  signUp = () => {
    const form = this.formRef.current;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (!email) {
      alert('email required, moron!');
      return;
    };
    if (!password) {
      alert('password required, moron!');
      return;
    };
    if (password !== confirmPassword) {
      alert('passwords must match');
      return;
    };
    console.log('signed up!');
  };
  render() {
    return (
      <form ref={this.formRef}>
        <h2>Form with Refs</h2>
        <div>
          Email:
          <input
            type="text"
            name="email"
            ref={this.emailRef} />
        </div>
        <div>
          Password: <input type="password" name="password" ref={this.passwordRef} />
        </div>
        <div>
          Confirm Password: <input type="password" name="confirmPassword" ref={this.confirmPasswordRef} />
        </div>

        <button type="button" onClick={this.signUp}>
          Sign Up
        </button>
      </form>
    )
  }
}

export default FormWithRefs
