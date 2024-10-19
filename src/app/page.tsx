import { Feed } from "@/components/feed";
import { getAllArticles } from "@/data/articles";
import {
  HomeIcon,
  LayoutGridIcon,
  ListCheckIcon,
  UserIcon,
} from "lucide-react";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="bg-slate-100 h-screen flex flex-col">
      <main className="overflow-scroll">
        <Feed articles={articles} />
      </main>
      <nav className=" h-[80px] bg-white w-full bottom-0">
        <ul className="flex h-[80px] flex-row w-full justify-around items-center">
          <li>
            <HomeIcon />
          </li>
          <li>
            <ListCheckIcon />
          </li>
          <li>
            <LayoutGridIcon />
          </li>
          <li>
            <UserIcon />
          </li>
        </ul>
      </nav>
    </div>
  );
}
