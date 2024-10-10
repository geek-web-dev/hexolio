"use client";
import AboutCard from "../common/about/AboutCard";
import {
  about_me,
  cv,
  funfacts,
  goals,
  is_available,
  languages,
  more_personal_data,
  quote,
  skills,
  tools,
  what_i_offer,
} from "@/config/about";
import Tool from "../common/about/Tool";
import Funfact from "../common/about/Funfact";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import HeroButton from "../common/global/HeroButton";
import Clients from "../common/about/Clients";
import LinearProgress1 from "../common/about/LinearProgress1";
import CircularProgress from "../common/about/CircularProgress";
import MaxWidthWrapper from "../common/global/MaxWidthWrapper";
import { FileSearch, Mail } from "lucide-react";
import HireAvailability from "../common/global/HireAvailability";
import Project from "../common/projects/Project";
import { projects } from "@/config/projects";
import AboutImageCard from "../common/about/AboutImageCard";
import ArrowLink from "../common/global/ArrowLink";

import styles from "../../app/styles.module.css";
const { sliderContainer } = styles;

const About = () => {
  return (
    <section id="about">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-12 gap-4">
          <AboutImageCard />

          <div className="grid grid-cols-2 md:col-span-7 mt-4 mb-20 content-start gap-4">
            {/* about me */}
            <AboutCard title="About Me" className="col-span-2">
              <p className="mb-4">{about_me}</p>

              <div className="flex gap-4 items-center flex-wrap">
                {cv.source ? (
                  <Link download={cv.file_type} href={cv.source}>
                    <HeroButton text="Show CV" Icon={FileSearch} />
                  </Link>
                ) : null}

                {is_available ? (
                  <LinkScroll
                    to="contact"
                    href="#contact"
                    aria-label="scroll to contact section"
                  >
                    <HeroButton text="Hire me" Icon={Mail} variant="outlined" />
                  </LinkScroll>
                ) : null}

                <HireAvailability
                  isAvailable={is_available}
                  className="border border-[--line-color] px-4 py-2 border-dashed rounded-full"
                />
              </div>
            </AboutCard>

            {/* What I Offer */}
            <AboutCard title="What I Offer" className="col-span-2">
              <p>{what_i_offer}</p>
            </AboutCard>

            {/* What I Use */}
            <AboutCard title="What I Use" className="col-span-2">
              <div className="grid 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
                {tools.map((item, i) => (
                  <Tool {...item} key={i} duration={(i + 1) * 300} />
                ))}
              </div>
            </AboutCard>

            {/* Skills */}
            <AboutCard title="Skills" className="lg:col-span-1 col-span-2">
              <div className="flex flex-col gap-4">
                {skills.map((item, i) => (
                  <LinearProgress1
                    key={i}
                    value={item.percent}
                    title={item.skill}
                    color={item.color}
                  />
                ))}
              </div>
            </AboutCard>

            {/* Languages */}
            <AboutCard title="Languages" className="lg:col-span-1 col-span-2">
              <div className="flex flex-wrap gap-4">
                {languages.map((item, i) => (
                  <CircularProgress
                    key={i}
                    value={item.percent}
                    title={item.language}
                    color={item.color}
                  />
                ))}
              </div>
            </AboutCard>

            {/* Funfacts */}
            <AboutCard title="Funfacts" className="col-span-2">
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-4 justify-between">
                {funfacts.map((item, i) => (
                  <Funfact {...item} key={i} />
                ))}
              </div>
            </AboutCard>

            {/* Clients Says */}
            <AboutCard
              title="Clients Says"
              className="col-span-2 overflow-hidden h-56"
            >
              <div
                className={cn(
                  "h-36 overflow-hidden flex flex-col gap-4 bg-[--pure-background]",
                  sliderContainer
                )}
              >
                <Clients />
                <Clients />
              </div>
            </AboutCard>

            {/* Resent Projects */}
            <AboutCard title="Resent Projects" className="col-span-2">
              <div className="grid xl:grid-cols-2 gap-4">
                {projects.slice(0, 2).map((item, i) => (
                  <Project key={i} inCard={true} projectIdx={i} {...item} />
                ))}
              </div>
              <LinkScroll
                to="projects"
                href="#projects"
                aria-label="scroll to projects section"
                className="block mt-4"
              >
                <ArrowLink text="All Projects" />
              </LinkScroll>
            </AboutCard>

            {/* Know More */}
            <AboutCard title="Know More" className="col-span-2">
              <div className="grid lg:grid-cols-2 gap-4">
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

            {/* my Goals*/}
            <AboutCard title="my Goals" className="col-span-2">
              <ul className="space-y-4">
                {goals.map((item, i) => (
                  <li key={i} className="text-[--pure-text] flex flex-col">
                    <span className="font-[500]">{item.goal}</span>
                    <span className="text-[--paragraph]">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </AboutCard>

            {/* my Quote */}
            <AboutCard title="my Quote" className="col-span-2">
              <blockquote className="text-[--paragraph] italic">
                {"“"}
                {quote}
                {"”"}
              </blockquote>
            </AboutCard>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
