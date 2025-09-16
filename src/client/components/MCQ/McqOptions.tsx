import type { MCQ } from '../../types/mcq';
import React, { useState } from 'react';

function MCQOptions(question: MCQ) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]); // Track multiple selected answers
  const [submitted, setSubmitted] = useState(false);

  // Handle answer change
  const handleAnswerChange = (event: any) => {
    const { value, checked } = event.target;
    if (question.isMultipleChoice) {
      // Multiple answers: Add or remove from selected answers array
      setSelectedAnswers(prevAnswers =>
        checked ? [...prevAnswers, value] : prevAnswers.filter(answer => answer !== value)
      );
    } else {
      // Single answer: Set only one answer
      setSelectedAnswers([value]);
    }
  };

  // Handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);
  };

  // Check if the selected answers are correct
  const isCorrect =
    (question.isMultipleChoice
      ? selectedAnswers.length === question.correctAnswers.length &&
        selectedAnswers.every(answer => question.correctAnswers.includes(answer))
      : selectedAnswers[0] === question.correctAnswers[0]);

  return (
    <div className="w-full bg-white p-3 rounded-lg dark:bg-gray-800 dark:text-white">
      <form onSubmit={handleSubmit}>
        {/* Conditional Rendering of Radio Buttons or Checkboxes */}
        <div className="space-y-3">
          {question.options.filter((option) => option !== "").map((option, index) => (
            <div key={`option-${option}-${index}`} className="flex items-center">
              {question.isMultipleChoice ? (
                // Checkbox for multiple choices
                <input
                  type="checkbox"
                  id={`option_${option}`}
                  name="answer"
                  value={option}
                  onChange={handleAnswerChange}
                  checked={selectedAnswers.includes(option)}
                  className="mr-2 hidden"
                />
              ) : (
                // Radio button for single choice
                <input
                  type="radio"
                  id={`option_${option}`}
                  name="answer"
                  value={option}
                  onChange={handleAnswerChange}
                  checked={selectedAnswers.includes(option)}
                  className="hidden"
                />
              )}
              <label
                htmlFor={`option_${option}`}
                className={`w-full p-4 cursor-pointer border rounded-lg text-lg font-medium text-gray-700 transition duration-300 ease-in-out
                ${selectedAnswers.includes(option) ? 'bg-blue-100 border-2 border-blue-600 text-blue-800' : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-white'}
                ${selectedAnswers.includes(option) ? 'shadow-md' : ''}`}
              >
                {option}
              </label>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-gray-300 hover:bg-gray-400 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center dark:bg-gray-900 dark:text-white"
          disabled={submitted}
        >
          Check Answer
        </button>

        {/* Feedback Section */}
        {submitted && (
          <div className="mt-6">
            <div
              className={`px-6 rounded-lg ${
                isCorrect
                  ? 'bg-green-100 border-l-4 border-green-500 text-green-800'
                  : 'bg-red-100 border-l-4 border-red-500 text-red-800'
              }`}
            >
              <p className="font-semibold py-2">
                {isCorrect ? 'Correct! 🎉' : 'Incorrect. ❌'}
              </p>
              <p className="mt-2 text-gray-700 hidden">
                {/* Display explanation for each selected answer */}
                {selectedAnswers.map((answer) => (
                  <div key={answer}>
                    <strong>{answer}</strong>{question?.explanations ? `: ${question?.explanations[answer]}` : ""}
                  </div>
                ))}
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default MCQOptions;
