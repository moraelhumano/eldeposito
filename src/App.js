import React from "react";

import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import './App.css';
import NavBar from './components/Navbar';
import HeroHome from "./components/HeroHome";
import Description from "./components/Description";
import Crew from "./components/Crew";
import Episodes from "./components/Episodes";
import Footer from "./components/Footer";


function App() {

  return (
    <>
    <Router>
      <Switch>
        <React.Fragment>
            <div>
            <NavBar />
           <HeroHome />
          <Description />
      
            <Crew />
                
            <Episodes />
             
            <Footer />

              {/* <Route   path="/" component={Home} exact /> */}
            </div>
        </React.Fragment>
      </Switch>
    </Router>
    {/* <Footer /> */}

    </>
  );
}

export default App;



