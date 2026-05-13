// src/pages/dynamic-services.jsx

import { useParams } from 'react-router-dom';
import { useAutoScroll } from '../hooks/useAutoScroll.js';
import Card from '../components/Card.jsx';
import { GLOBALS } from '../data/app__globals.jsx';

// Load all service data files
const serviceDataFiles = import.meta.glob('../data/services/*.jsx', { eager: true });

export default function DynamicServicesPage() {
  const { serviceId } = useParams();
  const filePath = `../data/services/${serviceId}.jsx`;
  const module = serviceDataFiles[filePath];

  if (!module) return <div className="pt-24 text-white">Service not found.</div>;

  const { CONFIG, DATA } = module;

  return (
    <div className="min-h-screen bg-cover bg-fixed"
      style={{
        backgroundImage: `linear-gradient(${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.8)'}, ${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.8)'}), url(${GLOBALS.bg_img})`
      }}
    >
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white">{CONFIG.title}</h1>
          <p className="text-gray-400">{CONFIG.subtitle}</p>
        </header>
        {/* Dynamic section loops */}
        {CONFIG.sections?.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}

        <section>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <span className={`w-8 h-1 ${CONFIG.accentColor || 'bg-blue-500'} rounded-full`} />
            {CONFIG.section_title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
// Inner Component handles conditional layout rules safely without mixing up active scrolling hook tracking elements
function SectionRenderer({ section }) {
  // Activate your marquee loop hook only if requested by the layout configuration
  const scrollRef = useAutoScroll(1, 30);

  if (section.layout === 'carousel') {
    return (
      <section className="mb-16 w-full overflow-hidden">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
          <span className={`w-8 h-1 ${section.accentColor || 'bg-blue-500'} rounded-full`} />
          {section.title}
        </h2>
        <div ref={scrollRef} className="flex flex-nowrap overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-proximity scrollbar-hide">
          {section.items.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </section>
    );
  }

  // Standard Multi-Column Responsive UI Grid Layout fallback engine rule
  return (
    <div className="flex flex-col items-center justify-center w-full pt-12 pb-12">
      <div className="grid grid-cols-1 w-full items-start">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
          <span className={`w-8 h-1 ${section.accentColor || 'bg-yellow-500'} rounded-full`} />
          {section.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {section.items.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
