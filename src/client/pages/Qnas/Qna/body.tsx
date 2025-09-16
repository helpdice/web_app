import React from "react"
import CategoryTree from '../../../components/CategoryTree';
import RelatedPost from '../../../components/Blog/RelatedPost';
import Article from '../../../components/Blog/Article';
import SharePost from '../../../components/Blog/SharePost';
// import type { QNA, QNAListItem } from '../../../types/qna';
import QnaRelated from '../../../components/QNA/QNARelated';
import QNAHeader from '../header';
import SearchBox from '../../../components/SearchBox';
import { getCurrentUrl } from "../../../utils/helpers";

function QnaPost({ data }: { data: any }) {
    const QNA = data?.qna ?? {};
    const CATEGORIES = data?.categories ?? [];
    const QNAS = data?.qnas ?? [];
    const currentUrl = getCurrentUrl();
    return (
        <section className="pb-20 pt-20 lg:pb-25 lg:pt-25 xl:pb-30 xl:pt-30">
            <QNAHeader />
            <br />
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
                    <div className="md:w-1/2 lg:w-[32%]">
                        <SearchBox path="/qna/" />

                        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-5 dark:border-strokedark dark:bg-blacksection">
                            <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                                Categories
                            </h4>
                            <CategoryTree data={CATEGORIES} path="/qnas/:category" />
                        </div>
                        <RelatedPost />
                    </div>

                    {QNA?.image && (
                        <div className="mb-10 w-full overflow-hidden ">
                            <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                <img
                                    src={"/images/blog/blog-01.png"}
                                    alt=""
                                    className="rounded-md object-cover object-center"
                                />
                            </div>
                        </div>
                    )}

                    <div className="lg:w-2/3">
                        <div className="animate_top rounded-md border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection py-10 px-10">
                            <Article loading={false} heading={QNA?.question} author={QNA?.author} dated={QNA?.createdAt}>
                                <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-md mb-6" dangerouslySetInnerHTML={{ __html: QNA?.answer }}></div>
                            </Article>
                            <QnaRelated qnas={QNAS.slice(0, 5)} />
                            <SharePost title={QNA?.question} url={currentUrl} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QnaPost;