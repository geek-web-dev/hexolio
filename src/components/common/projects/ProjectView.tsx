"use client";
import { projects } from "@/config/projects";
import { cn } from "@/lib/utils";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useProjectContext } from "@/context/ProjectContext";
import CloseButton from "../global/CloseButton";
import styles from "@/app/styles.module.css";
import Overlay from "../global/Overlay";
import ImageOverlay from "../global/ImageOverlay";
import { useState } from "react";
import { useCursorContext } from "@/context/CursorContext";
const { showAnimation } = styles;

const ProjectView = ({ projectIdx }: { projectIdx: number }) => {
  const { title, description, genre, image, link, tools_used } =
    projects[projectIdx];

  const { setIsOpenProject } = useProjectContext();

  const { cursorDefault, cursorFocus } = useCursorContext();

  const [loading, setLoading] = useState(true);

  return (
    <>
      <Overlay handler={() => setIsOpenProject(false)} />

      <CloseButton
        className="right-1 top-1"
        handler={() => setIsOpenProject(false)}
      />

      <div
        className={cn(
          "fixed z-[41] bg-[--pure-background] overflow-y-auto overflow-x-hidden w-[94.5%] h-[94.5%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg",
          "scrollbar-thumb-[#333] dark:scrollbar-thumb-[#999] scrollbar-thin scrollbar-track-transparent border border-[--line-color] p-4",
          showAnimation
        )}
      >
        <div className="grid">
          <div className="space-y-4">
            <div className="relative w-full h-auto aspect-video overflow-hidden border border-[--line-color] rounded-lg">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 60vw, (max-width: 1200px) 75vw, 80vw"
                onLoad={() => setLoading(false)}
                className={cn(
                  "object-cover duration-1000",
                  loading ? "opacity-0" : "opacity-100"
                )}
              />
              <ImageOverlay />
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-semibold text-[--pure-text]">
                  {title}
                </h1>
                <h3 className="text-3xl text-[--main]">{genre}</h3>
              </div>
              <Link
                href={link}
                target="_blank"
                onMouseEnter={cursorFocus}
                onMouseLeave={cursorDefault}
              >
                <ExternalLink
                  size={42}
                  strokeWidth={1}
                  className="text-[--pure-text] hover:text-[--main] duration-300"
                />
              </Link>
            </div>

            <p className="text-lg">{description}</p>

            <div className="flex flex-col gap-2 text-[--pure-text]">
              <h3 className="text-2xl">Tools Used:</h3>
              <div className="flex gap-2 flex-wrap">
                {tools_used.map((tool, i) => (
                  <div
                    className="border border-[--line-color] py-2 px-4 rounded-lg"
                    key={i}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
