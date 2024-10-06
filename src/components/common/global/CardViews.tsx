"use client";
import ServiceView from "../services/ServiceView";
import ResumeView from "../experience/ResumeView";
import ProjectView from "../projects/ProjectView";
import { useServiceContext } from "@/context/ServiceContext";
import { useResumeContext } from "@/context/ResumeContext";
import { useProjectContext } from "@/context/ProjectContext";
import { useEffect } from "react";

const CardViews = () => {
  const { isServiceOpen, serviceIdx } = useServiceContext();
  const { isResumeOpen, resumeIdx, resumePart } = useResumeContext();
  const { isOpenProject, projectIdx } = useProjectContext();

  useEffect(() => {
    if (isServiceOpen || isResumeOpen || isOpenProject)
      document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "unset";
  }, [isServiceOpen, isResumeOpen, isOpenProject]);

  return (
    <>
      {isServiceOpen ? (
        <ServiceView serviceIdx={serviceIdx} />
      ) : isResumeOpen ? (
        <ResumeView resumeIdx={resumeIdx} resumePart={resumePart} />
      ) : isOpenProject ? (
        <ProjectView projectIdx={projectIdx} />
      ) : null}
    </>
  );
};

export default CardViews;
