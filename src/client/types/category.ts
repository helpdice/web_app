export type Category = {
  name: string;
  slug: string;
  children: Category[];
  metadata?: string;
  _id: string;
  _ref?: number | string;
};