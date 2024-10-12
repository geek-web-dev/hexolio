import Image from "next/image";
import {
  about_image,
  background_img_path,
  is_available,
  is_freelancer,
  years_experience,
} from "@/config/about";
import { personal_data } from "@/config/home";
import HireAvailability from "../global/HireAvailability";

const AboutImageCard = () => {
  return (
    <div className="bg-[--pure-background] md:col-span-5 md:sticky relative left-0 top-4 h-fit p-4 mt-4 shadow-sm hover:shadow-md duration-1000 transition-shadow rounded-lg">
      <div className="relative overflow-hidden group bg-[--background] rounded-t-lg">
        <div className="relative w-full h-auto aspect-square overflow-hidden z-10 group ">
          <Image
            src={about_image}
            alt={"me"}
            fill
            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 75vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="absolute right-2 bottom-2 bg-[--pure-background] p-2 z-10 rounded-t-lg">
          <HireAvailability isAvailable={is_available} />
        </div>

        <div className="absolute left-0 top-0 size-full">
          {background_img_path ? (
            <>
              <div className="absolute left-0 top-0 size-full bg-black/35 dark:bg-black/50 z-[1]" />
              <Image
                src={background_img_path}
                alt="background"
                fill
                sizes="(max-width: 768px) 60vw, (max-width: 1200px) 75vw"
                className="relative object-cover z-0"
              />
            </>
          ) : null}
        </div>
      </div>
      <div className="mt-4 space-y-1 capitalize">
        <h1 className="text-3xl first-letter:text-[--main] text-[--pure-text] font-[800]">
          {personal_data.name} <span>👋🏼</span>
        </h1>
        <div className="flex gap-1 text-xl text-[--sub-text] flex-wrap">
          <h2 className="font-[600]">{personal_data.job.part1}</h2>
          <h2 className="font-[600]">{personal_data.job.part2}</h2>
          <h2>{is_freelancer ? "- Freelancer" : ""}</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutImageCard;
