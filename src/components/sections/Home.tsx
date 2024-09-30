"use client";
import { personal_data } from "@/config/home";
import CircularBackground from "../common/CircularBackground";
import HebtagonBG from "../common/HexagonBG";
import SocialLinks from "../common/SocialLinks";
import { cn } from "@/lib/utils";

import styles from "../../app/styles.module.css";
const { outlinedText, outlinedPureText } = styles;

const Home = () => {
  return (
    <section className="z-[10] sticky left-0 top-0" id="home">
      <CircularBackground className="-right-48 -bottom-48" />
      <CircularBackground className="left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-100" />
      <CircularBackground className="-right-48 -top-48" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={personal_data.image}
        alt="Hero"
        className="absolute bottom-0 right-[0] h-[105%] w-auto object-cover z-[1]"
        loading="lazy"
      />
      {/* using img in this case is better than using Image/next */}

      <HebtagonBG />

      <div className="absolute top-[50%] translate-y-[-50%] left-4 z-[2]">
        <div
          className="font-black uppercase"
          style={{ wordBreak: "break-word" }}
        >
          <h1 className={cn(outlinedPureText, "text-5xl text-[--main] ml-1")}>
            {personal_data.name}
          </h1>
          <h1
            className={cn(
              outlinedPureText,
              "text-[--pure-text] xl:text-[8rem] xl:leading-[8rem] md:text-[6rem] md:leading-[6rem] text-[3rem] leading-[3rem]"
            )}
          >
            {personal_data.job.part1}
          </h1>
          <h1
            className={cn(
              outlinedText,
              "text-[--pure-background] xl:text-[12rem] xl:leading-[12rem] md:text-[8rem] md:leading-[8rem] text-[4rem] leading-[4rem]"
            )}
          >
            {personal_data.job.part2}
          </h1>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Home;
