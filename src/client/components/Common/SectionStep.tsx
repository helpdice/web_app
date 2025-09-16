import React from "react";
import type { Step } from "../../types/step";

function SectionSteps({ steps, heading, description }: { steps: Step[], heading: string, description?: string; }) {
  return (
    <div className="p-4 my-12 mx-auto">
      <h2 className="font-heading dark:text-gray-100 mb-8 text-3xl font-bold lg:text-4xl">{heading}</h2>
      {description && <p className="">{description}</p>}
      <div className=""> {/* max-w-xl */}
        {steps.map((step, index) => (
          <div key={`step-${index}-${step._id}`} className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="h-6 w-6 text-blue-800 dark:text-slate-200">
                    <path d="M12 5l0 14"></path>
                    <path d="M18 13l-6 6"></path>
                    <path d="M6 13l6 6"></path>
                  </svg>
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
            </div>
            <div className="pt-1 pb-8">
              <p style={{ marginTop: 0 }} className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Step {index + 1}</p>
              <div className="text-gray-600 dark:text-slate-400">{step.name}</div>
              {step.description && <div>{step.description}</div>}
            </div>
          </div>
        ))}
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="h-6 w-6 text-white dark:text-slate-200">
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-1 ">
            <p style={{ marginTop: 0 }} className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Ready!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSteps;
