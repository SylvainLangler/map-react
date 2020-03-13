import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import MapScreen from './components/MapScreen/MapScreen';
import MapBanniere from './components/MapScreen/MapBanniere';
import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header>
        <Router>
          <Switch>
            <Route path="/home"><HomeScreen></HomeScreen></Route>
            <Route path="/map">

              <MapBanniere counter={ counter }></MapBanniere>
              <MapScreen onCounterChange={ (data) => {
                setCounter(data)
              }}></MapScreen></Route>
            <Route path="/"><Redirect to="/home"/></Route>
          </Switch>

          <SimpleBottomNavigation/>

        </Router>
      </header>

    </div>
  );
}

export default App;
