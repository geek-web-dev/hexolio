"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Eye } from "lucide-react";
import { ReactNode, useState } from "react";
import { useCursorContext } from "@/context/CursorContext";
import { useProjectContext } from "@/context/ProjectContext";
import ImageOverlay from "../global/ImageOverlay";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type ProjectProps = {
  title: string;
  image: string;
  genre: string;
  link: string;
  projectIdx: number;
};

const Project = ({ title, image, genre, link, projectIdx }: ProjectProps) => {
  const { ref: projectRef, inView: animate } = useInView({
    triggerOnce: true,
  });

  const { setIsOpenProject, setProjectIdx } = useProjectContext();

  const [ready, setReady] = useState(false);

  return (
    <div
      className={cn(
        "shadow-md hover:shadow-lg group flex items-center justify-center bg-[#ccc] dark:bg-[#262626]",
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{
        transition: "shadow 1000ms, opacity 1000ms, transform 1000ms",
      }}
      ref={projectRef}
    >
      <div className="relative aspect-video overflow-hidden size-[calc(100%-1rem)]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="50vw"
          className="object-cover"
        />

        <ImageOverlay />

        <div className="absolute left-0 bottom-0 w-full p-4 group-hover: bg-white/85 dark:bg-black/85 backdrop-blur-sm z-10 duration-1000 ease-in-out translate-y-[100%] group-hover:translate-y-0">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h3 className="font-semibold sm:text-2xl text-[--pure-text]">
                {title}
              </h3>
              <h4 className="sm:text-xl text-[--main]">{genre}</h4>
            </div>

            <div className="flex gap-2">
              <ProjectButton
                clickHandler={() => {
                  setIsOpenProject(true);
                  setProjectIdx(projectIdx);
                }}
              >
                <Eye strokeWidth={1.25} className="sm:size-6 size-4" />
              </ProjectButton>

              <Link
                href={link}
                title="Open the project"
                target="_blank"
                onMouseEnter={() => setReady(true)}
                onMouseLeave={() => setReady(false)}
              >
                <ProjectButton>
                  {ready ? (
                    <ArrowUpRight
                      strokeWidth={1.25}
                      className="sm:size-6 size-4"
                    />
                  ) : (
                    <ArrowRight
                      strokeWidth={1.25}
                      className="sm:size-6 size-4"
                    />
                  )}
                </ProjectButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectButton = ({
  children,
  clickHandler,
}: {
  children: ReactNode;
  clickHandler?: () => void;
}) => {
  const { cursorDefault, cursorFocus } = useCursorContext();
  return (
    <div
      className="rounded-full text-[--main] sm:size-14 size-10 flex items-center justify-center hover:text-white hover:bg-[--main] duration-300 border-[1px] border-[#bbb] dark:border-[#333]"
      onMouseEnter={cursorFocus}
      onMouseLeave={cursorDefault}
      title="Show the project"
      onClick={clickHandler}
    >
      {children}
    </div>
  );
};

export default Project;
