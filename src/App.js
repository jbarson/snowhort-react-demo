import React from 'react';
import Home from './components/Home';
import About from './components/About';
import './App.css';

class App extends React.Component {
  state = {
    route: "Home"
  }
  changeRoute = (path) => {
    console.log(path)
    this.setState({ route: path })
  }
  renderRoute = () => {
    switch (this.state.route) {
      case "Home":
        return <Home />
      case "About":
        return <About />
      default:
        break;
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Snowhort Rules!</h1>
          <nav>
            <p onClick={() => this.changeRoute('Home')}>Home</p>
            <p onClick={() => this.changeRoute('About')}>About</p>
            <hr></hr>
          </nav>
        </header>
        <main>
          {this.renderRoute()}
        </main>
      </div>
    );
  }

}

export default App;
