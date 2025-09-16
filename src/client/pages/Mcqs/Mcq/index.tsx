import React, { useMemo } from "react";
// import { fetchMcq, fetchMcqCategories, fetchMcqs } from '../../api/mcq.services';
// import type { MCQ, MCQListItem } from "../../../types/mcq";
// import MCQHeader from "../header";
// import { Category } from "../../../types/category";
import { useParams } from "react-router-dom";
import { useAllMcqs, useMcq, useMcqCategories } from "../../../services/mcq.services";
import * as pkg from "react-helmet-async";
import McqPost from "./body";


// const McqRelated = lazy(() => import('../../../components/MCQ/McqRelated'));
// const CategoryTree = lazy(() => import('../../../components/CategoryTree'));
// const SharePost = lazy(() => import('../../../components/Blog/SharePost'));

// export async function generateMetadata(props: MCQSingleProps) {
//   // const t = await getTranslations({
//   //   locale: props.params.locale,
//   //   namespace: 'About',
//   // });
//   const { slug, category } = await props.params;
//   if (slug === 'www.helpdice.com') {
//     const _mcq = (await Content.mcq(category)).data.mcq
//     permanentRedirect(`/mcq/${_mcq.category.slug}/${_mcq.slug}`, RedirectType.replace);
//   }
//   const m = (await Content.mcq(slug)).data.mcq;

// const title =
//   slug === m.category?.slug
//     ? `${m.category.name} MCQ | Helpdice`
//     : m.title.length <= 46
//       ? `${m.title.substring(0, 49)} - Helpdice`
//       : `${m.title.substring(0, 46)}... - Helpdice`;

// const description =
//   slug === m.category?.slug
//     ? `MCQs based on ${m.category.name} provided by Helpdice to enhance and test deep knowledge of the topic.`
//     : `${title} A: ${m.option_a}, B: ${m.option_b}`;

// const keywords =
//   slug === m.category?.slug
//     ? `Question and answers in ${m.category.name}, ${m.category.name} multiple choice questions and answers, ${m.category.name} Important MCQs, Solved MCQs for ${m.category.name}, ${m.category.name} MCQs with answers PDF download`
//     : `${m.title}`;

//   return {
//     title,
//     description,
//     keywords
//   };
// }

export default function MCQSinglePage() {
  const { Helmet } = pkg;
  const { slug } = useParams();
  const { isLoading, isError, data } = useMcq(slug!);
  const { data: MCQ, metaTags } = useMemo(() => {
    if (!isLoading && !isError && data) {
      const title = data.title.length <= 46
        ? `${data.title.substring(0, 49)} - Helpdice`
        : `${data.title.substring(0, 46)}... - Helpdice`;
      const description = `${title} A: ${data.option_a}, B: ${data.option_b}`;
      const keywords = `${data.title}`;
      return {
        data,
        metaTags: {
          title,
          description,
          keywords
        }
      };
    }
    return {};
  }, [isLoading, isError, data]);

  const { isLoading: isLoadingCategories, isError: isCategoriesErrors, data: categories } = useMcqCategories();
  const CATEGORIES = useMemo(() => {
    if (!isLoadingCategories && !isCategoriesErrors && categories) {
      return categories;
    }
    return [];
  }, [isLoadingCategories, isCategoriesErrors, categories]);

  const { isLoading: isLoadingMcqs, isError: isMcqsErrors, data: mcqs } = useAllMcqs();
  const MCQS = useMemo(() => {
    if (!isLoadingMcqs && !isMcqsErrors && mcqs) {
      return mcqs;
    }
    return [];
  }, [isLoadingMcqs, isMcqsErrors, mcqs]);

  return (
    <>
      <Helmet>
        <title>{metaTags?.title}</title>
        <meta name="description" content={metaTags?.description} />
        <meta name="keywords" content={metaTags?.keywords} />
      </Helmet>
      <McqPost mcq={{
        mcq: MCQ,
        categories: CATEGORIES,
        mcqs: MCQS
      }} />
    </>
  );
}
