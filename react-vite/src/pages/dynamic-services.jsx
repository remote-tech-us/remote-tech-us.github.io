// src/pages/dynamic-services.jsx
import DynamicPageTemplate from '../components/dynamic-page-template.jsx';

const serviceFiles = import.meta.glob('../data/services/*.jsx', { eager: true });

export default function DynamicServicesPage() {
  return <DynamicPageTemplate filesDict={serviceFiles} fallbackType="Service" />;
}

