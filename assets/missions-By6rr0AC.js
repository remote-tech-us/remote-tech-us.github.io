import{j as e}from"./vendor-C811conn.js";import{G as t}from"./index-wyWLfU7B.js";const a={episode:"EPISODE I",title:"THE SCRIPT REVOLUTION",tagline:"REMOTE TECH US, LLC",paragraphs:["It is a period of total cloud lock-in. Opaque software conglomerates hold enterprise systems hostage behind massive licensing walls and questionable PII compliance matrices.","Rebel architects operating under the banner of REMOTE TECH US have broken through the status quo, deploying robust, completely sovereign open-source infrastructure across the galaxy.","Armed with master-level command of the CA Service Desk Manager suite and modern DevOps orchestration, they have unlocked the secrets to self-healing clusters via Docker and Kubernetes.","As corporate monoliths falter under bloated codebases, a dedicated fleet of support structures—powered by Gitea, OpenProject, and RocketChat—brings transparency, data security, and pure computational freedom back into the hands of the people...."]};function i(){return console.log("Background Image URL:",t.app_missions_bg),e.jsxs("div",{className:"dynamic-bg-container relative w-full h-screen overflow-hidden flex items-center justify-center bg-black select-none",style:{backgroundImage:`linear-gradient(${t.bg_override_color||"rgba(15, 23, 42, 0.8)"}, ${t.bg_override_color||"rgba(15, 23, 42, 0.8)"}), url(${t.app_missions_bg})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[e.jsx("style",{children:`
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
      `}),e.jsx("div",{className:"fade-horizon"}),e.jsx("div",{className:"star-wars-perspective relative w-full h-full flex justify-center text-center overflow-hidden pt-20",children:e.jsxs("div",{className:"star-wars-crawl text-justify font-bold tracking-wide px-4",children:[e.jsx("div",{className:"text-center text-xl md:text-2xl text-blue-400 tracking-widest font-black uppercase mb-3",children:a.episode}),e.jsx("div",{className:"text-center text-3xl md:text-5xl text-yellow-400 font-extrabold tracking-widest uppercase mb-12 leading-tight drop-shadow-[0_4px_12px_rgba(234,179,8,0.3)]",children:a.title}),e.jsx("div",{className:"space-y-8 text-lg md:text-2xl text-yellow-300 font-semibold leading-relaxed tracking-wider text-center md:text-justify",children:a.paragraphs.map((r,s)=>e.jsx("p",{className:"indent-0 md:indent-8",children:r},s))}),e.jsxs("div",{className:"text-center text-sm md:text-lg tracking-[0.5em] text-blue-400/60 font-mono mt-16 uppercase",children:["// ",a.tagline," //"]})]})})]})}export{i as default};
