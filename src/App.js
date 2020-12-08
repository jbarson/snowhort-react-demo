import Header from './components/Header';
import Educators from './components/Educators'
import { v4 as uuid } from "uuid"
import './App.css';

function App() {

  const parentHandler = (word) => {
    console.log("in the parent" + word);
  };

  const teachers = [
    { id: uuid(), name: "Jon", level: "Lead" },
    { id: uuid(), name: "Lauren", level: "awesome" },
    { id: uuid(), name: "Ashley", level: "TA" },
    { id: uuid(), name: "Nolan", level: "Super" }
  ];
  return (
    <div className="App">
      <Header cohort="Snowhort" studentAverage={82} favoriteGame="Myst Exile" />
      <Educators teachers={teachers} parentHandler={parentHandler} />
    </div>
  );
}

export default App;
