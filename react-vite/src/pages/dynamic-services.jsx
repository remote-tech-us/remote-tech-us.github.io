import { useParams } from 'react-router-dom';
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

