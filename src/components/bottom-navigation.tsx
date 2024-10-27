import {
  HomeIcon,
  LayoutGridIcon,
  ListCheckIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

export const BottomNavigation = () => {
  return (
    <nav className=" h-[80px] bg-white w-full bottom-0 shadow-slate-900 shadow-md">
      <ul className="flex h-[80px] flex-row w-full justify-around items-center">
        <li>
          <Link href="/" aria-label="Zum Feed">
            <HomeIcon />
          </Link>
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
  );
};
