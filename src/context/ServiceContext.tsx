"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type ServiceContextProps = {
  isServiceOpen: boolean;
  setIsServiceOpen: React.Dispatch<React.SetStateAction<boolean>>;
  serviceIdx: number;
  setServiceIdx: React.Dispatch<React.SetStateAction<number>>;
  isGetService: boolean;
  setIsGetService: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ServiceContext = createContext({} as ServiceContextProps);

export const useServiceContext = () => useContext(ServiceContext);

export const ServiceContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [serviceIdx, setServiceIdx] = useState<number>(0);
  const [isGetService, setIsGetService] = useState(false);
  return (
    <ServiceContext.Provider
      value={{
        isServiceOpen,
        setIsServiceOpen,
        serviceIdx,
        setServiceIdx,
        isGetService,
        setIsGetService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceContext;
