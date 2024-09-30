"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useCursorContext } from "@/context/CursorContext";
import { useProjectContext } from "@/context/ProjectContext";

type ProjectProps = {
  title: string;
  image: string;
  genre: string;
  link: string;
  projectIdx: number;
  duration: number;
};

const Project = ({
  title,
  image,
  genre,
  link,
  projectIdx,
  duration,
}: ProjectProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const { setIsOpenProject, setProjectIdx } = useProjectContext();
  const { cursorDefault, cursorFocus } = useCursorContext();

  const openProject = () => {
    setIsOpenProject(true);
    setProjectIdx(projectIdx);
  };

  return (
    <div
      className={cn(
        "shadow-md hover:shadow-lg group flex items-center justify-center bg-[--line-color]",
        "duration-300"
      )}
    >
      <div className="relative w-[calc(100%-1rem)] h-[calc(100%-1rem)] aspect-video overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={title}
          fill
          sizes=""
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          className={cn(
            isLoading ? "opacity-0" : "opacity-100",
            "transition-opacity duration-500",
            "object-cover"
          )}
          style={{ transitionDuration: `${duration}ms` }}
        />

        <div className="absolute left-4 top-4 w-0 group-hover:w-[calc(100%-2rem)] h-[calc(50%-1rem)] bg-white/90 dark:bg-black/90 backdrop-blur-sm duration-1000 overflow-hidden rounded-t-sm shadow-md ease-in-out z-[5]">
          <div className="m-4 text-nowrap">
            <h3 className="font-semibold sm:text-2xl text-[--pure-text]">
              {title}
            </h3>
            <h4 className="sm:text-xl text-[--main]">{genre}</h4>
          </div>
        </div>

        <div className="absolute left-4 bottom-4 w-0 group-hover:w-[calc(100%-2rem)] h-[calc(50%-1rem)] bg-white/90 dark:bg-black/90 backdrop-blur-sm duration-2000 overflow-hidden rounded-b-sm shadow-md ease-in-out z-[5]">
          <div className="flex gap-2 mx-4 sm:my-4 my-0">
            <div
              className="rounded-full p-4 text-[--main] w-14 h-14 flex items-center justify-center hover:text-white hover:bg-[--main] duration-300 border border-[--main]"
              onClick={openProject}
              onMouseEnter={cursorFocus}
              onMouseLeave={cursorDefault}
              title="Show the project"
            >
              <Eye strokeWidth={1.25} />
            </div>
            <Link
              href={link}
              className="rounded-full p-4 text-[--main] w-14 h-14 flex items-center justify-center hover:text-white hover:bg-[--main] duration-300 border border-[--main]"
              onMouseEnter={cursorFocus}
              onMouseLeave={cursorDefault}
              title="Open the project"
              target="_blank"
            >
              <ExternalLink strokeWidth={1.25} />
            </Link>
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full bg-[--pure-text] z-[0] opacity-0 group-hover:opacity-90 duration-2000" />
      </div>
    </div>
  );
};

export default Project;
