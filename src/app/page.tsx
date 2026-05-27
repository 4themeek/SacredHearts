import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PRODUCTS, CATEGORIES } from '@/lib/products';
import ShopClient from './ShopClient';

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Browse our full collection of 39 high-quality sacred prints and plaques. Sacred Heart of Jesus, Immaculate Heart of Mary, First Holy Communion, Marian images, and more.',
};

function ShopFallback() {
  return (
    <section className="section">
      <div className="container">
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontStyle: 'italic', color: 'var(--muted)', padding: '3rem 0' }}>
          Loading collection…
        </p>
      </div>
    </section>
  );
}

export default function ShopPage() {
  return (
    <>
      <div className="page-hero">
        <h1>Our Collection</h1>
        <p>High-quality prints and plaques of the Sacred Hearts</p>
      </div>
      <Suspense fallback={<ShopFallback />}>
        <ShopClient products={PRODUCTS} categories={CATEGORIES} />
      </Suspense>
    </>
  );
}
