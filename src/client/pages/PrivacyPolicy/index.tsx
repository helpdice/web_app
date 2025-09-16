
import React from 'react';
import * as pkg from 'react-helmet-async';
import { metaTags } from '../../utils/meta';

// type PrivacyPolicyPageProps = {
//   params: { locale: string }
// }

// export async function generateMetadata(props: PrivacyPolicyPageProps) {
//   const { locale } = await props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'PrivacyPolicy',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }

export default function PrivacyPolicy() {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = useTranslations('About');
   const { Helmet } = pkg;

  return (
    <>
      <Helmet>
        <title>{metaTags.privacyPolicy.meta_title}</title>
        <meta name="description" content={metaTags.privacyPolicy.meta_description} />
      </Helmet>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="px-15 lg:px-25 xl:px-30">
          <div className="py-3">
            <h1 className="dark:text-white">Privacy Policy</h1>
          </div>
          <div className="px-3 pt-3">
            <p>
              This privacy policy <b>(&quot;policy&quot;)</b> will help you understand how{' '}
              <b>Helpdice</b> (&quot;us&quot;, &quot;we&quot;, &quot;our&quot;) uses and protects the data you
              provide to us when you visit and use{' '}
              <a href="https://www.helpdice.com/">helpdice.com</a>(&quot;website&quot;,
              &quot;service&quot;).
            </p>
            <p>
              We reserve the right to change this policy at any given time, of which
              you will be promptly updated. If you want to make sure that you are up
              to date with the latest changes, we advise you to frequently visit
              this page.
            </p>
            <p>
              <b>What User Data We Collect</b>
            </p>
            <p>When you visit the website, we may collect the following data:</p>
            <ul className="list-unstyled">
              <li>Your IP address.</li>
              <li>Your contact information and email address.</li>
              <li>Other information such as interests and preferences.</li>
              <li>Data profile regarding your online behavior on our website.</li>
            </ul>
            <p>
              <b>Why We Collect Your Data</b>
            </p>
            <p>We are collecting your data for several reasons:</p>
            <ul className="list-unstyled">
              <li>To better understand your needs.</li>
              <li>To improve our services and products.</li>
              <li>
                To send you promotional emails containing the information we think
                you will find interesting.
              </li>
              <li>
                To contact you to fill out surveys and participate in other types of
                market research.{' '}
              </li>
              <li>
                To customize our website according to your online behavior and
                personal preferences.{' '}
              </li>
            </ul>
            <p>
              <b>Safeguarding and Securing the Data</b>
            </p>
            <p>
              Helpdice is committed to securing your data and keeping it
              confidential. Helpdice has done all in its power to prevent data
              theft, unauthorized access, and disclosure by implementing the latest
              technologies and software, which help us safeguard all the information
              we collect online.
            </p>
            <p>
              <b>Our Cookie Policy</b>
            </p>
            <p>
              Once you agree to allow our website to use cookies, you also agree to
              use the data it collects regarding your online behavior (analyze web
              traffic, web pages you spend the most time on, and websites you
              visit).
            </p>
            <p>
              The data we collect by using cookies is used to customize our website
              to your needs. After we use the data for statistical analysis, the
              data is completely removed from our systems.
            </p>
            <p>
              Please note that cookies don&apos;t allow us to gain control of your
              computer in any way. They are strictly used to monitor which pages you
              find useful and which you do not so that we can provide a better
              experience for you.
            </p>
            <p>
              If you want to disable cookies, you can do it by accessing the
              settings of your internet browser. (Provide links for cookie settings
              for major internet browsers).
            </p>
            <p>
              <b>Links to Other Websites</b>
            </p>
            <p>
              Our website contains links that lead to other websites. If you click
              on these links Helpdice is not held responsible for your data and
              privacy protection. Visiting those websites is not governed by this
              privacy policy agreement. Make sure to read the privacy policy
              documentation of the website you go to from our website.
            </p>
            <p>
              <b>Restricting the Collection of your Personal Data</b>
            </p>
            <p>
              At some point, you might wish to restrict the use and collection of
              your personal data. You can achieve this by doing the following: When
              you are filling the forms on the website, make sure to check if there
              is a box which you can leave unchecked, if you don&apos;t want to disclose
              your personal information. If you have already agreed to share your
              information with us, feel free to contact us via email and we will be
              more than happy to change this for you. We will not lease, sell or
              distribute your personal information to any third parties, unless we
              have your permission. We might do so if the law forces us. Your
              personal information will be used when we need to send you promotional
              materials if you agree to this privacy policy.
            </p>
            <br />
          </div>
        </div>
      </section>
    </>
  );
}
