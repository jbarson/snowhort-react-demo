import React, { Component } from 'react'

export class FormWithState extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    submitEnabled: true
  }
  updateEmail = event => {
    this.setState({
      email: event.target.value
    }, this.checkSubmitEnabled());
  };
  updatePassword = event => {
    this.setState({
      password: event.target.value
    }, this.checkSubmitEnabled());
  };
  updateConfirmPassword = event => {
    this.setState({
      confirmPassword: event.target.value
    },
      () => {
        if (this.state.password !== this.state.confirmPassword) {
          console.log("Passwords don't match");
        }
        this.checkSubmitEnabled();
      }
    )
  };
  checkSubmitEnabled = () => {
    let isEnabled = false;
    if ((this.state.email !== '' &&
      this.state.password !== '' &&
      this.state.confirmPassword !== '' &&
      this.state.password === this.state.confirmPassword)
    ) {
      isEnabled = true;
    }
    this.setState({
      submitEnabled: isEnabled
    });
  }
  handleClick = () => {
    console.log('signed up!');
  }

  render() {
    return (
      <form>
        <h2>Form with State</h2>
        <div>
          Email:{" "}
          <input
            type="text"
            name="email"
            onChange={this.updateEmail}
            value={this.state.email}
          />
          <div>
            Password:{" "}
            <input
              type="password"
              name="password"
              onChange={this.updatePassword}
              value={this.state.password}
            />
          </div>
          <div>
            Confirm Password:{" "}
            <input
              type="password"
              name="confirmPassword"
              onChange={this.updateConfirmPassword}
              value={this.state.confirmPassword}
            />
          </div>
          <button type="button" onClick={this.handleClick} disabled={!this.state.submitEnabled}>
            Sign Up
          </button>
        </div>
      </form>
    )
  }
}

export default FormWithState
