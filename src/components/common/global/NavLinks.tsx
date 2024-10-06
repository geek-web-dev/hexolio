"use client";
import { useCursorContext } from "@/context/CursorContext";
import { cn } from "@/lib/utils";
import {
  FlaskConical,
  HandHelping,
  Layers3,
  MailCheck,
  User,
} from "lucide-react";
import { Link } from "react-scroll";
import PageProgress from "./PageProgress";

export const LinkBadge = ({ title }: { title: string }) => {
  return (
    <div
      className={cn(
        " uppercase px-2 py-1 absolute -translate-y-10 left-[50%] translate-x-[-50%] rounded-sm duration-300 dark:font-[500] text-sm",
        "group-hover:opacity-100 opacity-0 group-hover:-translate-y-12",
        "bg-[#222] dark:bg-[#ddd] text-[--pure-background]"
      )}
    >
      {title}
      <div
        className={cn(
          "absolute border-[4px] border-transparent border-t-[#222] dark:border-t-[#ddd] left-[50%] translate-x-[-50%] -bottom-3 translate-y-[-50%]"
        )}
      ></div>
    </div>
  );
};

const NavLinks = () => {
  const { cursorFocus, cursorDefault } = useCursorContext();
  const sections = [
    { name: "About", Icon: User },
    { name: "Services", Icon: HandHelping },
    { name: "Experience", Icon: FlaskConical },
    { name: "Projects", Icon: Layers3 },
    { name: "Contact", Icon: MailCheck },
  ];

  return (
    <>
      <nav className="fixed z-30 left-[50%] bottom-4 translate-x-[-50%] w-56 h-12 bg-[#999]/25 dark:bg-[#666]/25 flex gap-1 items-center justify-center rounded-sm backdrop-blur-lg">
        {sections.map((item, i) => {
          const Icon = item.Icon;
          return (
            <Link
              key={i}
              to={item.name.toLowerCase()}
              offset={-32}
              data-id={item.name.toLowerCase()}
              className="size-10 rounded-sm shadow-sm flex justify-center items-center cursor-pointer group relative"
              onMouseEnter={cursorFocus}
              onMouseLeave={cursorDefault}
            >
              <Icon
                size={20}
                strokeWidth={1.5}
                className="text-[--pure-text]"
              />
              <LinkBadge title={item.name} />
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
