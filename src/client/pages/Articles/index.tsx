import React, { lazy, Suspense, useMemo } from "react";
// import "./index.scss";
if (import.meta.env.SSR === false) {
  import('./index.scss');
}
import type { Blog } from "../../types/blog";
import SearchBar from "../../components/SearchBar";
import { useArticles } from "../../services/article.services";
import { Loader } from "@helpdice/icons";
import { useParams, useSearchParams } from "react-router-dom";
import * as pkg from "react-helmet-async";
import { metaTags } from "../../utils/meta";

const BlogItem = lazy(() => import('../../components/Blog/BlogItem'));

export default function Articles() {
  const { Helmet } = pkg;
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  let categories: any[] = [];

  const { isLoading, isError, data } = useArticles(undefined, searchParams.get('search') ?? undefined);
  const { flattened: ARTICLES, mTags } = useMemo(() => {
    const listOfArticles: Blog[] = [];
    if (!isLoading && !isError && data) {
      // console.log(data);
      if (data?.pages?.length > 0) {
        data.pages.forEach((group) => {
          listOfArticles.push(group.articles);
        });
      }
    }
    const flattened = listOfArticles.flat();
    return {
      flattened,
      mTags: {
        title: category ? '' : metaTags.articles.meta_title,
        description: category ? '' : metaTags.articles.meta_description,
        keywords: ''
      }
    };
  }, [isLoading, isError, data, category]);

  return (
    <>
      <Helmet>
        <title>{metaTags.articles.meta_title}</title>
        <meta name="description" content={metaTags.articles.meta_description} />
        {/* <meta name="keywords" content={mTags.keywords} /> */}
      </Helmet>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-8 lg:py-10 xl:py-15">
        <div className="max-w-c-1280 mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">
          <SearchBar placeholder="Search Article..." categories={categories} />
          <br />
          <br />
          <div className="grid grid-cols-1 gap-6.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {ARTICLES.map((post, key) => (
              <Suspense key={`${key}-${post._id}`} fallback={<Loader />}>
                <BlogItem blog={post} />
              </Suspense>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
