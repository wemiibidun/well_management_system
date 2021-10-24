import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageComponent from './components/HomePageComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateWellComponent from './components/CreateWellComponent';
import UpdateWellComponent from './components/UpdateWellComponent';
import WellDetailsComponent from './components/WellDetailsComponent';
import WellListComponent from './components/WellListComponent';
import WellHistoryComponent from './components/WellHistoryComponent';



function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Switch>
              {/* switch component ensures that only one component renders at a time */}
              {/* The exact prop tells the Router component to match the path exactly. */}
              <Route path = "/" exact component = {HomePageComponent}></Route> 
              <Route path = "/addWell" component = {CreateWellComponent}></Route>
              <Route path = "/wellList" component = {WellListComponent}></Route>
              <Route path = "/wellDetails/:id" component = {WellDetailsComponent}></Route>
              <Route path = "/updateWell/:id" component = {UpdateWellComponent }></Route>
              <Route path = "/wellHistory/:id" component = {WellHistoryComponent }></Route>
            </Switch>  

          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
