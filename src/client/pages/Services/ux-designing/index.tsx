import React, { useMemo } from 'react';
import ServicesHero from '../ServicesHero';
import SectionSteps from '../../../components/Common/SectionStep';
import ListItem from '../../../components/Common/ListItem';
import SectionFaq from '../../../components/Common/SectionFaq';
// import { Accounting } from '@helpdice/sdk';
// import { cookies } from 'next/headers';
import Products from '../../../components/Shop/product';
// import { Helmet } from 'react-helmet-async';
// import { metaTags } from '../../../utils/meta';
import { useProducts } from '../../../services/product.services';

export default function UXDesign() {
  const { isLoading: isProductsLoading, isError: isProductsError, data: products } = useProducts('ux-designs');
  const PRODUCTS = useMemo(() => {
    if (!isProductsLoading && !isProductsError && products) {
      return products;
    }
    return [];
  }, [isProductsLoading, isProductsError, products]);

  return (
    <>
      {/* <Helmet>
        <title>{metaTags.uxDesign.meta_title}</title>
        <meta name="description" content={metaTags.uxDesign.meta_description} />
      </Helmet> */}
      <section className="py-20 lg:py-25 xl:py-30 px-15 lg:px-25 xl:px-30">
        <ServicesHero
          heading=" UI / UX Design"
          description="It does not matter how your company, product or service are
            attractive for the audience, if the logo does not correctly
            reflect your points of strength. An unsuitable company identity
            will attract the wrong audience for your company. Time is precious
            so better not risk wasting it dealing with potential customers
            whom you are not really interested in. This is a relevant problem
            when starting a new business. i elaborated a logo design process,
            which I apply to every project, aiming to make sure that the brand
            can communicate the values and points of strength of the company."
        />
        <br />
        <br />
        <SectionSteps
          heading="UI / UX Design Process"
          description="When it comes to the UX design process, there is no universal standard
            as such. Different companies, agencies, designers and product managers
            follow different approaches, techniques and tools. There are multiple
            stages in the design process as per the methodology you prefer. Our
            approach is inspired by the “Double Diamond” model proposed by the
            British Design Council. Our process include- Discover, Define, Design
            and Deploy."
          steps={[
            {
              name: "Discover",
              description: (
                <div>
                  This is the first stage where we try to understand the needs of the
                  business, stakeholders and its end users. We also evaluate the
                  desired outcomes, KPIs and full scope of the project in this phase.
                  The activities include:
                  <ul className="mt-4">
                    <ListItem text="Stakeholder interviews" />
                    <ListItem text="User research and interviews" />
                    <ListItem text="Business, market and competitor analysis" />
                    <ListItem text="UX Audit (if revamping existing design)" />
                  </ul>
                </div>
              )
            },
            {
              name: "Define",
              description: (
                <div>This is where we will analyse all the inputs, feedbacks,
                  observations and arrange them in order to define the problems and
                  needs to be addressed. The Define stage include:
                  <ul className="mt-4">
                    <ListItem text="Define the User Personas" />
                    <ListItem text="Define the problems" />
                    <ListItem text="Red Route analysis for feature prioritisation" />
                    <ListItem text="User Journey Mapping" />
                  </ul>
                </div>
              )
            },
            {
              name: "Design",
              description: (
                <div>Design stage starts after the client&apos;s approval of our findings and
                  solutions in the Define phase. Design stage starts with quick
                  sketches to iterate and finalize the solutions. The deliverables
                  includes:
                  <ul className="mt-4">
                    <ListItem text="Information architecture" />
                    <ListItem text="Wireframes" />
                    <ListItem text="User Interface design" />
                    <ListItem text="Interactive prototypes" />
                    <ListItem text="Design systems" />
                  </ul>
                </div>
              )
            },
            {
              name: "Deploy",
              description: (
                <div>If the client requires it, we have a dedicated team of inhouse
                  software engineers to deploy the designs created by our team. The
                  services included:
                  <ul className="mt-4">
                    <ListItem text="iOS/Android/Web development" />
                    <ListItem text="Front-end engineering" />
                    <ListItem text="Usability testing" />
                    <ListItem text="Software/bug testing" />
                    <ListItem text="Final deployment (Project live)" />
                  </ul>
                </div>
              )
            }
          ]} />
        <Products products={PRODUCTS} />
        <SectionFaq faqs={[
          {
            question: "What exactly is UX design ?",
            answer: `User experience (UX) design is an umbrella term representing the
                entire process of creating products and services that provide
                intuitive and delightful experience to their users. People
                widely use terms like “UI/UX Design” or “Usability Design” to
                represent User Experience Design. However UI (User Interface)
                Design and Usability Design are subsets of UX Design.`
          },
          {
            question: "How good User Experience can help businesses ?",
            answer: `For any business that delivers its service or product through an
                app or website, UX design is as critical as sales, branding or
                marketing. Because good UX design directly improves the bottom
                line. Even if it is a bank with brick and mortar branches all
                across the country, their app would be the most important
                channel in which customers interact with the business, making UX
                a critical factor influencing customer happiness and revenue.`
          },
          {
            question: "How much a typical UX design project would cost ?",
            answer: `There are multiple factors influencing the cost of a UX design
                project. The factors include scope and scale of the project,
                nature of the project (starting from scratch, revamping existing
                design), platforms (mobile, web, TV, kiosk), technology
                involved, and design services included (user research,
                interviews, testing) and delivery deadline to name a few. It's
                difficult to provide a number upfront without understanding the
                requirements and full scope of the project. We usually charge
                $35 to $50 per hour based on the complexity and size of the
                project.`
          },
          {
            question: "What is the timeline for a UX design project ?",
            answer: `All the factors influencing the cost (scope, complexity,
                platforms, budget, client feedback) will also affect the
                delivery timeline of a UX design project. A typical UX design
                project could go anywhere between 2-3 months to 6 months for a
                small-medium sized project. Bigger projects could take more than
                6 months to 1 year depending on the scope and complexity.`
          },
          {
            question: "What are the UX design deliverables ?",
            answer: (
              <div>
                The deliverables could change based on the requirement and
                nature of the project. Typically we deliver:
                <ul className="ml-5 mt-4">
                  <ListItem text="User-research report" />
                  <ListItem text="UX audit report (if revamping an existing design)" />
                  <ListItem text="Red route analysis" />
                  <ListItem text="User persona" />
                  <ListItem text="Customer journey maps" />
                  <ListItem text="Sitemap" />
                  <ListItem text="Wireframes" />
                  <ListItem text="UI sketches" />
                  <ListItem text="Interactive prototypes" />
                  <ListItem text="Design systems" />
                </ul>
              </div>
            )
          },
          {
            question: "What are the inputs and data the client needs to provide ?",
            answer: (
              <div>
                Usually we kick start every project with a detailed
                brainstorming session with all the stakeholders from the client
                side. These are the details/data we require before the start of
                every project.
                <ul className="ml-5 mt-4">
                  <ListItem text="Business/organisational goals" />
                  <ListItem text="Target audience details" />
                  <ListItem text="Product goals" />
                  <ListItem text="Expected outcomes and KPIs of the project" />
                  <ListItem text="Technical specifications" />
                  <ListItem text="Market research data, if any" />
                  <ListItem text="Previous user experience audit results if any" />
                  <ListItem text="User analytics data, if any" />
                  <ListItem text="Business reports" />
                </ul>
              </div>
            )
          },
          {
            question: `Do you provide support to the application after the product launch ?`,
            answer: `We shall extend our support according to the client's
                requirements. After User Acceptance Testing (UAT), we shall be
                providing support for the next 3 months. If the client has opted
                for an Annual Support Contract (ASC) with us, we are entitled to
                provide our services at any time during the period of contract.`
          }
        ]} />
      </section>
    </>
  );
}
