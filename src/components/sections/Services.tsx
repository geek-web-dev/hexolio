"use client";
import { services } from "@/config/services";
import Service from "../common/services/Service";
import SectionTitle from "../common/global/SectionTitle";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import { useState } from "react";
import ArrowLink from "../common/global/ArrowLink";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const MAX = 8;
  return (
    <section id="services">
      <MaxWidthWrapper>
        <SectionTitle title="services" description="Services I Offered" />
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
          {services.slice(0, MAX).map((item, i) => (
            <Service key={i} idx={i} {...item} />
          ))}
          {showAll
            ? services
                .slice(MAX)
                .map((item, i) => (
                  <Service
                    key={i}
                    idx={i}
                    projectIdx={i}
                    doShowAnimation={true}
                    {...item}
                  />
                ))
            : ""}
        </div>
        {services.length > MAX && !showAll ? (
          <ArrowLink
            text={`Show All (+${services.length - MAX})`}
            handler={() => setShowAll(true)}
            className="mx-auto mt-12 text-xl"
          />
        ) : null}
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
