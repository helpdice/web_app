import type { Author } from "./author";
import type { Category } from "./category";

export type MCQ = {
  image?: string;
  _id: number;
  title: string;
  category: Category;
  slug: string;
  options: Array<string>;
  correctAnswers: Array<string>;
  explanations?: Record<string, string>;
  metadata?: string;
  desc?: string;
  createdAt: string;
  updatedAt: string;
  mainImage?: any;
  author: Author;
  tags?: string[];
  isMultipleChoice: boolean;
};

export type MCQListItem = {
  _id: string,
  title: string,
  slug: string,
  category: Category;
  createdAt: string;
  updatedAt: string;
  desc?: string;
}