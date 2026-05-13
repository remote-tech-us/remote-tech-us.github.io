// src/pages/DynamicServicePage.jsx

import { useParams } from 'react-router-dom';
// Dynamic import of all data files in the services folder
const serviceDataFiles = import.meta.glob('../data/services/*.js', { eager: true });

export default function DynamicServicesPage() {
  const { serviceId } = useParams(); // e.g., 'snow'
  
  // Find the data file that matches the URL param
  const dataPath = `../data/services/${serviceId}.js`;
  const serviceData = serviceDataFiles[dataPath]?.DATA;

  if (!serviceData) return <div>Service not found</div>;

  return (
    <div style={{ backgroundImage: `linear-gradient(${serviceData.bg_color}, ...)` }}>
      {/* Use the dynamic titles from the data file */}
      {serviceData.sections.map(section => (
        <section key={section.label}>
          <h2 className="text-xl font-bold">
             <span className="w-8 h-1 bg-blue-500 rounded-full" /> {section.label}
          </h2>
          {/* Render your Cards here */}
        </section>
      ))}
    </div>
  );
}

