"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface INavItemProps extends PropsWithChildren {
  href: string;
  label: string;
}

export const NavItem = ({ href, label, children }: INavItemProps) => {
  const pathname = usePathname();
  const isTabActive = pathname === href;

  return (
    <li>
      <Link
        data-testid="nav-item"
        className="block p-2 rounded-lg transition-all aria-[current=page]:bg-sky-500 aria-[current=page]:text-white"
        aria-current={isTabActive ? "page" : undefined}
        href={href}
        aria-label={label}
      >
        {children}
      </Link>
    </li>
  );
};
