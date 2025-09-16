import type { Author } from "./author";
import type { Category } from "./category";

export type QNA = {
  image?: string;
  _id: string;
  question: string;
  category: Category;
  slug: string;
  metadata?: string;
  answer?: string;
  desc?: string;
  createdAt: string;
  updatedAt: string;
  mainImage?: any;
  author: Author;
  tags?: string[];
};

export type QNAListItem = {
  _id: string,
  question: string,
  answer: string,
  slug: string,
  createdAt: string;
  updatedAt: string;
  desc?: string;
}