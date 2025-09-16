import type { Category } from "../../types/category";

function CategoryData() {
  const categoryData:Category[] = [
    {
      _id: "1",
      name: "Technology",
      slug: "ryrrytrur",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
        children: []
    },
    {
      _id: "2",
      name: "Technology",
      slug: "egjefwgjhw",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
        children: []
    },
    {
      _id: "3",
      name: "Education",
      slug: "khfeuirge",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
        children: []
    },
    {
      _id: "4",
      name: "Accounts",
      slug: "sjhgierigh",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
        children: []
    }
  ];
  return categoryData;
}

export default CategoryData;
