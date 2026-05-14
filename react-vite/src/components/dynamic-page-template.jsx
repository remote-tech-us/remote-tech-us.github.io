// src/components/dynamic-page-template.jsx
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Card from '../components/Card.jsx';
import { GLOBALS } from '../data/app__globals.jsx';
import SectionRenderer from './SectionRenderer.jsx';

export default function DynamicPageTemplate({ filesDict, fallbackType }) {
  // 1. Determine current sub-route parameters
  const { productId, serviceId } = useParams();
  const activeId = productId || serviceId;
  
  // 2. Locate the correct data file from the provided bundle dictionary
  const matchedKey = Object.keys(filesDict).find(key => key.endsWith(`/${activeId}.jsx`));
  const module = filesDict[matchedKey];

  if (!module) {
    return <div className="pt-24 text-white text-center">{fallbackType} configuration not found.</div>;
  }

  const { CONFIG, DATA } = module;

  return (
    <div className="min-h-screen bg-cover bg-fixed"
      style={{
        backgroundImage: `linear-gradient(${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.8)'}, ${GLOBALS.bg_override_color || 'rgba(15, 23, 42, 0.8)'}), url(${GLOBALS.bg_img})`
      }}
    >
      {/* Dynamic SEO Injector */}
      <Helmet>
        <title>{CONFIG.seo?.title || `${CONFIG.title} | ${GLOBALS.app_title}`}</title>
        <meta name="description" content={CONFIG.seo?.description || CONFIG.subtitle} />
        <meta name="keywords" content={CONFIG.seo?.keywords?.join(', ')} />
      </Helmet>

      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <header className="mb-12 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-white">{CONFIG.title}</h1>
          <p className="text-gray-400 mt-2">{CONFIG.subtitle}</p>
        </header>

        {CONFIG.sections?.map((section, index) => (
          <SectionRenderer 
            key={`${section.id || 'section'}-${index}`} 
            section={section} 
          />
        ))}
        {DATA && DATA.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
              <span className={`w-8 h-1 ${CONFIG.accentColor || 'bg-blue-500'} rounded-full`} />
                {CONFIG.section_title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DATA.map((item, index) => (
                <Card 
                  key={`${item.name.replace(/\s+/g, '-').toLowerCase()}-${index}`} 
                  item={item} 
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

