"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { useCursorContext } from "@/context/CursorContext";
import { useProjectContext } from "@/context/ProjectContext";
import { useInView } from "react-intersection-observer";

type ProjectProps = {
  title: string;
  image: string;
  genre: string;
  link: string;
  projectIdx: number;
  duration: number;
};

const ProjectButton = ({
  children,
  handler,
}: {
  children: ReactNode;
  handler?: () => void;
}) => {
  const { cursorDefault, cursorFocus } = useCursorContext();
  return (
    <div
      className="rounded-full text-[--main] size-14 flex items-center justify-center hover:text-white hover:bg-[--main] duration-300 border border-[--main]"
      onMouseEnter={cursorFocus}
      onMouseLeave={cursorDefault}
      title="Show the project"
      onClick={handler}
    >
      {children}
    </div>
  );
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

  const { ref: projectRef, inView: animate } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className={cn(
        "shadow-md hover:shadow-lg group flex items-center justify-center bg-[#d6d6d6] dark:bg-[#262626] duration-1000 transition-transform",
        animate ? "translate-y-0" : "translate-y-4"
      )}
      ref={projectRef}
    >
      <div className="relative aspect-video overflow-hidden w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-sm">
        <Image
          src={image}
          alt={title}
          fill
          sizes="50vw"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          className={cn(
            isLoading ? "opacity-0" : "opacity-100",
            "transition-opacity duration-500",
            "object-cover"
          )}
          style={{ transitionDuration: `${duration}ms` }}
        />

        <div className="absolute left-0 top-0 bg-black opacity-25 group-hover:opacity-75 size-full duration-1000" />

        <div className="absolute left-4 bottom-4 size-[calc(100%-2rem)] opacity-0 group-hover:opacity-95 bg-[--background] backdrop-blur-sm duration-1000 transition-opacity shadow-md ease-in-out z-10">
          <div className="m-4">
            <h3 className="font-semibold sm:text-2xl text-[--pure-text]">
              {title}
            </h3>
            <h4 className="sm:text-xl text-[--main] mt-2">{genre}</h4>
            <div className="flex gap-2 mt-4">
              <ProjectButton
                handler={() => {
                  setIsOpenProject(true);
                  setProjectIdx(projectIdx);
                }}
              >
                <Eye strokeWidth={1.25} />
              </ProjectButton>
              <ProjectButton>
                <Link href={link} title="Open the project" target="_blank">
                  <ExternalLink strokeWidth={1.25} />
                </Link>
              </ProjectButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
