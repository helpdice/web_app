import { Loader } from '@helpdice/icons';
import React, { lazy, Suspense } from 'react';

interface ProductProps {
  products: any[];
}

const ProductItem = lazy(() => import('./productItem'));

export const Products: React.FunctionComponent<ProductProps> = ({
  products = [],
}: ProductProps) => {
  if (products.length > 0) {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business like yours</h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Helpdice we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {products.map(
              (product: {
                _id: any;
                name: string;
                rate: number | string;
                features: string[];
              }) => (
                <Suspense key={`product-item-${product._id}`} fallback={<Loader />}>
                  <ProductItem product={product} />
                </Suspense>
              ))}
          </div>
        </div>
      </section>
    );
  }
  return <div />;
};

export default Products;
