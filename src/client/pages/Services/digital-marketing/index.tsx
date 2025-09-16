import React, { useMemo } from 'react';
import ServicesHero from '../ServicesHero';
import SectionSteps from '../../../components/Common/SectionStep';
import Products from '../../../components/Shop/product';
import SectionFaq from '../../../components/Common/SectionFaq';
// import { Helmet } from 'react-helmet-async';
// import { metaTags } from '../../../utils/meta';
import { useProducts } from '../../../services/product.services';

export default function DigitalMarketing() {
  const { isLoading: isProductsLoading, isError: isProductsError, data: products } = useProducts('digital-marketing');
  const PRODUCTS = useMemo(() => {
    if (!isProductsLoading && !isProductsError && products) {
      return products;
    }
    return [];
  }, [isProductsLoading, isProductsError, products]);

  return (
    <>
      {/* <Helmet>
        <title>{metaTags.socialMarketing.meta_title}</title>
        <meta name="description" content={metaTags.socialMarketing.meta_description} />
      </Helmet> */}
      <section className="py-20 lg:py-25 xl:py-30 px-15 lg:px-25 xl:px-30">
        <ServicesHero heading="Social Media Marketing" description=" There are 3.2 billion daily active social media users in the
              world. Let's reflect on that for a moment. That is approximately
              42% of the world population or nearly half the world. If you are
              not showing up on social media and being active, you are missing
              so many opportunities. People need to see your brand on social
              media, so they are informed about your services and entertained
              and impressed by what they see. Businesses using social media see their ROI (return on investment)
              improve by up to 119%" />

        <SectionSteps heading="Improve Social Media Presence" description="Are you aiming to improve your business brand awareness, gain more
        website traffic and reach new customers? Social media is the way to go.
        Our social media service will help you build a strong presence on social
        media to connect with customers in a real and authentic way." steps={[
            {
              name: "Develop brand awareness and followers",
              description: `Growing your fans and followers on social networks can lead to
            word-of-mouth referrals. Our social media marketing services will
            help increase your followers and reach relevant people in your
            industry and the connected circles. We will ensure that your
            followers match the demographics, interests, and behaviors of your
            typical customers.`
            },
            {
              name: "Build relationships and engagemente",
              description: `When you build a strong connection through engagement with your
            audience, they are more likely to buy from you. We will help you
            increase engagement (likes, comments, and DMs) on your social media
            posts. The more engagement you have, the stronger your connection is
            with your target audience.`
            },
            {
              name: "Increasing website exposure, traffic and conversions",
              description: `Increasing your website traffic will directly influence leads and
            sales. We see the most impressive results when this service is
            teamed up with our social media advertising services. This is like
            following through and taking action with the traffic you have driven
            to your business. You can compare it to smiling shyly at someone or
            walking up to them and greeting them with a warm hello. Let's sit
            and chat and see how I can help you. The person who is approachable
            and assertive is going to make more friends faster than the one who
            is quietly waiting for someone to go to them. To increase
            conversions, we can add-on retargeting social ads to stay in front
            of recent website visitors.`
            }
          ]} />
        <br />
        <Products products={PRODUCTS} />
        <br />
        {/* <h2 className="heading-2">Social Media Platform We Recommend</h2>
      <br />
      <div
        className="social-icons"
        style={{ maxWidth: '60rem', margin: 'auto' }}
      >
        <ol className="list-unstyled">
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-pinterest"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-reddit"
                viewBox="0 0 16 16"
              >
                <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" />
              </svg>
            </Link>
          </li>
        </ol>
      </div> */}
        <br />
        <SectionFaq faqs={[
          {
            question: "Who will be working on my account?",
            answer: `We assign a dedicated social media account manager to every
                business so you are always working with the same person. Our
                staff is trained exceptionally well in all aspects of social
                media, and we do our best to match up managers to industries
                they are familiar with. Your social media account manager will
                know your business brand inside out and be your biggest fan.
                They will check all the copy and content, including video and
                graphics, to ensure your branding is cohesive and on point. We
                tackle SEO from all sides when designing strategies for the best
                results.`
          },
          {
            question: "How will you create content perfect for my business ?",
            answer: `We start with a detailed questionnaire to learn about your
                content expectations and desires. Then we develop a strong
                social media strategy that can be executed with your needs in
                mind. Once you approve the strategy, we will put together a
                social media content calendar to see in advance what you will be
                publishing. You can review all content before it's put online.
                This organization method means you can get ahead of your social
                media posts and take into account upcoming holidays, promotions,
                and other special events.`
          },
          {
            question: "Do I have to provide you with content?",
            answer: `We welcome any content already created but don't worry if you
                need more. Your social media account manager will provide fresh
                content and we have a great team of writers, designers and
                access to stock photography libraries and relevant news sources.
                We can even help you organize photography and video shoots if
                you wish to have an ongoing supply of original content. For
                example, a one-day photoshoot can be planned to take care of
                your image content for many months in advance.`
          },
          {
            question: "How will you grow my followers?",
            answer: `Through organic and paid methods, we grow your loyal followers.
                Some examples of how we increase followers are by researching
                your competitor audience, creating engaging content and engaging
                with your audience. When using a paid approach, we set an
                advertising budget to suit your needs.`
          },
          {
            question: "Do you monitor the pages for comments, followers and other stats?",
            answer: `Yes, your wonderful social media account manager is a ninja when
                it comes to monitoring comments, messages and reviews. We can
                take care of the replies for you and would surely reach out to
                you if we weren't sure how to reply.`
          },
          {
            question: "How soon will we see results?",
            answer: `Results can come quickly with our social media services. For
                example, many businesses post info on Instagram instead of
                engaging with followers by asking them questions. That language
                change, which is an invitation to your followers to chat, can be
                achieved in no time at all.`
          }
        ]} />
      </section>
    </>
  );
}
