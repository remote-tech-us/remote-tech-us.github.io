// src/pages/dynamic-products.jsx
import DynamicPageTemplate from '../components/dynamic-page-template.jsx';

const productFiles = import.meta.glob('../data/products/*.jsx', { eager: true });

export default function DynamicProductsPage() {
  return <DynamicPageTemplate filesDict={productFiles} fallbackType="Product" />;
}

