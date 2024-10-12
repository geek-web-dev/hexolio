import { personal_data } from "@/config/home";
import SocialLinks from "../global/SocialLinks";

const Footer = () => {
  return (
    <div className="mt-16 ">
      <hr className="border-[--line-color]" />
      <footer className="mt-8 text-center flex flex-col items-center gap-2">
        <p>
          © 2024{" "}
          <span
            className="text-[--main] font-semibold"
            onClick={() =>
              window.scrollTo({ left: 0, top: 0, behavior: "instant" })
            }
          >
            {personal_data.name}
          </span>{" "}
          All Rights Reserved.
        </p>
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Footer;
