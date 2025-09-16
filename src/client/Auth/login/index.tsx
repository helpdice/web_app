import React from 'react';
import Signin from '../../components/Auth/Signin';

// type LoginPageProps = {
//   params: Promise<{ locale: string }>;
// };

// export async function generateMetadata() {
//   // const { locale } = await props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'SignIn',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }

const SignInPage = () => {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  return <Signin />;
};

export default SignInPage;
