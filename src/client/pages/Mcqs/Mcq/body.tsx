import React from "react"
import MCQHeader from "../header"
import SearchBox from "../../../components/SearchBox"
import CategoryTree from "../../../components/CategoryTree";
import McqRelated from "../../../components/MCQ/McqRelated";
import SharePost from "../../../components/Blog/SharePost";
import { Loader } from "@helpdice/icons";
import Article from "../../../components/Blog/Article";
import MCQOptions from "../../../components/MCQ/McqOptions";
import RelatedPost from "../../../components/Blog/RelatedPost";
import { getCurrentUrl } from "../../../utils/helpers";

function McqPost({ mcq }: { mcq: any }) {
    const MCQ = mcq?.mcq;
    const CATEGORIES: any[] = mcq?.categories ?? [];
    const Mcqs = mcq?.mcqs ?? [];
    const currentUrl = getCurrentUrl();
    return (
        <section className="pt-20 pb-20 lg:pt-25 lg:pb-25 xl:pt-30 xl:pb-30">
            <MCQHeader />
            <br />
            <br />
            <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
                <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
                    <div className="md:w-1/2 lg:w-[32%]">
                        <SearchBox path="/mcq/" />

                        <div className="animate_top border-stroke shadow-solid-5 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-9">
                            <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                                Categories
                            </h4>

                            {/* <Suspense fallback={<Loader />}> */}
                            <CategoryTree data={CATEGORIES} path="/mcqs/:category" />
                            {/* </Suspense> */}
                        </div>

                        <RelatedPost />
                    </div>

                    {MCQ?.image && (
                        <div className="mb-10 w-full overflow-hidden">
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
                        <div className="animate_top border-stroke shadow-solid-5 dark:border-strokedark dark:bg-blacksection rounded-md border bg-white px-5 py-5">
                            {MCQ && (
                                <>
                                    <Article
                                        loading={false}
                                        heading={MCQ?.title}
                                        dated={MCQ?.createdAt}
                                    >
                                        <span className="block mb-4"><small>Select Option & Check Answer</small></span>
                                        <MCQOptions {...MCQ} />
                                        <br />
                                        <McqRelated mcqs={Mcqs} />
                                    </Article>
                                    <SharePost title={MCQ.title} url={currentUrl} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default McqPost;