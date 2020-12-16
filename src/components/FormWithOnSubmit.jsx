import React from 'react'

function FormWithOnSubmit() {
  const signUp = event => {
    event.preventDefault();
    const form = event.target;
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
  }
  return (
    <form onSubmit={signUp}>
      <h2>Form with onSubmit</h2>
      <div>
        Email: <input type="text" name="email" />
      </div>
      <div>
        Password: <input type="password" name="password" />
      </div>
      <div>
        Confirm Password: <input type="password" name="confirmPassword" />
      </div>
      <button>Sign Up</button>
    </form>
  )
}

export default FormWithOnSubmit
