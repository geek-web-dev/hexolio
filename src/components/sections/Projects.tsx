"use client";
import { projects } from "@/config/projects";
import Project from "../common/projects/Project";
import SectionTitle from "../common/global/SectionTitle";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import { useState } from "react";
import ArrowLink from "../common/global/ArrowLink";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const MAX = 6;
  return (
    <section id="projects">
      <MaxWidthWrapper>
        <SectionTitle
          title="projects"
          description="My working gallery & projects portfolio"
        />
        <div className="grid lg:grid-cols-2 mt-4 gap-x-4 gap-y-12">
          {projects.slice(0, MAX).map((item, i) => (
            <Project key={i} projectIdx={i} {...item} />
          ))}

          {showAll
            ? projects
                .slice(MAX)
                .map((item, i) => (
                  <Project key={i} projectIdx={i + MAX} {...item} />
                ))
            : ""}
        </div>
        {projects.length > MAX && !showAll ? (
          <ArrowLink
            text={`Show All (+${projects.length - MAX})`}
            handler={() => setShowAll(true)}
            className="mx-auto mt-12 text-xl"
          />
        ) : null}
      </MaxWidthWrapper>
    </section>
  );
};

export default Projects;
