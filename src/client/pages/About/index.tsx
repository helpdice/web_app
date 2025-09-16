import React from 'react';
import SectionHeader from '../../components/Common/SectionHeader';
import * as pkg from 'react-helmet-async';
// import { metaTags } from '../../utils/meta';
// import { getTranslations, setRequestLocale } from 'next-intl/server';
// import { Box, Database, Layout, Settings } from '@helpdice/icons';

// type AboutUsPageProps = {
//   params: { locale: string }
// }

// export async function generateMetadata(props: AboutUsPageProps) {
//   const { locale } = props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'About',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }

export default function About() {
  // const { locale } = props.params;
  // console.log(locale);
  // setRequestLocale(locale);
  const { Helmet } = pkg;

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="We are a team of passionate individuals dedicated to creating amazing software." />
      </Helmet>
      <section className="py-20 lg:py-25 xl:py-30 px-15 lg:px-25 xl:px-30">
        <SectionHeader headerInfo={{
          title: "About Helpdice",
          description: (
            <div className="mx-3 px-4">
              <div className="sec-title">
                <span className="title"></span>
                <h2></h2>
              </div>
              <div className="text">
                We at{' '}
                <a href="/">
                  <b>Helpdice</b>
                </a>
                , since last 5 years. We are here to provide top notch business
                solution across the Globe. <br />
                IT consultation for your website or web application that helps you
                to make your website look attractive & efficient in handling by
                creating usefull apis thats you need.
              </div>
              <div className="text">
                We are here to serve you next level tutorial that currently in
                trend to match you with your expertise. <br />
                Helpdice is a learning website where you can find many good
                quality content related to various categories.
              </div>
            </div>
          ),
          subtitle: "We are Creative Tech Enthusiast working since 2019"
        }} />
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center dark:text-gray-500">Building Stronger Communities through Collaboration and Empowerment</h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p>
                </div>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 dark:bg-gray-700 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                </button>
              </div>
              <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
            </div>
          </div>
        </section>
        <section className="">
          <div className="py-12 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="lg:text-center">
                <h2
                  className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                  Why choose us?
                </h2>
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 dark:text-gray-500 sm:text-4xl">
                  We know tech, we know finance. We are fintech experts.
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                  We know how to handle taxation for all the
                  countried we operate in. We care for our customers and help them manage cashflows.
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        {/* <Settings /> */}
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-400">Powerful API</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Our powerful API enables seamless integration, offering robust functionality, scalability, and efficiency to enhance your digital solutions.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        {/* <Box /> */}
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-400">Easy to integrate
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Our solution is easy to integrate, offering simple setup, seamless compatibility, and quick implementation for enhanced user experience.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        {/* <Database /> */}

                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-400">Low Transaction Cost
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500"> Enjoy reduced transaction costs with our efficient system, providing affordable solutions that maximize your profitability and streamline financial processes.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        {/* <Layout /> */}

                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-400">Powerful Dashboard
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500"> Our powerful dashboard offers real-time insights, intuitive controls, and customizable features to optimize decision-making and streamline operations effectively.
                    </dd>
                  </div>
                </dl>
              </div>

            </div>
          </div>
        </section>
        <br />
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto px-6 p-6">
              <div className="mb-16 text-center">
                <h4 className="text-base text-primary dark:text-gray-200 font-semibold tracking-wide uppercase">Features</h4>
                <p className="mt-2 text-5xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-500">How we change the game

                </p>
              </div>
              <div className="flex flex-wrap my-12">
                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                  <div className="flex items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                      fill="currentColor" className="h-6 w-6 text-primary dark:text-white">
                      <path
                        d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                      </path>
                    </svg>
                    <div className="ml-4 text-xl">Increase sales</div>
                  </div>
                  <p className="leading-loose text-gray-500">
                    Boost your revenue with targeted strategies, optimized tools, and enhanced customer engagement, driving increased sales and sustainable business growth.
                  </p>
                </div>



                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                  <div className="flex items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                      fill="currentColor" className="h-6 w-6 text-primary dark:text-white">
                      <path
                        d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                      </path>
                    </svg>
                    <div className="ml-4 text-xl">Enterprise-ready</div>
                  </div>
                  <p className="leading-loose text-gray-500">
                    Our solution is enterprise-ready, offering scalability, security, and seamless integration to meet the complex needs of large organizations.
                  </p>
                </div>



                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                  <div className="flex items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                      fill="currentColor" className="h-6 w-6 text-primary dark:text-white">
                      <path
                        d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                      </path>
                    </svg>
                    <div className="ml-4 text-xl">Unlimited growth</div>
                  </div>
                  <p className="leading-loose text-gray-500">
                    Unlock unlimited growth potential with scalable solutions, innovative strategies, and advanced tools designed to adapt and expand your business.
                  </p>
                </div>



                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                  <div className="flex items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                      fill="currentColor" className="h-6 w-6 text-primary dark:text-white">
                      <path
                        d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                      </path>
                    </svg>
                    <div className="ml-4 text-xl">Recommended by experts</div>
                  </div>
                  <p className="leading-loose text-gray-500">
                    Our solution is highly recommended by industry experts for its reliability, performance, and ability to deliver exceptional results.
                  </p>
                </div>



                <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                  <div className="flex items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                      fill="currentColor" className="h-6 w-6 text-primary dark:text-white">
                      <path
                        d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                      </path>
                    </svg>
                    <div className="ml-4 text-xl">Modern platform</div>
                  </div>
                  <p className="leading-loose text-gray-500">
                    Our modern platform combines cutting-edge technology, user-friendly design, and seamless integration to drive innovation and enhance business efficiency.
                  </p>
                </div>



                <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                  <div className="flex items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                      fill="currentColor" className="h-6 w-6 text-primary dark:text-white">
                      <path
                        d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                      </path>
                    </svg>
                    <div className="ml-4 text-xl">Integrations</div>
                  </div>
                  <p className="leading-loose text-gray-500">
                    Our solution offers seamless integrations with various platforms, ensuring smooth data exchange, enhanced workflows, and improved operational efficiency.
                  </p>
                </div>



              </div>
            </div>
          </div>
        </section>
        <section id="features" className="relative block px-6 py-10 md:py-10 md:px-10 bg-white dark:bg-gray-900">
          <div className="relative mx-auto max-w-5xl text-center">
            <h2
              className="block w-full text-gray-800 font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-3xl sm:text-4xl dark:text-gray-500">
              Expanding Innovation & Technology
            </h2>
            <br />
            <p
              className="mx-auto my-4 w-full max-w-3xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              <span>
                We works to provide desired business solutions across the Globe,
                making business managemnt smooth and efficient. We works on UI/UX and functionality as well so that a plugins
                comes with proper stucture & stunning looks which suits to your
                web app & website. We take a small toolkit here and ride it well so that it is fit
                for your use. One who performs well and looks even better.
              </span>
              <br />
              <span>
                Here we are trying to give you all kinds of technical content,
                whether it is related to designing or functionality. We are
                creating content on a lot of languages and will
                continue to make it free of cost even if you use it without any
                problem. Here you can also share the content you create, if our technical
                team likes it, then we will also share it on our blog. In the end, I would say keep visiting our website and enjoy the
                quality content.
              </span>
            </p>
          </div>


          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-neutral-800 bg-white dark:bg-neutral-900/50 p-8 text-center shadow">
              <div className="text-white dark:button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24"
                  height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                  <line x1="17" y1="17" x2="17" y2="17.01"></line>
                </svg>
              </div>
              <h3 className="mt-6 text-gray-400">Customizable</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Tailor your landing page&apos;s
                look
                and feel, from the color scheme to the font size, to the design of the page.
              </p>
            </div>


            <div className="rounded-md border border-neutral-800 bg-white dark:bg-neutral-900/5 p-8 text-center shadow">
              <div className="text-white dark:button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24"
                  height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                </svg>
              </div>
              <h3 className="mt-6 text-gray-400">Fast Performance</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">We build our templates for
                speed in mind, for super-fast load times so your customers never waver.
              </p>
            </div>


            <div className="rounded-md border border-neutral-800 bg-white dark:bg-neutral-900/5 p-8 text-center shadow">
              <div className="text-white dark:button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24"
                  height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                  <polyline points="12 8 7 3 3 7 8 12"></polyline>
                  <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                  <polyline points="16 12 21 17 17 21 12 16"></polyline>
                  <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                </svg>
              </div>
              <h3 className="mt-6 text-gray-400">Fully Featured</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                Everything you need to
                succeed
                and launch your landing page, right out of the box. No need to install anything else.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
            style={{ backgroundImage: 'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}>
          </div>
          <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
            style={{ backgroundImage: 'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}>
          </div>

        </section>
      </section>
    </>
  );
}
