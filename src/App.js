import logo from './logo.svg';
// import './cssfiles/NavigationBar.css';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from 'react-router-dom';
import NavigationBar from './componet/NavigationBar';
import ProductList from './componet/Homefront';
import Footer from './componet/Footer';
import ElectronicList from './componet/Electronic';
import FurnitureList from './componet/Furnitures';
import Slideshow from './componet/slid';
function App() {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];
  
  return (
    
    
    <div className="App">

  
<NavigationBar />
<Slideshow />
          <BrowserRouter>
             
          
          
       
          <Routes>
          <Route path='/' Component={ProductList} ></Route>
          {/* <Route path='/' Component={Navbar}  />
         <Route path='/sport' Component={Sport}  />
         <Route path='/tech' Component={Tech}  />
         <Route path='/entertainment' Component={Entertainment}  />
         <Route path='/api' Component={Api}  /> */}

        

 
       </Routes>
       
       
 </BrowserRouter>

 <ElectronicList />
 <FurnitureList />
 <Footer />
</div>   
  );
}

export default App;
