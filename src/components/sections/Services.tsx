"use client";
import { services } from "@/config/services";
import Service from "../common/services/Service";
import { ColorType } from "@/shared";
import SectionTitle from "../common/global/SectionTitle";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";

const Services = () => {
  return (
    <section id="services">
      <MaxWidthWrapper>
        <SectionTitle title="services" description="Services I Offered" />
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
          {services.map((item, i) => (
            <Service
              key={i}
              idx={i}
              {...item}
              color={item.color as ColorType}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
