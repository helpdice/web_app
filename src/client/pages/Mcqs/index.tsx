import React, { useMemo } from 'react';
if (import.meta.env.SSR === false) {
  import('./index.scss');
}
import McqItem from '../../components/MCQ/McqItem';
import type { MCQ } from '../../types/mcq';
import SearchBar from '../../components/SearchBar';
import MCQHeader from './header';
import { Category } from '../../types/category';
import { useMcqCategories, useMcqs } from '../../services/mcq.services';
import * as pkg from 'react-helmet-async';
import { metaTags } from '../../utils/meta';
import { useParams, useSearchParams } from 'react-router-dom';
import RelatedPost from '../../components/Blog/RelatedPost';
import CategoryTree from '../../components/CategoryTree';

// type MCQPageProps = {
//   params: Promise<{ locale: string }>,
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }

// export async function generateMetadata(props: MCQPageProps) {
//   const { locale } = await props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'MCQ',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//     keywords: t('meta_keywords'),
//   };
// }

export default function MCQPage() {
  const { Helmet } = pkg;
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const { isLoading, isError, data } = useMcqs(category, searchParams.get('search') ?? undefined);
  const { flattened: MCQS, mTags } = useMemo(() => {
    const listOfArticles: MCQ[] = [];
    if (!isLoading && !isError && data) {
      if (data?.pages?.length > 0) {
        data.pages.forEach((group) => {
          listOfArticles.push(group.mcqs);
        });
      }
    }
    const flattened = listOfArticles.flat();
    const first = flattened[0];
    return {
      flattened,
      mTags: {
        title: category ? `${first?.category?.name} MCQ | Helpdice` : metaTags.mcq.meta_title,
        description: category ? `MCQs based on ${first?.category?.name} provided by Helpdice to enhance and test deep knowledge of the topic.` : metaTags.mcq.meta_description,
        keywords: category ? `Question and answers in ${first?.category?.name}, ${first?.category?.name} multiple choice questions and answers, ${first?.category?.name} Important MCQs, Solved MCQs for ${first?.category?.name}, ${first?.category?.name} MCQs with answers PDF download` : ''
      }
    };
  }, [isLoading, isError, data, category]);

  const { isLoading: isLoadingCategories, isError: isCategoriesErrors, data: categories } = useMcqCategories();
    const CATEGORIES = useMemo(() => {
      if (!isLoadingCategories && !isCategoriesErrors && categories) {
        return categories;
      }
      return [];
    }, [isLoadingCategories, isCategoriesErrors, categories]);

  return (
    <>
      <Helmet>
        <title>{mTags.title}</title>
        <meta name="description" content={mTags.description} />
        <meta name="keywords" content={mTags.keywords} />
      </Helmet>
      <section className="py-20 lg:py-25 xl:py-30">
        <MCQHeader />
        <br />
        <SearchBar categories={[]} />
        <br />
        <br />
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              {/* <SearchBox path="/mcq/" /> */}
              <div className="animate_top border-stroke shadow-solid-5 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-9">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>
                <CategoryTree data={CATEGORIES} path="/mcqs/:category" />
              </div>

              <RelatedPost />
            </div>
            <div className="lg:w-2/3 flex flex-col gap-2">
              {MCQS.map((post, key) => (
                <McqItem key={`mcq-${key}-${post._id}`} blog={post} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-5.5 md:grid-cols-1 lg:grid-cols-2 xl:gap-8">
           
          </div>
        </div> */}
      </section>
    </>
  );
}
