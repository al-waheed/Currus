import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import SelectCars from './components/SelectCars';
import CarLogo from './components/CarLogo';
import AdVideo from './components/AdVideo';
import CustomerReviews from './components/CustomerReviews';
import Stories from './components/Stories.jsx'

function App() {
  return (
    <div>
     <Navbar />
     <Landing />
     <SelectCars />
     <CarLogo />
     <AdVideo />
      <CustomerReviews />
      <Stories />
    </div>
  );
}

export default App;
