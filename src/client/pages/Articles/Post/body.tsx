import React, { lazy, Suspense } from "react"
import Article from '../../../components/Blog/Article';
import CategoryTree from '../../../components/CategoryTree';
import SearchBox from '../../../components/SearchBox';
import { Loader } from "@helpdice/icons";
import { getCurrentUrl } from "../../../utils/helpers";
const SharePost = lazy(() => import('../../../components/Blog/SharePost'));

function BlogPost({ post }: { post: any }) {
    const ARTICLE = post?.article;
    const CATEGORIES = post?.categories ?? [];
    // console.log(post);
    const currentUrl = getCurrentUrl();
    return (
        <section className="pb-20 pt-20 lg:pb-25 lg:pt-25 xl:pb-30 xl:pt-30">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
                    <div className="md:w-1/2 lg:w-[32%]">
                        <SearchBox path="/article/" />

                        <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                            <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                                Categories
                            </h4>
                            <CategoryTree data={CATEGORIES} path="/articles/:category" />
                        </div>

                        {/* <RelatedPost /> */}
                    </div>

                    <div className="lg:w-2/3">
                        <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                            <Article loading={false} heading={ARTICLE?.title} author={ARTICLE?.author} dated={ARTICLE?.createdAt}>
                                <div dangerouslySetInnerHTML={{ __html: ARTICLE?.body }} className="blog-details" />
                            </Article>

                            <Suspense fallback={<Loader />}>
                                <SharePost title={ARTICLE?.title} url={currentUrl} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPost;