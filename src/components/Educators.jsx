import React from 'react'


/**
 * 
 * @param {*} props a list of educators with their level
 */
function Educators({ teachers, parentHandler }) {
  const childHandler = () => {
    console.log("in the child");
  };
  const string = " does this work"
  return (
    <div>
      <button onClick={() => parentHandler(string)}>Click me for the Parent</button>
      <button onClick={childHandler}>Click me for the Child</button>
      <ul>
        {
          teachers
            .filter(teacher => { return teacher.name.length > 3 })
            .map(teacher => {
              return (<li key={teacher.id} onClick={() => parentHandler(teacher.name)}>{`Educator name is ${teacher.name} and has a level of ${teacher.level}`}</li>)
            })
        }
      </ul>
    </div>
  )
}

export default Educators
