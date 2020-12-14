import React from 'react'

function StudentList({ students }) {
  return (
    <div>
      { students.map(student => (
        <p key={student.id}>{student.name}</p>
      ))}
    </div>
  )
}

export default StudentList
