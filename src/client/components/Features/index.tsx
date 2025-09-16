import React from 'react';
import SectionHeader from '../Common/SectionHeader';
import featuresData from './featuresData';
import SingleFeature from './SingleFeature';

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: 'OUR FEATURES',
              subtitle: 'Discover the Features that Set Us Apart.',
              description: `"At Helpdice, we’re dedicated to bringing you the best in innovation with a range of powerful, user-friendly features. Our tools are designed to simplify your life and enhance your experience, whether you're looking for efficiency, convenience, or customization."`,
            }}
          />
          {/* <!-- Section Title End --> */}
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}
            {featuresData.map((feature) => (
              <SingleFeature feature={feature} key={feature.title} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default React.memo(Feature);
