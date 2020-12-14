import React from 'react'
import { Redirect } from 'react-router-dom';

function StudentProfile({ students, match }) {
  const student = students.find(person => person.id === Number(match.params.studentId))
  if (!student) { return <Redirect to="/" /> }
  console.log(student)
  return (
    <div>
      <h2>{student.name}'s Profile</h2>
    </div>
  )
}

export default StudentProfile
