// import Placeholder from '@/components/Placeholder';
// import { getTranslations } from 'next-intl/server';

// // import { Hello } from '@/components/Hello';

// export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
//   const { locale } = await props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'Offers',
//   });

//   return {
//     title: t('meta_title'),
//   };
// }

// const Offers = async () => {
//   return (
//   <div className="py-20 lg:py-25 lg:px-10 xl:py-30 xl:px-20">
//     <Placeholder />
//   </div>
//   );
// }

// export default Offers;