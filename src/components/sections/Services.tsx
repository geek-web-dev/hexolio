import { services } from "@/config/services";
import Service from "../common/Service";
import { ColorType } from "@/shared";
import SectionTitle from "../common/SectionTitle";
import MaxWidthWrapper from "../common/MaxWidthWrapper";

const Services = () => {
  return (
    <section id="services">
      <MaxWidthWrapper>
        <SectionTitle title="services" description="Services I Offered" />
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 mt-4">
          {services.map((item, i) => (
            <Service key={i} {...item} color={item.color as ColorType} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
