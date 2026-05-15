// src/pages/missions.jsx
import React from 'react';
import { GLOBALS } from '../data/app__globals.jsx';
import { MISSION_DATA } from '../data/business_mission.jsx';

export default function MissionsPage() {
  // Define the overlay color once
  const overlay = GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.95)';

  // Debugging should happen here, not in the JSX
  console.log("Background Image URL:", GLOBALS.app_missions_bg);

  return (
    <div 
      className="dynamic-bg-container relative w-full h-screen overflow-hidden flex items-center justify-center bg-black select-none"
      style={{
        backgroundImage: GLOBALS.app_missions_bg
          ? `linear-gradient(rgba(7, 11, 22, 0.92), rgba(7, 11, 22, 0.95)), url(${GLOBALS.app_missions_bg})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* CSS Injected directly for seamless isolated crawl animation mechanics */}
      <style>{`
        .star-wars-perspective {
          perspective: 350px;
          transform-style: preserve-3d;
        }
        
        .star-wars-crawl {
          position: absolute;
          width: 90%;
          max-width: 750px;
          top: 100%;
          transform-origin: 50% 100%;
          transform: rotateX(24deg) translateY(0);
          animation: starWarsScroll 55s linear infinite;
        }

        @keyframes starWarsScroll {
          0% {
            top: 90%;
            transform: rotateX(24deg) translateY(0);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: -120%;
            transform: rotateX(28deg) translateY(-1400px);
            opacity: 0;
          }
        }

        /* Top atmospheric fade layer to vanish text into space */
        .fade-horizon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 30vh;
          background: linear-gradient(to bottom, rgba(7, 11, 22, 1) 20%, rgba(7, 11, 22, 0) 100%);
          z-index: 10;
          pointer-events: none;
        }
      `}</style>

      {/* Horizon Mask Layer */}
      <div className="fade-horizon" />

      {/* Intro Crawler Viewport Wrapper */}
      <div className="star-wars-perspective relative w-full h-full flex justify-center text-center overflow-hidden pt-20">
        <div className="star-wars-crawl text-justify font-bold tracking-wide px-4">
          
          {/* Episode Info */}
          <div className="text-center text-xl md:text-2xl text-blue-400 tracking-widest font-black uppercase mb-3">
            {MISSION_DATA.episode}
          </div>
          
          {/* Main Crawl Title */}
          <div className="text-center text-3xl md:text-5xl text-yellow-400 font-extrabold tracking-widest uppercase mb-12 leading-tight drop-shadow-[0_4px_12px_rgba(234,179,8,0.3)]">
            {MISSION_DATA.title}
          </div>

          {/* Scrolling Story Narrative Blocks */}
          <div className="space-y-8 text-lg md:text-2xl text-yellow-300 font-semibold leading-relaxed tracking-wider text-center md:text-justify">
            {MISSION_DATA.paragraphs.map((para, idx) => (
              <p key={idx} className="indent-0 md:indent-8">
                {para}
              </p>
            ))}
          </div>

          {/* Final Sign-off Stamp */}
          <div className="text-center text-sm md:text-lg tracking-[0.5em] text-blue-400/60 font-mono mt-16 uppercase">
            // {MISSION_DATA.tagline} //
          </div>

        </div>
      </div>
    </div>
  );
}
