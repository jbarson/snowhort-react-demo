import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StudentList from './pages/StudentList';
import StudentProfile from './pages/StudentProfile';
import NotFoundPage from './pages/NotFoundPage'
import './App.css';

class App extends React.Component {
  state = {
    students: [
      { id: 0, name: "Dave" },
      { id: 1, name: "Orest" },
      { id: 2, name: "Ian" }
    ],
    isThisAThing: false
  }
  render() {
    const { students } = this.state
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Redirect from="/snowhort-home" to="/" />
          <Route path={'/student/:studentId'} render={(routerProps) => <StudentProfile students={students} {...routerProps} />} />
          <Route path={'/students'} render={() => <StudentList students={students} />} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter >
    );
  }
}

export default App;
