import React from "react";
import type { QNA } from "../../types/qna";
import { humanTime } from "../../utils/helpers";
import { getUrl } from "../../utils/routes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const QNAItem = ({ qna }: { qna: QNA }) => {
  const { mainImage, question, metadata, desc, category, slug } = qna;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top shadow-solid-8 dark:bg-blacksection relative my-0 flex flex-col rounded-lg border border-slate-200 bg-white"
      >
        <div className="p-4">
          {mainImage && (
            <Link
              to={`/qna/${slug}`}
              className="relative block aspect-[368/239]"
            >
              <img src={mainImage} alt={question} />
            </Link>
          )}
          <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-gray-300">
            <Link
              to={`/qna/${slug}`}
            >
              {question.slice(0, 115) + (question?.length > 115 ? "..." : "")}
            </Link>
          </h3>
          {metadata || desc ? (
            <p className="leading-normal font-light text-slate-600">
              {metadata ?? desc}
            </p>
          ) : null}
        </div>
        <div className="mx-3 mt-auto border-t border-slate-200 px-1 pt-2 pb-3">
          <span className="text-sm font-medium text-slate-600 dark:text-gray-400">
            Last updated: {humanTime(new Date(qna.updatedAt), true)}
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default QNAItem;
