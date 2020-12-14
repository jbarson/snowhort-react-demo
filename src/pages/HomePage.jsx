import React from 'react';
import Nav from '../components/Nav'

function HomePage() {
  document.title = "Home"
  return (
    <div>
      <h1>Home Page</h1>
      <Nav />
    </div>
  )
}

export default HomePage
