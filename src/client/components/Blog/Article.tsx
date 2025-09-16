import React from "react";
import type { Author } from "../../types/author";
import { format } from "date-fns";
import { Skeleton } from "@helpdice/ui";


function Article({ children, heading, author = { name: 'Admin' }, dated, loading }: { children?: React.ReactNode, heading: string, author?: Author, dated: string, loading: boolean }) {
  return (
    <article className="w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <header className="mb-4 lg:mb-6 not-format">
        <address className="flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img className="mr-4 w-16 h-16 rounded-full" src="/images/user/user-02.png" alt="Jese Leos" />
            <div className="space-y-0">
              <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{loading ? <Skeleton width={150} height={20} /> : author?.name}</a>
              <p className="text-base span text-gray-500 dark:text-gray-400">Helpdice Team</p>
              {loading ? <Skeleton width={100} height={20} /> : <p className="text-base span text-gray-500 dark:text-gray-400">
                <time dateTime="2022-02-08" title="February 8th, 2022">{format(dated ? new Date(dated) : new Date(), 'dd MMM, yyyy')}</time>
              </p>}

            </div>
          </div>
        </address>
        <h1 className="mb-4 text-lg font-extrabold leading-tight text-primary lg:mb-6 lg:text-2xl dark:text-white">{loading ? <Skeleton width="100%" height={30} /> : <span dangerouslySetInnerHTML={{ __html: heading }}></span>}</h1>
      </header>

      <section className="mt-4 mb-10">
        {children}
      </section>

      {/* Comment Section */}
    </article>
  )
}

export default Article;