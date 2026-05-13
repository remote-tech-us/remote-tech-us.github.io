// src/components/SectionRenderer.jsx
import { useAutoScroll } from '../hooks/useAutoScroll.js';
import Card from './Card.jsx';

export default function SectionRenderer({ section }) {
  // Directly spread your config file configuration overrides straight into the hook initializer
  const scrollRef = useAutoScroll(section.scrollOptions || {});

  if (section.layout === 'carousel') {
    return (
      <section className="mb-16 w-full overflow-hidden">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
          <span className={`w-8 h-1 ${section.accentColor || 'bg-blue-500'} rounded-full`} />
          {section.title}
        </h2>
        <div 
          ref={scrollRef} 
          className="flex flex-nowrap overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-proximity scrollbar-hide w-full"
        >
          {section.items.map((item, index) => (
            <Card 
              key={`${item.name.replace(/\s+/g, '-').toLowerCase()}-${index}`} 
              item={item} 
            />
          ))}
        </div>
      </section>
    );
  }

  // Standard Multi-Column UI Grid Layout engine logic fallback
  return (
    <div className="flex flex-col items-center justify-center w-full pt-12 pb-12">
      <div className="grid grid-cols-1 w-full items-start">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
          <span className={`w-8 h-1 ${section.accentColor || 'bg-yellow-500'} rounded-full`} />
          {section.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {section.items.map((item, index) => (
            <Card 
              key={`${item.name.replace(/\s+/g, '-').toLowerCase()}-${index}`} 
              item={item} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

