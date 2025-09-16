import React from "react";

import { Link } from "react-router-dom";

export const Sponsors = () => (
  <table className="border-collapse">
    <tbody>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <Link
            to="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/assets/images/clerk-logo-dark.png"
              alt="Clerk – Authentication & User Management for Next.js"
              width={260}
              height={224}
            />
          </Link>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <Link to="https://l.crowdin.com/next-js" target="_blank" rel="noopener">
            <img
              src="/assets/images/crowdin-dark.png"
              alt="Crowdin"
              width={260}
              height={224}
            />
          </Link>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <Link
            to="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/assets/images/sentry-dark.png"
              alt="Sentry"
              width={260}
              height={224}
            />
          </Link>
        </td>
      </tr>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <Link to="https://launch.arcjet.com/Q6eLbRE">
            <img
              src="/assets/images/arcjet-light.svg"
              alt="Arcjet"
              width={260}
              height={224}
            />
          </Link>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <Link
            to="https://posthog.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
            target="_blank"
            rel="noopener"
          >
            <img
              src="https://posthog.com/brand/posthog-logo.svg"
              alt="PostHog"
              width={260}
              height={224}
            />
          </Link>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <Link
            to="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/assets/images/better-stack-dark.png"
              alt="Better Stack"
              width={260}
              height={224}
            />
          </Link>
        </td>
      </tr>
      <tr className="h-56">
        <td className="border-2 border-gray-300 p-3">
          <Link
            to="https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/assets/images/checkly-logo-light.png"
              alt="Checkly"
              width={260}
              height={224}
            />
          </Link>
        </td>
        <td className="border-2 border-gray-300 p-3">
          <Link to="https://nextjs-boilerplate.com/pro-saas-starter-kit">
            <img
              src="/assets/images/nextjs-boilerplate-saas.png"
              alt="Next.js SaaS Boilerplate"
              width={260}
              height={224}
            />
          </Link>
        </td>
      </tr>
    </tbody>
  </table>
);
