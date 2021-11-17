//import logo from './logo.svg';
import './App.css';
//import axios from './node_modules/axios';
import React from 'react';
import Index1 from './component/Index1';
import Test from './component/Test'
//import Test1 from './component/Test1'
import Finish from './component/Finish'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {
  //axios.get('http://interviewapi.stgbuild.com/getQuizData').then((response)=>{console.log(response.data.test)});
  
  return (
 
<BrowserRouter>
  <div className="App">
<Routes>
       <Route exact path ='/Defaultroute'>
         <Index1/>
          </Route>
      <Route path ='/test/:id/:qnumber' >
        <Test/>
      </Route>
      <Route path  ='/finish' >
      <Finish/>
      </Route>
     
      <Navigate to="/Defaultroute"/> 
</Routes>
  </div>
  </BrowserRouter>
    
    

    
  );
}

export default App;
