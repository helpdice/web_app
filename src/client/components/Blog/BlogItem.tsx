import React from "react";
import { Blog } from "../../types/blog";
import { humanTime } from "../../utils/helpers";
import { getUrl } from "../../utils/routes";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { title, metadata, description, category, slug } = blog;

  const desc = metadata ?? description;
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white border border-gray-200 p-4 pb-5 shadow-solid-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <article className="flex flex-col">
          <div className="flex justify-between items-center mb-5 text-gray-500">
            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              {/* <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> */}
              <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
              Article
            </span>
            <span className="text-sm">{humanTime(new Date(blog.createdAt), true)}</span>
          </div>
          <div className="flex-1">
            {/* {image !== undefined && (
              <Link to={`/blog/`} className="relative block aspect-[368/239]">
                <img src={image} alt={title} />
              </Link>
            )} */}
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to={`/article/${slug}`}>
              {`${title.slice(0, 40)}${title?.length > 40 ? '...' : ''}`}
            </Link></h2>
            {desc && (
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{`${desc.slice(0, 85)}${desc.length > 85 ? '...' : ''}`}</p>
            )}
          </div>
          <div className="block mt-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                <span className="text-sm dark:text-white">
                  Admin
                </span>
              </div>
              <a href={`/article/${slug}`} className="inline-flex items-center text-base text-primary-600 dark:text-primary-500 hover:underline">
                Read more
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </article>
      </motion.div>
    </>
  );
};

export default React.memo(BlogItem);