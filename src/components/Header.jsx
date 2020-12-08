import React from 'react'
import Mark from './Mark'

function Header({ cohort, studentAverage }) {
  // console.log(props)
  // const { cohort, studentAverage } = props
  return (
    <div>
      <h1>{cohort} Rules!</h1>
      <h2>The Average is {studentAverage}</h2>
      <Mark thing="inquisitive" />
    </div>
  )
}

export default Header;
