"use server";
import { personal_data } from "@/config/home";
import AboutCard from "../common/AboutCard";
import {
  about_image,
  about_me,
  cv,
  funfacts,
  goals,
  is_available,
  is_freelancer,
  languages,
  more_personal_data,
  skills,
  tools,
  what_i_offer,
} from "@/config/about";
import Tool from "../common/Tool";
import Funfact from "../common/Funfact";
import { ColorType } from "@/shared";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HeroButton from "../common/HeroButton";
import Image from "next/image";
import Clients from "../common/Clients";

import styles from "../../app/styles.module.css";
import LinearProgress1 from "../common/LinearProgress1";
import CircularProgress from "../common/CircularProgress";
import { Hexagon } from "../common/HexagonBG";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
const { sliderContainer, dotAvilability } = styles;

const About = () => {
  return (
    <section id="about">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-12 gap-4">
          <div className="bg-[--pure-background] border border-[--line-color] md:col-span-5 md:sticky relative left-0 top-4 h-fit p-4 rounded-sm mt-4">
            <div className="relative overflow-hidden group z-50">
              <div className="relative w-full h-auto aspect-square overflow-hidden rounded-sm z-40 group">
                <Image
                  className="object-cover"
                  src={about_image}
                  alt={"me"}
                  fill
                  sizes=""
                />
              </div>

              <div className="absolute left-0 top-0 w-full h-full">
                <Hexagon className="left-[-121px] bottom-[181px]" />
                <Hexagon className="left-[120px] bottom-[181px]" />
                <Hexagon className="left-[361px] bottom-[181px] !opacity-65" />

                <Hexagon className="left-0 bottom-0 !opacity-65" />
                <Hexagon className="left-[241px] bottom-0" />
                <Hexagon className="left-[482px] bottom-0" />

                <Hexagon className="left-[-120px] bottom-[-181px]" />
                <Hexagon className="left-[120px] bottom-[-181px]" />
                <Hexagon className="left-[361px] bottom-[-181px] !opacity-65" />
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <h1 className="text-3xl first-letter:text-[--main] text-[--pure-text] font-[800]">
                {personal_data.name}
              </h1>
              <div className="flex gap-1 text-xl text-[--pure-text] flex-wrap">
                <h2 className="font-[600]">{personal_data.job.part1}</h2>
                <h2 className="font-[600]">{personal_data.job.part2}</h2>
                <h2>{is_freelancer ? "- Freelancer" : ""}</h2>
              </div>
              <div className="flex items-center gap-2 text-[--paragraph]">
                <div
                  className={cn(
                    "w-2 h-2 relative rounded-full",
                    is_available ? "bg-[#7d7]" : "bg-red-500"
                  )}
                >
                  <div
                    className={cn(
                      dotAvilability,
                      "absolute left-0 top-0 right-0 bottom-0 opacity-100 rounded-full bg-inherit"
                    )}
                  />
                </div>
                {is_available ? "Available for hire" : "Not available for hire"}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:col-span-7 mt-4 mb-20 content-start gap-4">
            <AboutCard title="About Me" className="col-span-2">
              <p className="mb-4">{about_me}</p>
              <Link download={cv.file_type} href={cv.source}>
                <HeroButton text="Show Cv" />
              </Link>
            </AboutCard>

            <AboutCard title="What I Offer" className="col-span-2">
              <p>{what_i_offer}</p>
            </AboutCard>

            <AboutCard title="What I Use" className="col-span-2">
              <div className="grid 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
                {tools.map((item, i) => (
                  <Tool {...item} duration={100 + i * 300} key={i} />
                ))}
              </div>
            </AboutCard>

            <AboutCard title="Skills" className="lg:col-span-1 col-span-2">
              <div className="flex flex-col gap-4">
                {skills.map((item, i) => (
                  <LinearProgress1
                    key={i}
                    value={item.percent}
                    title={item.skill}
                    color={item.color as ColorType}
                  />
                ))}
              </div>
            </AboutCard>

            <AboutCard title="Languages" className="lg:col-span-1 col-span-2">
              <div className="flex flex-wrap gap-4">
                {languages.map((item, i) => (
                  <CircularProgress
                    key={i}
                    value={item.percent}
                    title={item.language}
                    color={item.color as ColorType}
                  />
                ))}
              </div>
            </AboutCard>

            <AboutCard title="Funfacts" className="col-span-2">
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-4 justify-between">
                {funfacts.map((item, i) => (
                  <Funfact {...item} key={i} color={item.color as ColorType} />
                ))}
              </div>
            </AboutCard>

            <AboutCard
              title="Clients Says"
              className="col-span-2 overflow-hidden h-56"
            >
              <div
                className={cn(
                  "h-36 overflow-hidden flex flex-col gap-4 rounded-sm",
                  sliderContainer
                )}
              >
                <Clients />
                <Clients />
              </div>
            </AboutCard>

            <AboutCard title="Know More" className="col-span-2">
              <div className="grid lg:grid-cols-2 gap-2">
                {more_personal_data.map((item, i) => (
                  <div
                    className="flex items-center gap-2 text-lg font-[500]"
                    key={i}
                  >
                    <span className="capitalize text-[--pure-text]">
                      {item.title}
                    </span>
                    <div className="h-px w-4 bg-[--paragraph] opacity-25" />
                    <span className="text-[--main]">{item.data}</span>
                  </div>
                ))}
              </div>
            </AboutCard>

            <AboutCard title="my Goals" className="col-span-2">
              <div className="space-y-4">
                {goals.map((item, i) => (
                  <li key={i} className="text-[--pure-text]">
                    <span className="font-[500]">{item.goal}</span>
                    <span className="text-[--paragraph] ml-2">
                      {item.description}
                    </span>
                  </li>
                ))}
              </div>
            </AboutCard>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
