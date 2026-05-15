// src/components/LoadingSpinner.jsx

import React from 'react';
import { GLOBALS } from '../data/app__globals.jsx';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      {/* The Wrapper Div gets the animation */}
      <div className="animate-spin-slow w-16 h-16 flex items-center justify-center">
        <img
          src={GLOBALS.app_logo}
          className="w-full h-full object-contain"
          alt="Loading..."
        />
      </div>
      <p className="text-gray-500 font-medium animate-pulse">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
