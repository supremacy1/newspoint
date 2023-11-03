import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from 'react-router-dom';

import Navbar from './componet/navbar';
import Sport from './componet/sport';
import Entertainment from './componet/entertainment';
import Tech from './componet/tech';
function App() {
  return (
    <div className="App">
          <Navbar />
          {/* <Sport /> */}
          {/* <Entertainment /> */}
          {/* <Tech/> */}
          <BrowserRouter>
             
      
       
          <Routes>
          
          <Route path='/' Component={LoginForm}  />
         <Route path='/dashbord' Component={Dashbord}  />

         <Route path='/dataselect' Component={Dataselect} />
         <Route path='/login' Component={LoginForm} />
         <Route path='/registeration' Component={RegistrationForm} />
         <Route path='/cable' Component={Cableselect} />
         <Route path='/airtime' Component={Airtimeselect} />

 
       </Routes>
       
       
 </BrowserRouter>
    </div>
  );
}

export default App;
