"use client";
import { personal_data } from "@/config/home";
import CircularBackground from "../common/global/CircularBackground";
import HexagonBG from "../common/global/HexagonBG";
import SocialLinks from "../common/global/SocialLinks";
import { cn } from "@/lib/utils";
import styles from "../../app/styles.module.css";
import Image from "next/image";
const { outlinedText, outlinedPureText } = styles;

const Home = () => {
  return (
    <section className="sticky left-0 top-0 z-10" id="home">
      <CircularBackground className="-right-48 -bottom-48" />
      <CircularBackground className="left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-100" />
      <CircularBackground className="-right-48 -top-48" />

      <Image
        src={personal_data.image}
        alt={personal_data.name}
        width={833}
        height={744}
        className="absolute bottom-0 right-[0] object-cover z-10"
        sizes="(max-width: 768px) 60vw, (max-width: 1200px) 75vw"
        quality={100}
      />

      <HexagonBG />

      <div className="absolute top-[50%] translate-y-[-50%] left-4 z-20">
        <div
          className="font-black uppercase space-y-4"
          style={{ wordBreak: "break-word" }}
        >
          <h1 className={cn(outlinedPureText, "text-5xl text-[--main] ml-1")}>
            {personal_data.name}
          </h1>

          <h1
            className={cn(
              outlinedPureText,
              "text-[--pure-text] 2xl:text-[9rem] 2xl:leading-[9rem] xl:text-[8rem] xl:leading-[8rem] md:text-[6rem] md:leading-[6rem] text-[3rem] leading-[3rem]"
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
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Home;
