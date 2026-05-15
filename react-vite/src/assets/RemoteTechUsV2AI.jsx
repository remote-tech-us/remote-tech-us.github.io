import React from 'react';

/**
 * RemoteTechUsV2 - Custom Branded Icon
 * Colors: 
 * - Dark Navy: #072b4f
 * - Light Blue: #49a3d4
 * - White Lines: #ffffff
 * - Outer Border: #f1f5f9
 */
export default function RemoteTechUsV2({ width = "1.5em", height = "1.5em", className = "" }) {
  // Brand Color Constants
  const colors = {
    navy: "#072b4f",
    blue: "#49a3d4",
    white: "#ffffff",
    border: "#f1f5f9"
  };

  return (
    <svg
      viewBox="-2 -2 46 46"
      width={width}
      height={height}
      className={`inline-block align-middle drop-shadow-sm ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. The Outer "Sticker" Border Background */}
      <circle cx="21" cy="21" r="21" fill={colors.border} />

      {/* 2. Main Icon Body (Inkscape Geometry) */}
      <g transform="translate(-65.4537, -102.595)">
        
        {/* The Outer Rim - Right Side & Top Ear (Dark Navy) */}
        <path
          id="rim-right"
          fill={colors.navy}
          d="m 87.429289,103.2888 a 20.258675,20.219881 0 0 1 11.645284,4.51238 3.2476051,3.3485836 0 0 1 0.315227,-0.38034 3.2476051,3.3485836 0 0 1 4.591453,0 3.2476051,3.3485836 0 0 1 0.003,4.73408 3.2476051,3.3485836 0 0 1 -0.56018,0.45062 20.258675,20.219881 0 0 1 -2.74143,25.1442 l -0.0357,0.0351 a 20.258675,20.219881 0 0 1 -26.651084,1.69137 20.258675,20.219881 0 0 1 13.43343,-36.18741 z"
        />

        {/* The Outer Rim - Left Crescent & Bottom Ear (Light Blue) */}
        <path
          id="rim-left"
          fill={colors.blue}
          d="m 85.000000,103.30000 a 20.258675,20.219881 0 0 0 -10.446132,5.85235 20.258675,20.219881 0 0 0 -2.488737,25.4987 3.2476051,3.3485836 0 0 0 -0.299724,0.26768 3.2476051,3.3485836 0 0 0 -0.0026,4.73408 3.2476051,3.3485836 0 0 0 4.591451,0.006 l 0.0057,-0.006 a 3.2476051,3.3485836 0 0 0 0.168465,-0.18965 20.258675,20.219881 0 0 0 8.471577,1.02425 V 103.30000 z"
        />

        {/* 3. The Inner Core Rings (Solid Navy) */}
        <path id="core-outer" fill={colors.navy} d="m 96.688981,133.82447 a 14.677311,14.640156 0 1 1 -20.750423,-20.69788 14.677311,14.640156 0 0 1 20.750423,20.69788 z" />
        
        {/* 4. The White Crosshair & Rings Dividers */}
        <circle cx="86.33" cy="122.97" r="14.65" fill="none" stroke={colors.white} strokeWidth="1.3" />
        <circle cx="86.33" cy="122.97" r="7.3" fill="none" stroke={colors.white} strokeWidth="1.3" />
        <circle cx="86.33" cy="122.97" r="3.25" fill="none" stroke={colors.white} strokeWidth="1.1" />
        
        {/* Crosshair Lines */}
        <line x1="86.33" y1="103.92" x2="86.33" y2="142.02" stroke={colors.white} strokeWidth="1.3" />
        <line x1="71.05" y1="122.97" x2="101.61" y2="122.97" stroke={colors.white} strokeWidth="1.3" />

      </g>
    </svg>
  );
}
