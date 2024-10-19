import { slugify } from "@/utils/slugify";

export type DstArticle = {
  id: string;
  headline: string;
  author: string;
  text: string;
  publicationDate: string;
  categories: string[];
  headerImageUrl: string;
};

const MOCK_ARTICLES: DstArticle[] = [
  {
    id: "tbd",
    headline: "Artikel 1",
    author: "Autor:in 1",
    text: "Text des Artikel 1",
    publicationDate: "2023-10-20T14:45:00",
    categories: ["cat1", "cat2"],
    headerImageUrl: "http://derstandard.dev/header-image1.jpg",
  },
  {
    id: "tbd",
    headline: "Artikel 2",
    author: "Autor:in 2",
    text: "Text des Artikel 2",
    publicationDate: "2023-10-21T12:15:00",
    categories: ["cat2", "cat4"],
    headerImageUrl: "http://derstandard.dev/header-image2.jpg",
  },
  {
    id: "tbd",
    headline: "Artikel 2",
    author: "Autor:in 2",
    text: "Text des Artikel 2",
    publicationDate: "2023-10-21T12:15:00",
    categories: ["cat2", "cat4"],
    headerImageUrl: "http://derstandard.dev/header-image2.jpg",
  },
  {
    id: "tbd",
    headline: "Artikel 2",
    author: "Autor:in 2",
    text: "Text des Artikel 2",
    publicationDate: "2023-10-21T12:15:00",
    categories: ["cat2", "cat4"],
    headerImageUrl: "http://derstandard.dev/header-image2.jpg",
  },
  {
    id: "tbd",
    headline: "Artikel 2",
    author: "Autor:in 2",
    text: "Text des Artikel 2",
    publicationDate: "2023-10-21T12:15:00",
    categories: ["cat2", "cat4"],
    headerImageUrl: "http://derstandard.dev/header-image2.jpg",
  },
  {
    id: "tbd",
    headline: "Artikel 2",
    author: "Autor:in 2",
    text: "Text des Artikel 2",
    publicationDate: "2023-10-21T12:15:00",
    categories: ["cat2", "cat4"],
    headerImageUrl: "http://derstandard.dev/header-image2.jpg",
  },
  {
    id: "tbd",
    headline: "Artikel 2",
    author: "Autor:in 2",
    text: "Text des Artikel 2",
    publicationDate: "2023-10-21T12:15:00",
    categories: ["cat2", "cat4"],
    headerImageUrl: "http://derstandard.dev/header-image2.jpg",
  },
];

export const getAllArticles = (): DstArticle[] => {
  return [...MOCK_ARTICLES];
};

export const getArticleBySlug = (slug: string): DstArticle | undefined => {
  return MOCK_ARTICLES.find((article) => slug === slugify(article.headline));
};
