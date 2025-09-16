import React from 'react';
import Layout from '../pages/MainLayout';
import { getBaseUrl } from './helpers';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Index from '../pages/Index';
import Article from '../pages/Articles';
import Articles from '../pages/Articles';
import MCQPage from '../pages/Mcqs';
import Qnas from '../pages/Qnas';
import BlogPost from '../pages/Articles/Post';
import LogoDesign from '../pages/Services/logo-designing';
import SEO from '../pages/Services/search-engine-optimization';
import DigitalMarketing from '../pages/Services/digital-marketing';
import UXDesign from '../pages/Services/ux-designing';
import AppDevelopment from '../pages/Services/app-development';
import SignInPage from '../Auth/login';
import SignUpPage from '../Auth/register';
import TermOfUse from '../pages/TermsOfUse';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import RefundPolicy from '../pages/RefundPolicy';
import About from '../pages/About';
import ContactPage from '../pages/Contact';
import MCQSinglePage from '../pages/Mcqs/Mcq';
import QnaSinglePage from '../pages/Qnas/Qna';
import CareersPage from '../pages/Careers';
import OrdersPage from '../account/orders';
import CartPage from '../account/cart';

type Path = {
  private?: boolean;
  name?: string;
  path: string;
  children?: Path[];
};

type URLObject = {
  [key: string]: string;
};

type SitemapURLObject = {
  [key: string]: {
    url: string;
    lastModified?: string | Date | undefined;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" | undefined;
    priority: number;
    alternates: object;
  };
};

export const paths: any[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        name: 'BASE_URL',
        path: '',
        element: <Index />,
      },
      {
        name: 'TERM_OF_USE',
        path: 'term-of-use',
        element: <TermOfUse />
      },
      {
        name: 'PRIVACY_POLICY',
        path: 'privacy-policy',
        element: <PrivacyPolicy />
      },
      {
        name: 'REFUND_POLICY',
        path: 'refund-policy',
        element: <RefundPolicy />
      },
      {
        name: 'ABOUT_US',
        path: 'about-us',
        element: <About />
      },
      {
        name: 'CONTACT_US',
        path: 'contact-us',
        element: <ContactPage />
      },
      // {
      //   name: 'LEARN',
      //   path: 'learn',
      // },
      {
        name: 'CAREERS',
        path: 'careers',
        element: <CareersPage />
      },
      // {
      //   name: 'COURSE_PAGE',
      //   path: 'learn/:category/:course/:page',
      // },
      // {
      //   name: 'CART',
      //   path: 'cart',
      // },
      {
        name: 'ARTICLE',
        path: 'articles',
        element: <Articles />
      },
      {
        name: 'ARTICLE_BY_CATEGORY',
        path: 'articles/:category',
        element: <Articles />
      },
      {
        name: 'ARTICLE_POST',
        path: 'article/:slug',
        private: true,
        element: <BlogPost />
      },
      {
        name: 'MCQ',
        path: 'mcqs',
        element: <MCQPage />
      },
      {
        name: 'MCQ_CATEGORY',
        path: 'mcqs/:category',
        private: true,
        element: <MCQPage />
      },
      {
        name: 'MCQ_SLUG',
        path: 'mcq/:slug',
        private: true,
        element: <MCQSinglePage />
      },
      {
        name: 'QNA',
        path: 'qnas',
        element: <Qnas />
      },
      {
        name: 'QNA_CATEGORY',
        path: 'qnas/:category',
        private: true,
        element: <Qnas />
      },
      {
        name: 'QNA_SLUG',
        path: 'qna/:slug',
        private: true,
        element: <QnaSinglePage />
      },
      {
        name: 'SERVICES',
        path: 'services/',
        children: [
          {
            name: 'LOGO_DESIGN',
            path: 'logo-designing',
            element: <LogoDesign />
          },
          {
            name: 'SEARCH_ENGINE_OPTIMIZATION',
            path: 'search-engine-optimization',
            element: <SEO />
          },
          {
            name: 'DIGITAL_MARKETING',
            path: 'digital-marketing',
            element: <DigitalMarketing />
          },
          {
            name: 'UX_DESIGN',
            path: 'ux-designing',
            element: <UXDesign />
          },
          {
            name: 'APP_DEVELOPMENT',
            path: 'app-development',
            element: <AppDevelopment />
          },
        ],
      },
      {
        name: 'ACCOUNT',
        path: 'account',
        children: [
          {
            name: 'CART',
            path: 'cart',
            element: <CartPage />
          },
          {
            name: 'CHECKOUT',
            path: 'checkout'
          },
          {
            name: 'ORDER',
            path: 'orders',
            element: <OrdersPage />
          },
          // {
          //   name: 'PROFILE',
          //   path: 'profile'
          // },
        ]
      }
    ],
  },
  {
    name: 'LOGIN',
    path: 'login',
    element: <SignInPage />
  },
  {
    name: 'REGISTER',
    path: 'register',
    element: <SignUpPage />
  },
  // {
  //   name: 'MAINTENANCE',
  //   path: 'maintenance',
  // },
  // {
  //   name: 'AD_BLOCK',
  //   path: 'ad-block',
  // },
  // {
  //     path: 'ads.txt',
  //     element:
  // },
  // {
  //   path: '404',
  // },
  // {
  //   path: '*',
  // },
];

function generateURLs(paths: Path[], basePath: string = ''): URLObject {
  let urlObject: URLObject = {};

  paths.forEach((path) => {
    const fullPath = basePath + path.path;

    // If the path has a name, add it to the object
    if (path.name) {
      urlObject[path.name] = fullPath;
    }

    // If the path has children, recursively generate their URLs
    if (path.children) {
      const childURLs = generateURLs(path.children, fullPath + '/');
      urlObject = { ...urlObject, ...childURLs };
    }
  });

  return urlObject;
}

export function getUrl(
  name: string,
  params: Record<string, string> = {},
): string {
  const routeMap: Record<string, string> = {};

  // Populate routeMap for faster lookup
  function populateRouteMap(routes: any, parentPath: string = '') {
    routes.forEach(
      (route: { path: string; name: string | number; children: any }) => {
        const fullPath = parentPath + '/' + route.path;
        routeMap[route.name] = fullPath;
        if (route.children) {
          populateRouteMap(route.children, fullPath);
        }
      },
    );
  }
  populateRouteMap(paths);

  // Find the path corresponding to the name
  const path = routeMap[name];
  if (!path) return '';

  // Substitute parameters
  let url = path;
  for (const [key, value] of Object.entries(params)) {
    url = url.replace(`:${key}`, value);
  }
  return getBaseUrl() + url.replace('//', '/');
}

// export function scrollTo(id: string) {
//   window.scrollTo({
//     top: document.querySelector(id).offsetTop,
//     behavior: 'smooth',
//   });
// }

// function generateSitemapURLs(paths: Path[], basePath: string = ''): SitemapURLObject {
//   let urlObject: SitemapURLObject = {};

//   paths.forEach((path: Path) => {
//     const fullPath = basePath + path.path;
//     const routeUrl = `${getBaseUrl()}/${fullPath}`;

//     if (!path.private) {
//       // If the path has a name, create the metadata object for it
//       if (path.name && !path.name.includes(':') ) {
//         urlObject[path.name] = {
//           url: routeUrl,
//           lastModified: new Date(), // You can replace this with actual last modified date logic
//           changeFrequency: 'weekly',  // Typically "daily" for frequently updated content
//           priority: 0.7,             // You can adjust the priority based on your needs
//           alternates: {
//             languages: langUrl(`${getBaseUrl()}/:lang/${fullPath}`)
//           }
//         };
//       }

//       // If the path has children, recursively generate their URLs
//       if (path.children) {
//         const childURLs = generateSitemapURLs(path.children, fullPath + '');
//         urlObject = { ...urlObject, ...childURLs };
//       }
//     }
//   });

//   return urlObject;
// }

// const sitemap = generateSitemapURLs(paths); 
const ROUTE = generateURLs(paths);

// export const URLS = Object.values(sitemap);
export default ROUTE;
