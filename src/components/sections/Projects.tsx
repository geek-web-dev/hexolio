import { projects } from "@/config/projects";
import Project from "../common/projects/Project";
import SectionTitle from "../common/global/SectionTitle";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";

const Projects = () => {
  return (
    <section id="projects">
      <MaxWidthWrapper>
        <SectionTitle
          title="projects"
          description="My working gallery & projects portfolio"
        />
        <div className="grid xl:grid-cols-2 mt-4 gap-4">
          {projects.map((item, i) => (
            <Project key={i} projectIdx={i} {...item} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Projects;
