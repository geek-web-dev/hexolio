"use client";
import { useEffect } from "react";
import ProjectView from "./ProjectView";
import { useProjectContext } from "@/context/ProjectContext";

const ProjectCardView = () => {
  const { isOpenProject, projectIdx } = useProjectContext();

  useEffect(() => {
    if (isOpenProject) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "unset";
  }, [isOpenProject]);

  return <>{isOpenProject ? <ProjectView projectIdx={projectIdx} /> : ""}</>;
};

export default ProjectCardView;
