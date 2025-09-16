import React from 'react';
import * as pkg from 'react-helmet-async';
import { metaTags } from '../../utils/meta';

// type ShippingPoicyPageProps = {
//   params: { locale: string }
// }

// export async function generateMetadata(props: ShippingPoicyPageProps) {
//   const { locale } = props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'ShippingPolicy',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }

export default function ShippingPolicy() {
  // const { locale } = props.params;
  // setRequestLocale(locale)
   const { Helmet } = pkg;

  return (
    <>
      <Helmet>
        <title>{metaTags.shippingPolicy.meta_title}</title>
        <meta name="description" content={metaTags.shippingPolicy.meta_description} />
      </Helmet>
      <section className="py-20 lg:py-25 xl:py-30 px-15 lg:px-25 xl:px-30">
        <div className="default-border text-justify my-2 mx-4">
          <div className="py-3">
            <h1 className="dark:text-white">Shipping Policy</h1>
          </div>
          <div
            className="px-3 py-3"
            style={{ minHeight: 'calc(100vh - 10.5rem);' }}
          >
            <ul className="mx-4">
              <li>
                For International buyers, orders are shipped and delivered through
                registered international courier companies and/or International
                speed post only. For domestic buyers, orders are shipped through
                registered domestic courier companies and /or speed post only.{' '}
              </li>
              <li>
                Orders are shipped within 0-7 days or as per the delivery date
                agreed at the time of order confirmation and delivering of the
                shipment subject to Courier Company / post office norms.{' '}
              </li>
              <li>
                HELPDICE is not liable for any delay in delivery by the courier
                company / postal authorities and only guarantees to hand over the
                consignment to the courier company or postal authorities within 0-7
                days from the date of the order and payment or as per the delivery
                date agreed at the time of order confirmation.{' '}
              </li>
              <li>
                Delivery of all orders will be to the address provided by the buyer.{' '}
              </li>
              <li>
                Delivery of our services will be confirmed on your mail ID as
                specified during registration.{' '}
              </li>
              <li>
                For any issues in utilizing our services you may contact our
                helpdesk on 7580011245 or support@helpdice.com.{' '}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
