import React from 'react';
import Nav from '../components/Nav';
import { Route, Switch, Link } from 'react-router-dom';
import AboutMe from '../components/AboutMe';
import AboutBoots from '../components/AboutBoots';

function AboutPage({ match }) {
  console.log(match);
  document.title = "About"
  return (
    <div>
      <h1>About Page</h1>
      <Nav />
      <h2>Subnav</h2>
      <Link to={match.url}>Jon</Link>
      <br></br>
      <Link to={match.url + '/boots'}>Boots</Link>
      <Switch>
        <Route path={match.path} exact component={AboutMe} />
        <Route path={match.path + '/boots'} component={AboutBoots} />
      </Switch>
    </div>
  )
}

export default AboutPage
