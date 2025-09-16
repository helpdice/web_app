import React, { useMemo } from 'react';
import Product from '../../../components/Shop/product';
import FaqSection from './faqSection';
import SectionSteps from '../../../components/Common/SectionStep';
import ServicesHero from '../ServicesHero';
// import { Helmet } from 'react-helmet-async';
// import { metaTags } from '../../../utils/meta';
import { useProducts } from '../../../services/product.services';

export default function LogoDesign() {
  const { isLoading: isProductsLoading, isError: isProductsError, data: products } = useProducts('logo-designing');
  const PRODUCTS = useMemo(() => {
    if (!isProductsLoading && !isProductsError && products) {
      return products;
    }
    return [];
  }, [isProductsLoading, isProductsError, products]);

  return (
    <>
      {/* <Helmet>
        <title>{metaTags.logoDesign.meta_title}</title>
        <meta name="description" content={metaTags.logoDesign.meta_description} />
      </Helmet> */}
      <section className="py-20 lg:py-25 xl:py-30 px-15 lg:px-25 xl:px-30">
        <ServicesHero heading="Logo Design" description="It does not matter how your company, product or service are
            attractive for the audience, if the logo does not correctly
            reflect your points of strength. An unsuitable company identity
            will attract the wrong audience for your company. Time is
            precious so better not risk wasting it dealing with potential
            customers whom you are not really interested in. This is a
            relevant problem when starting a new business. i elaborated a
            logo design process, which I apply to every project, aiming to
            make sure that the brand can communicate the values and points
            of strength of the company." />
        <br />
        <SectionSteps heading="How we make a Logo Design" steps={[
          {
            name: "Define Brand Identity and Seek Inspiration"
          },
          {
            name: "Determine Logo Style & Type"
          },
          {
            name: "Decide Color Scheme & Font"
          },
          {
            name: "Build Outline and Create a Logo"
          },
          {
            name: "Refine results and Finalize"
          }
        ]} />
        <br />
        <Product products={PRODUCTS} />
        <FaqSection />
      </section>
    </>
  );
}
