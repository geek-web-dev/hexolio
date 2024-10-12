"use cilent";
import { useResumeContext } from "@/context/ResumeContext";
import ViewCardSlider from "../global/ViewCardSlider";
import { experience } from "@/config/experience";

const ExperienceView = ({
  resumeIdx,
  resumePart,
}: {
  resumeIdx: number;
  resumePart: "education" | "working";
}) => {
  const resume = experience[resumePart][resumeIdx];

  const { setIsResumeOpen, setResumeIdx } = useResumeContext();
  return (
    <ViewCardSlider
      closeHandler={() => setIsResumeOpen(false)}
      idx={resumeIdx}
      setIdx={setResumeIdx}
      list={experience[resumePart]}
    >
      <div className="mb-4 text-xl font-semibold text-[--sub-text] opacity-50 tracking-wider">
        From {resumePart} history
      </div>
      <h1 className="text-3xl font-bold uppercase text-[--sub-text]">
        {resume.event}
      </h1>
      <div className="mt-4 space-y-2 text-[--sub-text]">
        <span className="font-semibold">{resumePart} period</span>
        <span className="mx-2">|</span>
        <span>
          {resume.year.from} - {resume.year.to}
        </span>
        <p>{resume.description}</p>
      </div>
      <span className="block mt-4 font-semibold text-[--sub-text]">
        At <span className="text-[--main]">{resume.at}</span>
      </span>
    </ViewCardSlider>
  );
};

export default ExperienceView;
