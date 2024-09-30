import { projects } from "@/config/projects";
import Project from "../common/Project";
import SectionTitle from "../common/SectionTitle";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const Projects = () => {
  return (
    <section id="projects">
      <MaxWidthWrapper>
        <SectionTitle
          title="working"
          description="My working gallery & projects portfolio"
        />
        <div className="grid xl:grid-cols-2 mt-4 gap-4 rounded-sm">
          {projects.map((item, i) => (
            <Project
              key={i}
              projectIdx={i}
              duration={100 * (i + 1)}
              {...item}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Projects;
