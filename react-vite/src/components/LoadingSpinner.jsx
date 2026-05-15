import React from 'react';
// Use your actual logo path here
import logo from '../assets/react.svg'; 

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <img 
        src={logo} 
        className="w-16 h-16 animate-spin-slow" 
        alt="Loading..." 
      />
      <p className="text-gray-500 font-medium animate-pulse">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
