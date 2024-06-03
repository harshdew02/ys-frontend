import React from 'react';
import Appbar from './Appbar';
import Navbar from './Navbar';
import Cards from './Cards';
import NearYou from './NearYou';
import Mentarray from './Mentarray';
import Footer from './Footer';

const Home = () => {
  return (
   <>
   <div>
      <Appbar/>
    <Navbar/>
    <div className=''>
      <img className='w-full' src='./Group 5.png' alt='No Image' /> 
    </div>
    <Cards/>
    <NearYou/>
    <Mentarray/> 
     <Footer/> 
    </div>
    </>
    
  );
};

export default Home;
