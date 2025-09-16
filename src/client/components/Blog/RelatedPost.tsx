import React, { useMemo } from "react";
import { Link } from 'react-router-dom'
import type { Blog } from "../../types/blog";
import { getUrl } from "../../utils/routes";
import { useAllArticles } from "../../services/article.services";
// import { Content } from "@helpdice/sdk";

const RelatedPost = () => {
  const { isLoading: isQnasLoading, isError: isQnasError, data: articles } = useAllArticles();
  const ARTICLES: Blog[] = useMemo(() => {
    if (!isQnasLoading && !isQnasError && articles) {
      return articles;
    }
    return [];
  }, [isQnasLoading, isQnasError, articles]);
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        <div>
          {ARTICLES.slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={`post-${post._id}-${key}`}
            >
              {/* {post?.image ? (
                <div className="max-w-45 relative h-18 w-45">
                  <img fill src={post.image} alt="Blog" />
                </div>
              ) : null} */}
              <h5 className="text-sm font-medium text-black transition-all duration-300 hover:text-primary dark:text-gray-400 dark:hover:text-white">
                <Link to={`/article/${post.slug}`}>
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
