import React, { useMemo } from 'react';
// import { Category } from '../../../types/category';
import { useParams } from 'react-router-dom';
import { useAllQnas, useQna, useQnaCategories } from '../../../services/qna.services';
import * as pkg from 'react-helmet-async';
import QnaPost from './body';

// const title =
//   slug === q.category.slug
//     ? `${q.category.name} QNA | Helpdice`
// : q.question.length <= 46
//   ? `${q.question.substring(0, 49)} - Helpdice`
//   : `${q.question.substring(0, 46)}... - Helpdice`;

// const description =
//   slug === q.category.slug
//     ? `QNAs based on ${q.category.name} provided by Helpdice to enhance and test deep knowledge of the topic.`
//     : `${title} : ${q.answer}`;

// const keywords =
//   slug === q.category.slug
//     ? `Question and answers in ${q.category.name}, ${q.category.name} Important Questions and answers, Solved QNAs for ${q.category.name}, ${q.category.name} Questions with answers PDF download`
//     : `${q.question}`;

// return {
//   title,
//   description,
//   keywords,
// };
// }

export default function QnaSinglePage() {
  const { Helmet } = pkg;
  const { slug } = useParams();
  const { isLoading, isError, data } = useQna(slug!);
  const { data: QNA, metaTags } = useMemo(() => {
    if (!isLoading && !isError && data) {
      const title = data.question.length <= 46
        ? `${data.question.substring(0, 49)} - Helpdice`
        : `${data.question.substring(0, 46)}... - Helpdice`;
      const description = `${title} : ${data.answer}`;
      const keywords = `${data.question}`;
      return {
        data,
        metaTags: {
          title,
          description,
          keywords,
        }
      };
    }
    return {};
  }, [isLoading, isError, data]);

  const { isLoading: isLoadingCategories, isError: isCategoriesErrors, data: categories } = useQnaCategories();
  const CATEGORIES = useMemo(() => {
    if (!isLoadingCategories && !isCategoriesErrors && categories) {
      // console.log(categories);
      return categories;
    }
    return [];
  }, [isLoadingCategories, isCategoriesErrors, categories]);

  const { isLoading: isQnasLoading, isError: isQnasError, data: qnas } = useAllQnas();
  const QNAS = useMemo(() => {
    if (!isQnasLoading && !isQnasError && qnas) {
      return qnas;
    }
    return [];
  }, [isQnasLoading, isQnasError, qnas]);

  return (
    <>
      <Helmet>
        <title>{metaTags?.title}</title>
        <meta name="description" content={metaTags?.description} />
        <meta name="keywords" content={metaTags?.keywords} />
      </Helmet>
      <QnaPost data={{
        qna: QNA,
        categories: CATEGORIES,
        qnas: QNAS
      }} />
    </>
  );
}
