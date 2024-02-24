import logo from './logo.svg';
// import './cssfiles/navbar.css';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from 'react-router-dom';
import NavigationBar from './componet/NavigationBar';
import ProductList from './componet/Homefront';
function App() {
  const products = [
    {
      id: 1,
      image: 'product1.jpg',
      price: '$10.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: 'New York, USA',
      whatsappNumber: '1234567890'
    },
    {
      id: 2,
      image: 'product2.jpg',
      price: '$20.00',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      location: 'London, UK',
      whatsappNumber: '9876543210'
    },
    // Add more product objects here
  ];
  
  return (
    
    
    <div className="App">
  
<NavigationBar />
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
</div>   
  );
}

export default App;
