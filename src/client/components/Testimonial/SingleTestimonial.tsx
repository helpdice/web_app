import type { Testimonial } from '../../types/testimonial';
import { Rating } from '@helpdice/ui';
import React from 'react';

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-2.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div className="flex flex-row gap-3 align-center">
          <img style={{ width: 60, height: 60 }} width={60} height={50} className="" src={image} alt={name} />
          <div>
            <h3 className="text-metatitle2 text-black dark:text-white">
              {name}
            </h3>
            <span className="text-sm">{designation}</span>
          </div>
        </div>
        <Rating readOnly type="warning" value={review.rating} />
      </div>
      <p>{content}</p>
    </div>
  );
};

export default SingleTestimonial;
