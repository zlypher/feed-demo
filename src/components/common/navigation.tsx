import {
  HomeIcon,
  LayoutGridIcon,
  ListCheckIcon,
  UserIcon,
} from "lucide-react";
import { NavItem } from "./nav-item";

export const Navigation = () => {
  return (
    <nav className=" h-[64px] bg-white w-full bottom-0 shadow-gray-900 shadow-sm">
      <ul className="flex h-[64px] flex-row w-full justify-around items-center px-6">
        <NavItem href="/" label="Zum Feed">
          <HomeIcon />
        </NavItem>
        <NavItem href="/favorites" label="Zu den Favoriten">
          <ListCheckIcon />
        </NavItem>
        <NavItem href="/categories" label="Zu den Kategorien">
          <LayoutGridIcon />
        </NavItem>
        <NavItem href="/profile" label="Zum Profil">
          <UserIcon />
        </NavItem>
      </ul>
    </nav>
  );
};
