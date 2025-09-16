import type { MCQListItem } from "../../types/mcq";
import { humanTime } from "../../utils/helpers";
import { getUrl } from "../../utils/routes";
import { Text } from "@helpdice/ui";
import { Link } from "react-router-dom";
import React from "react";

function McqRelated({ mcqs }: { mcqs: MCQListItem[] }) {
  return (
    <div className="w-full my-4">
      <Text className="my-1">Related MCQ&apos;s</Text>
      <ul className="rounded-lg dark:text-white"> {/* divide-y divide-gray-200 */}
        {mcqs.map((mcq) => (
          <li key={'related-' + mcq._id} className="px-2 py-2">
            <div className="flex flex-row align-center">
              <Link to={getUrl('MCQ_SLUG', { category: mcq.category.slug, slug: mcq.slug })}><span className="font-semibold text-lg hover:text-gray-800 dark:text-gray-500 dark:hover:text-white">{mcq.title.slice(0, 115) + '...'}</span><span className="text-gray-500 my-auto text-xs">{humanTime(new Date(mcq.createdAt), true)}</span></Link>
            </div>
            {mcq?.desc && <p className="text-gray-700">{mcq?.desc}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default McqRelated;