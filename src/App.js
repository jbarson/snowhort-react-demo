import {useState, useEffect} from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <UseStateComponent initialCount={9}/>
    </div>
  );
}

export default App;

const UseStateComponent = ({initialCount }) => { 
  const [count, setCount] = useState(initialCount)
  const [anotherCount, setAnotherCount] = useState(0)
  const handleClick = () => setCount(prevCount => prevCount + 1)
  const anotherClick = () => setAnotherCount(anotherCount +10)
  useEffect(() => {
    document.title = `Count ${count}`
  }, [count])
  useEffect(() => {
    console.log(`Count ${anotherCount}`)
  },[anotherCount])
  return (
    <div>
      <p>{initialCount}</p>
      
      <h1>The count is {count}</h1>
      <h1>Another count is {anotherCount}</h1>
      <button onClick={handleClick}>click me!</button>
      <button onClick={anotherClick}>click me too!</button>
    </div>
  )
}