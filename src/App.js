import React from 'react'
import './App.css';
import MovieApp from './Component/MovieApp';
import MovieDetail from './Component/MovieDetail/MovieDetail'
import Errors from './Component/Errors/Errors'

import {Switch,Route} from 'react-router-dom';

 




function App() {
 

  
  return (
    <div className="App">
      <Switch>
        <Route  exact path="/" component={MovieApp}/>
        <Route path="/home/:id" component={MovieDetail}/>
        <Route path="/*" component={Errors}/>
       
      </Switch>
     
       </div>
  );
}

export default App;
