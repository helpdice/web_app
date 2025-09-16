import React, { useMemo } from 'react';
import ServicesHero from '../ServicesHero';
import SectionSteps from '../../../components/Common/SectionStep';
import Products from '../../../components/Shop/product';
import SectionFaq from '../../../components/Common/SectionFaq';
import ListItem from '../../../components/Common/ListItem';
// import { Helmet } from 'react-helmet-async';
// import { metaTags } from '../../../utils/meta';
import { useProducts } from '../../../services/product.services';

export default function SEO() {
  const { isLoading: isProductsLoading, isError: isProductsError, data: products } = useProducts('seo');
  const PRODUCTS = useMemo(() => {
    if (!isProductsLoading && !isProductsError && products) {
      return products;
    }
    return [];
  }, [isProductsLoading, isProductsError, products]);
  return (
    <>
      {/* <Helmet>
        <title>{metaTags.seo.meta_title}</title>
        <meta name="description" content={metaTags.seo.meta_description} />
      </Helmet> */}
      <section className="py-20 lg:py-25 xl:py-30 px-15 lg:px-25 xl:px-30">
        <ServicesHero heading="Search Engine Optimization" description={(
          <p>
            Search engine optimization (SEO) is the process of optimizing your
            online content, so your targeted audience and potential clients
            can find you on the web. Most people start searching online using
            a search engine, and the majority use Google. We know the first
            five results generally get 67% of all clicks, so it&apos;s vital you
            are visible and near the top - actually, we always aim for the
            top!
            <br />
            <br />
            If you are not on page one, your chances of being discovered
            online are slim. Getting to the top of Google means investing time
            and money for most businesses and industries. Maintaining that top
            spot also requires constant work and effort. But being there is
            golden and comes with rewards.{' '}
          </p>
        )} />
        <SectionSteps heading="Our SEO Techniques" steps={[
          {
            name: "On-Page Optimization",
            description: `Our team of SEO experts will help you improve your website's
            visibility by optimizing your content, keywords, titles, meta
            descriptions, and more. We will also optimize your website for
            mobile devices, giving you an edge over your competition.`
          },
          {
            name: "Keyword Research",
            description: `We research to find out which keywords are most used by your target
            market and incorporate them into the relevant pages to lift your
            visibility on Google and other search engines. We focus on keywords
            that boost visitor numbers and drive sales and engagement.`
          },
          {
            name: "Winning content strategies",
            description: `Content is so essential for the success of your business. Firstly it
            helps your clients find your website. After they visit your site,
            the goal is to keep them engaged on the site and motivated to take
            the next step,`
          },
          {
            name: "Directory Listing",
            description: `We gather links from various authoritative resources such as trade
            associations and niche directories and make connections so you can
            reach a bigger audience.`
          },
          {
            name: "Link Building",
            description: `We contact relevant authoritative websites and blogs for linking
            opportunities. This gives your site power and stability and helps
            you get ahead of your competition.`
          },
          {
            name: "Social Media Marketing",
            description: `Top ranking sites consistently use social media to boost their
            online search visibility. It is essential for all businesses in the
            modern world.`
          }
        ]} />
        <br />
        <br />
        <Products products={PRODUCTS} />
        <SectionFaq faqs={[
          {
            question: "What is your SEO philosophy?",
            answer: (
              <div>
                We stay up-to-date with the latest Google changes and
                advancements to make sure your site is ranked as highly as
                possible and reaching your target market. We tackle SEO from all
                sides when designing strategies for the best results.
                <ul className="ml-5 mt-4">
                  <ListItem><b>Technical SEO</b> : considers code, site structure, site
                    speed, and other metrics that impact search traffic. During
                    a technical SEO review, we ensure search engines can crawl
                    your site and its content. Also, we review 404 errors and
                    analyze redirects.
                  </ListItem>
                  <ListItem><b>User experience (UX)</b> : is the optimization of the
                    content of your digital properties. During an on-page SEO
                    review, we analyze user-facing aspects of your site,
                    including content, navigation, and keyword optimization.
                  </ListItem>
                  <ListItem><b>Off-page SEO</b> : improves your SEO presence by gaining
                    links, strengthening the brand online, and improving the
                    popularity of the site and content. To execute off-page SEO
                    campaigns, we identify opportunities to increase your domain
                    and page authority through incoming links to your site from
                    other high-quality properties.
                  </ListItem>
                </ul>
              </div>
            )
          },
          {
            question: "How do you choose target keywords?",
            answer: (
              <p>
                Successful SEO drives traffic that is targeted to your market.
                We aim to drive relevant traffic to your site through the use of
                the right keywords. There is no point in driving traffic that is
                no likely to convert to sales or business for your company. By
                understanding your business goals and the client&apos;s needs, we can
                identify the right keywords to use. Other factors such as
                competition level come into play too.
              </p>
            )
          },
          {
            question: "When will we see results?",
            answer: (
              <p>
                Effective SEO takes time, so you won&apos;t see overnight results.
                Expect to see impressive results within 3-6 months.
              </p>
            )
          },
          {
            question: "What do you need from us to be effective?",
            answer: (
              <p>
                To achieve long-term success, we need to know about your
                audience, industry, goals, and KPIs. Please give us a list of
                digital marketing platforms you&apos;re using, such as marketing
                automation. We also need access to your Google analytics to have
                a deep understanding of your business.
              </p>
            )
          },
          {
            question: "How should SEO be incorporated into our marketing strategy?",
            answer: (
              <p>
                You should be thinking about SEO whenever you create content,
                launch marketing and public relations campaigns and are active
                on social media. It is all linked, and when you are aware of SEO
                and can incorporate it into your marketing strategy, you have a
                potent recipe for success. We are very open to collaborating
                with any marketing teams to strengthen your online success.
              </p>
            )
          },
          {
            question: "Can you guarantee specific results ?",
            answer: (
              <p>
                We see this promise being made in our industry and confidently
                tell you nobody can make that guarantee. We can predict likely
                results and forecast goals we aim to achieve through scenarios
                based on your budget, your specific strategy, and your
                competition.
              </p>
            )
          }
        ]} />
      </section>
    </>
  );
}
