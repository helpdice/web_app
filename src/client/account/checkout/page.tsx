// import { getTranslations } from 'next-intl/server';

// // import { Hello } from '@/components/Hello';

// export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
//   const { locale } = await props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'Checkout',
//   });

//   return {
//     title: t('meta_title'),
//   };
// }

// const ShoppingCart = async () => {
//   return (
//     <div className="py-10 lg:py-12 lg:px-10 xl:py-10 xl:px-20">
//       <section className="py-8 antialiased md:py-16">
//         <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
//           <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Checkout & Payment</h2>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ShoppingCart;