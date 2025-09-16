import React, { useMemo } from 'react';
import ServicesHero from '../ServicesHero';
import SectionSteps from '../../../components/Common/SectionStep';
import Products from '../../../components/Shop/product';
import SectionFaq from '../../../components/Common/SectionFaq';
// import { Helmet } from 'react-helmet-async';
// import { metaTags } from '../../../utils/meta';
import { useProducts } from '../../../services/product.services';

export default function AppDevelopment() {
  const { isLoading: isProductsLoading, isError: isProductsError, data: products } = useProducts('app-development');
  const PRODUCTS = useMemo(() => {
    if (!isProductsLoading && !isProductsError && products) {
      return products;
    }
    return [];
  }, [isProductsLoading, isProductsError, products]);
  return (
    <>
      {/* <Helmet>
        <title>{metaTags.appDevelopment.meta_title}</title>
        <meta name="description" content={metaTags.appDevelopment.meta_description} />
      </Helmet> */}
      <section className="py-20 lg:py-25 xl:py-30 px-15 lg:px-25 xl:px-30">
        <ServicesHero heading="App Development Services" description={(
          <div>
            <p>
              Mobile app development services focus on creating applications for mobile devices, such as smartphones and tablets. These services include designing, coding, and testing apps for iOS and Android platforms, ensuring compatibility with various devices. Developers use frameworks like React Native or Swift to deliver high-performing and user-friendly mobile apps tailored to clients&apos; needs.</p>
            <span>
              Web app development services specialize in creating dynamic applications that run on web browsers. These services include building responsive, scalable, and secure web apps using technologies such as HTML, CSS, JavaScript, and frameworks like Angular or Vue.js. Developers ensure that web apps deliver a seamless user experience across different browsers and devices while maintaining high performance and security standards.
            </span>
          </div>
        )} />
        <br />
        <SectionSteps heading="Web Design Process" steps={[
          {
            name: "Initial Contact",
            description: (
              <p>
                Please get in touch with us about your project idea! and
                requirements.{' '}
                <button>
                  <a
                    href="mailto:sales@helpdice.com?Subject=Enquiry"
                    target="_top"
                  >
                    EMAIL US
                  </a>
                </button>
              </p>
            )
          },
          {
            name: "Analysis",
            description: (
              <p>
                By consultation and analysis, we develop a clear vision of the
                goals of the project.
              </p>
            )
          },
          {
            name: "Planning",
            description: (
              <p>
                The website developer creates the layout and design for the
                site.
              </p>
            )
          },
          {
            name: "Design",
            description: (
              <p>
                All the visual content, including images, photos, graphics and
                videos are created.
              </p>
            )
          },
          {
            name: "Content",
            description: (
              <p>
                We enhance your existing content, re-write headlines and create
                fresh content.
              </p>
            )
          },
          {
            name: "Deployment",
            description: (
              <p>
                Turn the design into a functional website. Deployment is
                cyclical with Evolutionary Development, as the project moves
                back and forth between stages.
              </p>
            )
          },
          {
            name: "Testing",
            description: (
              <p>
                Ensure the website is functional, user-friendly, and compatible
                across devices and browsers.
              </p>
            )
          },
          {
            name: "Launch and Maintenance",
            description: "Make the website live and keep it updated."
          },
          {
            name: "Post Project",
            description: (
              <p>
                All of our projects incorporate consideration of long-term
                hosting and maintenance needs. The individual project
                requirements are outlined in the project&apos;s Service Level
                Agreement, and we will contact you toward the end of this period
                to discuss the future of your project.
              </p>
            )
          }
        ]} />
        <br />
        <Products products={PRODUCTS} />
        <br />
        <SectionFaq faqs={[
          {
            question: "Can you design a website that fits my budget ?",
            answer: (
              <p>
                Please let us know if you have a set budget and we will do our
                best to customize a value-for-money package for your business.
                We will quote you before work is started and also consult with
                you if we anticipate increased costs.
              </p>
            )
          },
          {
            question: `How long will it take to complete my website design and
                development?`,
            answer: (
              <p>
                When we send you the quote, we will give an estimated completion
                date, which varies depending on the work required. Most sites
                take 2-4 weeks to finish if we have all the necessary
                information and content.
              </p>
            )
          },
          {
            question: `Do you follow SEO best practices when building the site?`,
            answer: (
              <p>
                We are big on SEO because it goes hand-in-hand with great
                website design. You need strong SEO so clients can find your
                website. We use proven SEO strategies, including image
                optimization, alt tagging, mobile-friendliness and keyword
                research help your site rank higher on Google and other search
                engines.
              </p>
            )
          },
          {
            question: `Do I own the site and site contents after it goes live?`,
            answer: (
              <p>
                Yes, the site is 100% yours. We assist with domain name
                registration and web hosting under your name and give you all
                the login details so you have full control of your site. We
                offer continued support, including website updates if required.
                We would love to have an ongoing business relationship with you
                but understand if you prefer to go solo after we complete the
                work. You will have the right to use graphics such as logos
                created by our designer for your website.
              </p>
            )
          },
          {
            question: `Do you monitor the pages for comments, followers and other stats
                ?`,
            answer: (
              <p>
                Yes, your wonderful social media account manager is a ninja when
                it comes to monitoring comments, messages and reviews. We can
                take care of the replies for you and would surely reach out to
                you if we weren&apos;t sure how to reply.
              </p>
            )
          },
          {
            question: `What do you need from me before we start the project?`,
            answer: (
              <p>
                The more information we have, the better. Gather your photos,
                graphics, videos, written content and brand materials (logo,
                fonts and colors) and any ideas or vision you have for your new
                website. Once we collect the data, we check your content is
                relevant to the market you are targeting and SEO optimized. We
                also analyze images to make sure they deliver the right message
                and fit the design. If needed, we offer professional photography
                and videography services to make your business stand out from
                your competition.
              </p>
            )
          },
          {
            question: `What kind of research will you do on our business?`,
            answer: (
              <p>
                We consult with the business owner or manager to clearly
                understand the message you want to send to clients online. We do
                in-depth research of your business online, including your
                competition, to evaluate what is working, what needs to be
                improved and what needs to be created. Most companies need work
                done in all three key areas. Identifying the goal is key (the
                analysis step mentioned above). We find out who your ideal
                market is and build a profile to refer to as we create the
                design and branding for your new website. Understanding your
                clients, industry and audience is key to building a successful
                website. We do the groundwork at the beginning to get the best
                results.
              </p>
            )
          },
        ]} />
      </section>
    </>
  );
}
