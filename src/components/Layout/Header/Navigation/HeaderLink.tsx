"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{
  item: HeaderItem;
  sticky: boolean;
  activeSection: string;
}> = ({ item, sticky, activeSection }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleMouseEnter = () => item.submenu && setSubmenuOpen(true);
  const handleMouseLeave = () => setSubmenuOpen(false);

  // Determine if the link is a section (hash) link
  const isSectionLink = item.href.startsWith("#");
  const cleanedHref = item.href.replace("#", "");

  const isActive = isSectionLink
    ? activeSection === cleanedHref
    : path === item.href;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`text-xl flex items-center font-medium transition-all duration-300 ${
          sticky
            ? isActive
              ? "text-primary"
              : "text-black hover:text-primary"
            : isActive
            ? "text-primary"
            : "text-white hover:text-primary"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="ml-1"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {/* Submenu */}
      {submenuOpen && (
        <div className="absolute py-2 left-0 mt-0.5 w-60 bg-white dark:bg-darklight dark:text-white shadow-lg rounded-lg z-50">
          {item.submenu?.map((subItem, index) => {
            const isSubActive = path === subItem.href;
            return (
              <Link
                key={index}
                href={subItem.href}
                className={`block px-4 py-2 ${
                  isSubActive
                    ? "bg-primary text-white"
                    : "text-black dark:text-white hover:bg-primary hover:text-black"
                }`}
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
