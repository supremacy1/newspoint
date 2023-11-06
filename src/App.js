import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from 'react-router-dom';

import Navbar from './componet/navbar';
import Sport from './componet/sport';
import Entertainment from './componet/entertainment';
import Tech from './componet/tech';
import NewsApp from './componet/news';
function App() {
  return (
    <div className="App">
          {/* <Navbar /> */}
          {/* <Sport /> */}
          {/* <Entertainment /> */}
          {/* <Tech/> */}
          {/* <NewsApp /> */}
          <BrowserRouter>
             
      
       
          <Routes>
          
          <Route path='/' Component={Navbar}  />
         <Route path='/sport' Component={Sport}  />
         <Route path='/tech' Component={Tech}  />
         <Route path='/entertainment' Component={Entertainment}  />

        

 
       </Routes>
       
       
 </BrowserRouter>
    </div>
  );
}

export default App;
