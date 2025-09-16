import React, { useMemo } from 'react';
if (import.meta.env.SSR === false) {
  import('./index.scss');
}
// import RelatedPost from '../../../components/Blog/RelatedPost';
// import type { Blog } from '../../../types/blog';
// import { format } from 'date-fns';
// import { fetchBlog, fetchBlogCategories } from '../../../api/blog.services';
// import type { Category } from '@/types/category';
import { useArticle, useArticleCategories } from '../../../services/article.services';
import { useParams } from 'react-router-dom';
// import { Loader } from '@helpdice/icons';
import * as pkg from 'react-helmet-async';
import BlogPost from './body';

export default function PostPage() {
  const { Helmet } = pkg;
  const { slug } = useParams();
  const { isLoading, isError, data } = useArticle(slug!);
  const { data: ARTICLE, metaTags } = useMemo(() => {
    if (!isLoading && !isError && data) {
      const title = data ? `${data.title.substring(0, 58)}...` : '';
      const description = data ? `${`${data.title} : ${data.description}`}`.substring(0, 157) : '';
      return {
        data,
        metaTags: {
          title,
          description
        }
      };
    }
    return {};
  }, [isLoading, isError, data]);

  const { isLoading: isLoadingCategories, isError: isCategoriesErrors, data: categories } = useArticleCategories();
  const CATEGORIES = useMemo(() => {
    if (!isLoadingCategories && !isCategoriesErrors && categories) {
      return categories;
    }
    return [];
  }, [isLoadingCategories, isCategoriesErrors, categories]);

  return (
    <>
      <Helmet>
        <title>{metaTags?.title}</title>
        <meta name="description" content={metaTags?.description} />
      </Helmet>
      <BlogPost post={{
        article: ARTICLE,
        categories: CATEGORIES
      }} />
    </>
  );
}
