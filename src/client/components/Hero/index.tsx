// import { Auth } from '@helpdice/sdk';
import { Auth } from '@helpdice/sdk';
import { FormWrapper, Spinner, type FormikHelpers, type FormikValues } from '@helpdice/ui';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Hero = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🔥Your Trusted Partner in Excellence.
            </h4>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Services We Offer {'   '}
              {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                SaaS
              </span> */}
            </h1>
            <p>
              We try to deliver all range of services, starting from
              development, education and also hardware & software installation.
              We believe that one cannot be taken away from Websites, Apps,
              Computers and IT.
            </p>

            <div className="mt-10">
              <FormWrapper
                initialValues={{
                  email: "",
                  trial: true
                }}
                // validationSchema={}
                onSubmit={function (
                  values: FormikValues,
                  { resetForm }: FormikHelpers<FormikValues>
                ): void | Promise<any> {
                  return Auth.signUp(values,
                    {
                      onFetching() {
                        setLoading(true);
                      },
                      onSuccess: (response: any) => {
                        setLoading(false);
                        resetForm();
                        toast.success(response?.data?.message);
                      },
                      onError(error: any) {
                        setLoading(false);
                        toast.error(error?.message)
                      }
                    });
                }}
              >
                {({ handleChange, handleSubmit, values }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-wrap gap-5">
                        <input
                          value={values.email}
                          onChange={handleChange}
                          type="text"
                          name="email"
                          required
                          autoComplete="off"
                          placeholder="Enter your email address"
                          className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                        />
                        <button
                          type="submit"
                          aria-label="get started button"
                          className="flex items-center justify-center cursor-pointer rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                        >
                          {loading ? <Spinner /> : 'Get Started'}
                        </button>
                      </div>
                    </form>
                  )
                }}
              </FormWrapper>

              <p className="mt-5 text-black dark:text-white">
                Your Email, Your Gateway to a Better Experience!
              </p>
            </div>
          </div>

          <div className="animate_right hidden md:w-1/2 lg:block">
            <div className="relative 2xl:-mr-7.5">
              <img
                src="/images/shape/shape-01.png"
                alt="shape"
                width={46}
                height={246}
                className="absolute -left-11.5 top-0"
              />
              <img
                src="/images/shape/shape-02.svg"
                alt="shape"
                width={36.9}
                height={36.7}
                className="absolute bottom-0 right-0 z-10"
              />
              <img
                src="/images/shape/shape-03.svg"
                alt="shape"
                width={21.64}
                height={21.66}
                className="absolute -right-6.5 bottom-0 z-1"
              />
              <div className=" relative aspect-[700/444] w-full">
                <img
                  className="shadow-solid-l dark:hidden"
                  src="/images/hero/hero-light.svg"
                  alt="Hero"
                />
                <img
                  className="hidden shadow-solid-l dark:block"
                  src="/images/hero/hero-dark.svg"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
