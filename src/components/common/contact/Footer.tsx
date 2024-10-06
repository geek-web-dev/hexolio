import { personal_data } from "@/config/home";
import SocialLinks from "../global/SocialLinks";

const Footer = () => {
  return (
    <footer className="mt-16 text-center flex flex-col items-center gap-2">
      <p>
        © 2024{" "}
        <span
          className="text-[--main]"
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
  );
};

export default Footer;
