import { getAllArticles } from "@/data/articles";
import { logger } from "@/utils/logger";
import { wait } from "@/utils/wait";

export async function GET() {
  logger.info(
    { additional: "info" },
    "Fetch all articles with delay of 1000ms"
  );
  const articles = getAllArticles();

  // To demonstrate potential loading states on the frontend
  await wait(1000);

  return Response.json(articles);
}
