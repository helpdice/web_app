import type { Author } from "./author";
import type { Category } from "./category";

export type Blog = {
  _id: number;
  title: string;
  category: Category;
  slug?: any;
  metadata?: string;
  visible: boolean;
  description?: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  views?: string;
  author: Author;
  tags?: string[];
};