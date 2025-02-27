import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (

    <section
      className='relative min-h-screen w-full flex items-center justify-center text-white bg-cover bg-center'
      style={{ 
        loading :"lazy",
        backgroundImage: "url('/background.jpg')",
        // backgroundSize: 'cover',
        // backgroundPosition: 'contain',
        backgroundRepeat: 'no-repeat',
        // height:'100vh',
        // width:'100vw',
      }}
      >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-40'></div>
      
      {/* Text Content */}
      <div className='relative z-10 text-center px-6 max-w-5xl'>
        <h1 className='text-2xl md:text-4xl font-bold'>Connecting Farmers Directly with Customers – No Middlemen, Just Fair Trade!</h1>
        <p className='text-lg md:text-xl mt-4'>Buy fresh, organic crops directly from farmers and support the agricultural community</p>


        <div className='flex justify-center items-center gap-4'>
        <Link to="/login">  <button className='mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium'>Start Selling</button> </Link>
        <Link to="/login">  <button className='mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium'>Start Buying</button> </Link>
        </div>
        
      </div>
    </section>
  );
}

export default Home;
