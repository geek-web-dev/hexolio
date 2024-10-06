"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type ResumeContextProps = {
  isResumeOpen: boolean;
  setIsResumeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  resumePart: "education" | "working";
  setResumePart: React.Dispatch<React.SetStateAction<"education" | "working">>;
  resumeIdx: number;
  setResumeIdx: React.Dispatch<React.SetStateAction<number>>;
};

export const ResumeContext = createContext({} as ResumeContextProps);

export const useResumeContext = () => useContext(ResumeContext);

export const ResumeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [resumePart, setResumePart] = useState<"education" | "working">(
    "education"
  );
  const [resumeIdx, setResumeIdx] = useState<number>(0);
  return (
    <ResumeContext.Provider
      value={{
        isResumeOpen,
        setIsResumeOpen,
        resumePart,
        setResumePart,
        resumeIdx,
        setResumeIdx,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContext;
