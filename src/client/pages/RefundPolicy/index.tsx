import React from "react";
import * as pkg from "react-helmet-async";
import { metaTags } from "../../utils/meta";

// import { useTranslations } from 'next-intl';
// import { getTranslations, setRequestLocale } from 'next-intl/server';


// type RefundPoicyPageProps = {
//   params: { locale: string }
// }

// export async function generateMetadata(props: RefundPoicyPageProps) {
//   const { locale } = await props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'About',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }

export default function RefundPolicy() {
  // const { locale } = props.params;
  // setRequestLocale(locale)
   const { Helmet } = pkg;

  return (
    <>
      <Helmet>
        <title>{metaTags.refundPoicy.meta_title}</title>
        <meta name="description" content={metaTags.refundPoicy.meta_description} />
      </Helmet>
      <section className="py-20 lg:py-25 xl:py-30 px-15 lg:px-25 xl:px-30">
        <div className="default-border text-justify my-2 mx-1">
          <div className="py-3">
            <h1 className="dark:text-white">Refund Policy</h1>
          </div>
          <div className="px-3 pt-3">
            <ul className="mx-4 py-3">
              <li>
                Helpdice Offers pay as per plan and use as per plan selected ploicy
                All subscription plan offered by Helpdice are Non-refundable, we
                follow that cancellation of subscription cause due to unexpected
                result, For preventing this we have feedback for customer, In which
                customer can talk about whatever issue they are facing using our
                platform.
              </li>
              <br />
              <li>
                Every Customer feedback always valued as high priority of change if
                applicable.
              </li>
              <br />
              <li>
                We replay back to our customer if the feedback was appreciable, with
                how much days it will be fixed.
              </li>
              <br />
              <li>
                Customer subscription will end automatically halting all the service
                at end of date. To continue using our services customer have to buy
                a new plan to renew it subscription as per the amount stated in
                plan.
              </li>
              <br />
              <li>
                To Offer Better productivity we have different plans based upon user
                needs, they can subscribe as per there need of interest, we may
                introduce more plan in future as per our customer feedback.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
