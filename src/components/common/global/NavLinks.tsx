"use client";
import { useCursorContext } from "@/context/CursorContext";
import {
  FlaskConical,
  Layers3,
  MailCheck,
  ScrollText,
  User,
} from "lucide-react";
import { Link } from "react-scroll";
import PageProgress from "./PageProgress";
import ToolTip from "./ToolTip";

const NavLinks = () => {
  const { cursorFocus, cursorDefault } = useCursorContext();
  const sections = [
    { name: "About", Icon: User },
    { name: "Services", Icon: ScrollText },
    { name: "Experience", Icon: FlaskConical },
    { name: "Projects", Icon: Layers3 },
    { name: "Contact", Icon: MailCheck },
  ];

  return (
    <>
      <nav className="fixed z-30 left-[50%] bottom-4 translate-x-[-50%] w-[248px] h-14 bg-[#bbb]/25 dark:bg-[#666]/25 flex gap-2 items-center justify-center backdrop-blur-lg rounded-full">
        {sections.map((item, i) => {
          const Icon = item.Icon;
          return (
            <Link
              key={i}
              to={item.name.toLowerCase()}
              offset={-32}
              className=" size-10 shadow-md flex justify-center items-center cursor-pointer group relative rounded-full hover:bg-[#222] dark:hover:bg-[#ddd] duration-300"
              onMouseEnter={cursorFocus}
              onMouseLeave={cursorDefault}
              href={`#${item.name.toLowerCase()}`}
              aria-label={`scroll to ${item.name.toLowerCase()} section`}
            >
              <Icon
                size={20}
                className="text-[--pure-text] group-hover:text-[--pure-background] duration-300"
                strokeWidth={1.5}
              />
              <ToolTip title={item.name} />
            </Link>
          );
        })}
      </nav>

      {/* home link */}
      <PageProgress />
    </>
  );
};

export default NavLinks;
