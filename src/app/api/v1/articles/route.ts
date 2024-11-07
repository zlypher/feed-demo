import { getAllArticles } from "@/data/articles";
import { wait } from "@/utils/wait";

export async function GET() {
  const articles = getAllArticles();

  // To demonstrate potential loading states on the frontend
  await wait(2000);

  return Response.json(articles);
}
