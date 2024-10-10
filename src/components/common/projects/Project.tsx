"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";
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
  inCard?: boolean;
};

const Project = ({
  title,
  image,
  genre,
  link,
  projectIdx,
  inCard = false,
}: ProjectProps) => {
  const { ref: projectRef, inView: animate } = useInView({
    triggerOnce: true,
  });

  const { setIsOpenProject, setProjectIdx } = useProjectContext();
  const { cursorDefault, cursorFocus } = useCursorContext();

  return (
    <div
      className={cn(
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transition: "opacity 1000ms, transform 1000ms" }}
      ref={projectRef}
    >
      <div
        className={cn(
          inCard ? "bg-[--background]" : "bg-[--pure-background]",
          "shadow-md group flex items-center justify-center p-4 pb-0 overflow-hidden rounded-t-3xl"
        )}
      >
        <div className="relative aspect-video overflow-hidden size-full translate-y-4 hover:translate-y-0 duration-300 rounded-t-3xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="50vw"
            className="object-cover"
          />
          <ImageOverlay />
          <div
            className={cn(
              "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 size-12 rounded-full shadow-lg",
              "flex justify-center items-center",
              "duration-300 opacity-0 group-hover:opacity-100 bg-white hover:bg-[--main] text-[--main] hover:text-white"
            )}
            onClick={() => {
              setIsOpenProject(true);
              setProjectIdx(projectIdx);
            }}
            onMouseEnter={cursorFocus}
            onMouseLeave={cursorDefault}
            title="Show the project"
          >
            <ZoomIn size={24} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <div className="flex justify-between items-center font-semibold">
          <h1 className="text-[--pure-text] text-2xl">{title}</h1>
          <Link
            href={link}
            title="Vist the project"
            target="_blank"
            onMouseEnter={cursorFocus}
            onMouseLeave={cursorDefault}
            className="group text-[--paragraph] hover:text-[--main] duration-300 mr-4"
          >
            <span className="flex items-center gap-2">
              Visit Site
              <ArrowRight
                strokeWidth={1}
                size={16}
                className="duration-300 group-hover:-rotate-45"
              />
            </span>
          </Link>
        </div>
        <p>{genre}</p>
      </div>
    </div>
  );
};

export default Project;
