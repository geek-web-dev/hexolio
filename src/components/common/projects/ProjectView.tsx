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
const { showAnimation } = styles;

const ProjectView = ({ projectIdx }: { projectIdx: number }) => {
  const { title, description, genre, image, link, tools_used } =
    projects[projectIdx];

  const { setIsOpenProject } = useProjectContext();

  return (
    <>
      <Overlay handler={() => setIsOpenProject(false)} />

      <CloseButton
        className="right-1 top-1"
        handler={() => setIsOpenProject(false)}
      />

      <div
        className={cn(
          "fixed z-[41] bg-[--pure-background] overflow-y-auto overflow-x-hidden rounded-sm w-[94.5%] h-[94.5%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
          "scrollbar-thumb-[#333] dark:scrollbar-thumb-[#999] scrollbar-thin scrollbar-track-transparent border border-[--line-color] p-4",
          showAnimation
        )}
      >
        <div className="grid">
          <div className="space-y-4">
            <div className="relative w-full h-auto aspect-video overflow-hidden rounded-sm border border-[--line-color]">
              <Image
                src={image}
                alt={title}
                fill
                sizes="99vw"
                loading="lazy"
                className="object-cover"
                onClick={() => setIsOpenProject(true)}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-semibold text-[--pure-text]">
                  {title}
                </h1>
                <h3 className="text-3xl text-[--main]">{genre}</h3>
              </div>
              <Link href={link} target="_blank">
                <ExternalLink
                  size={42}
                  strokeWidth={1}
                  className="text-[--pure-text] hover:text-[--main] hover:scale-110 duration-300"
                />
              </Link>
            </div>
            <p className="text-lg">{description}</p>
            <div className="flex items-center gap-2 text-[--pure-text]">
              <h3 className="text-2xl">Tools Used:</h3>
              <div className="flex gap-2 flex-wrap">
                {tools_used.map((tool, i) => (
                  <div
                    className="border border-[--line-color] rounded-sm px-2"
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
