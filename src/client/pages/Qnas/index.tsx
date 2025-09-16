import React, { useMemo } from 'react';
import type { QNA } from '../../types/qna';
import QNAItem from '../../components/QNA/QNAItem';
import SearchBar from '../../components/SearchBar';
import QNAHeader from './header';
import { useQnas } from '../../services/qna.services';
import * as pkg from 'react-helmet-async';
import { metaTags } from '../../utils/meta';
import { useParams, useSearchParams } from 'react-router-dom';

export default function Qnas() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, isError, data } = useQnas(undefined, searchParams.get('search') ?? undefined);
  const { flattened: QNAS, mTags } = useMemo(() => {
    const listOfArticles: QNA[] = [];
    if (!isLoading && !isError && data) {
      // console.log(data);
      if (data?.pages?.length > 0) {
        data.pages.forEach((group) => {
          listOfArticles.push(group.qnas);
        });
      }
    }
    const flattened = listOfArticles.flat();
    const first = flattened[0];
    return {
      flattened,
      mTags: {
        title: category ? `${first.category.name} QNA | Helpdice` : metaTags.qna.meta_title,
        description: category ? `QNAs based on ${first.category.name} provided by Helpdice to enhance and test deep knowledge of the topic.` : metaTags.qna.meta_description,
        keywords: category ? `Question and answers in ${first.category.name}, ${first.category.name} Important Questions and answers, Solved QNAs for ${first.category.name}, ${first.category.name} Questions with answers PDF download` : ''
      }
    };
  }, [isLoading, isError, data, category]);

  const categories: any[] = [];

  const { Helmet } = pkg;

  return (
    <>
      <Helmet>
        <title>{mTags.title}</title>
        <meta name="description" content={mTags.description} />
        <meta name="keywords" content={mTags.keywords} />
      </Helmet>
      <section className="py-20 lg:py-25 xl:py-30">
        <QNAHeader />
        <br />
        <br />
        <SearchBar categories={categories} />
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-5.5 md:grid-cols-1 lg:grid-cols-2 xl:gap-8">
            {QNAS.map((qna, key) => (
              <QNAItem key={`qna-${key}-${qna._id}`} qna={qna} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
