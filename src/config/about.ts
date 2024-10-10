import {
  AlarmClock as time,
  Award as award,
  FlaskConical as experience,
  GraduationCap as courses,
  Layers3 as projects,
  Smile as happy_clients,
} from "lucide-react";

// ==================[ About Image ]================== //
export const about_image = "/images/about.png";
//

// ==================[ Years Experience ]================== //
export const years_experience = 9;
//

// ==================[ Are you Freelancer? ]================== //
export const is_freelancer = true; // true if you are, otherwise false
//

// ==================[ Are you available for hire? ]================== //
export const is_available = true; // true if you are, otherwise false
//

// ==================[ About Background Image ]================== //
export const background_img_path = ""; // image path for background | leave it "" for default background
//

// ==================[ About Me ]================== //
export const about_me =
  "Hey 👋🏼, I am a passionate web developer with a strong foundation in front-end and full-stack development 💪🏽. With expertise in Typescript, Node.js, React, Next.js, and Tailwind CSS, PHP Laravel, I build dynamic, responsive, and user-friendly websites and applications. I am committed to staying up-to-date with the latest technologies and best practices in web development ✅, ensuring that my projects are both modern and efficient with SEO and amazing performance optimization and accessibility 💎. I enjoy solving complex problems and creating seamless digital experiences that delight users and help businesses grow 🚀.";
//

// ==================[ Cv File ]================== //
export const cv = {
  source: "/cv.pdf", // if you don't have just leave source: ""
  file_type: "pdf",
};
//

// ==================[ Why Work With Me or What I offer ]================== //
export const what_i_offer =
  "I offer a range of web development services tailored to meet the unique needs of each client. Whether you need a sleek, modern website, a robust web application, or a comprehensive e-commerce solution 🛠, I am here to help. My services include front-end development with a focus on responsive design 🎨, full-stack development for complex applications ⚙️, and ongoing maintenance and support to keep your site running smoothly 🚀.";
//

// ==================[ What I Use or Tools ]================== //
export const tools = [
  // 1
  {
    name: "html",
    image: "/images/tools/html.png",
  },
  // 2
  {
    name: "tailwind",
    image: "/images/tools/tailwind.png",
  },
  // 3
  {
    name: "ts",
    image: "/images/tools/ts.png",
  },
  // 4
  {
    name: "react",
    image: "/images/tools/react.png",
  },
  // 5
  {
    name: "angular",
    image: "/images/tools/angular.png",
  },
  // 6
  {
    name: "nestjs",
    image: "/images/tools/nestjs.png",
  },
  // 7
  {
    name: "graphql",
    image: "/images/tools/graphql.png",
  },
  // 8
  {
    name: "nextjs",
    image: "/images/tools/nextjs.png",
  },
  // 9
  {
    name: "sql",
    image: "/images/tools/sql.png",
  },
  // 10
  {
    name: "laravel",
    image: "/images/tools/laravel.png",
  },
  // 11
  {
    name: "figma",
    image: "/images/tools/figma.png",
  },
  // 12
  {
    name: "php",
    image: "/images/tools/php.png",
  },
  // 13
  {
    name: "wordpress",
    image: "/images/tools/wordpress.png",
  },
  // 14
  {
    name: "docker",
    image: "/images/tools/docker.png",
  },
] as const;
//

/*
  Available Colors
  |
  1 - "blue"
  2 - "green"
  3 - "red"
  4 - "yellow"
  5 - "orange"
  6 - "pink"
  7 - "purple"
  8 - "cyan"
  9 - "teal"
  10 - "lime"
  11 - "fuchsia"
  12 - "black"
*/

// ==================[ Skills ]================== //
export const skills = [
  // 1
  {
    skill: "Responsive Design",
    percent: 95,
    color: "orange",
  },

  // 2
  {
    skill: "Coding",
    percent: 90,
    color: "yellow",
  },

  // 3
  {
    skill: "Problem Solving",
    percent: 88,
    color: "pink",
  },

  // 4
  {
    skill: "Project Management",
    percent: 79,
    color: "purple",
  },

  // 5
  {
    skill: "Communication",
    percent: 92,
    color: "teal",
  },
] as const;
//

// ==================[ Languages ]================== //
export const languages = [
  // 1
  {
    language: "English",
    percent: 96,
    color: "orange",
  },

  // 2
  {
    language: "Arabic",
    percent: 90,
    color: "teal",
  },

  // 3
  {
    language: "French",
    percent: 60,
    color: "blue",
  },

  // 4
  {
    language: "German",
    percent: 75,
    color: "pink",
  },
] as const;
//

/*
  Available funfacts icons
  |
  1 - experience
  2 - happy_clients
  3 - projects
  4 - time
  5 - award
  6 - courses
*/
// ==================[ Funfacts ]================== //
export const funfacts = [
  // 1
  {
    title: "Years of experience",
    Icon: experience,
    count: 9,
    color: "green",
  },

  // 2
  {
    title: "Happy Client",
    Icon: happy_clients,
    count: 102,
    color: "fuchsia",
  },

  // 3
  {
    title: "Projects Done",
    Icon: projects,
    count: 230,
    color: "cyan",
  },

  // 4
  {
    title: "Working Hours",
    Icon: time,
    count: 3000,
    color: "orange",
  },

  // 5
  {
    title: "Awards Won",
    Icon: award,
    count: 4,
    color: "lime",
  },

  // 6
  {
    title: "Courses Done",
    Icon: courses,
    count: 92,
    color: "pink",
  },
] as const;
//

// ==================[ What's Client says ]================== //
export const clients = [
  // 1
  {
    name: "john mark",
    rate: 5,
    comment:
      "I've been using for over a 3 monthes now, The user interface is intuitive and the feature",
  },

  // 2
  {
    name: "Amelia Daniel",
    rate: 4.5,
    comment:
      "Your themes really amazing and inspiring me, I am goning to work with you again",
  },

  // 3
  {
    name: "Ahmed Belal",
    rate: 5,
    comment:
      "You are really professional one and i am so happy of working with you, Thanks for solving my problems and I am goning to work with you again",
  },
] as const;
//

// ==================[ More Personal Data ]================== //
export const more_personal_data = [
  // 1
  {
    title: "age",
    data: 32,
  },

  // 2
  {
    title: "nationality",
    data: "Egyption",
  },

  // 3
  {
    title: "main language",
    data: "Arabic",
  },

  // 4
  {
    title: "english level",
    data: "Fluent (A)",
  },

  // 5
  {
    title: "freelance",
    data: "Available",
  },

  // 6
  {
    title: "working offline",
    data: "Not Available",
  },

  // 7
  {
    title: "phone",
    data: "(+1) 945 325 4653",
  },

  // 8
  {
    title: "email",
    data: "example@gmail.com",
  },

  // 9
  {
    title: "resident",
    data: "America, New York",
  },

  // 10
  {
    title: "availble working time",
    data: "6AM - 10PM",
  },
] as const;
//

// ==================[ Goals ]================== //
export const goals = [
  // 1
  {
    goal: "💎 Deliver High-Quality Web Solutions:",
    description:
      " Focus on creating websites and applications that are visually appealing, highly functional, and optimized for performance and SEO.",
  },

  // 2
  {
    goal: "😊 Enhance User Experience:",
    description:
      "Develop user-centric designs that provide seamless and intuitive navigation, ensuring a positive experience for all visitors.",
  },

  // 3
  {
    goal: "💪🏽 Take on Challenging Projects:",
    description:
      "Seek out complex and innovative projects that challenge my skills and allow me to push the boundaries of what is possible in web development.",
  },

  // 4
  {
    goal: "✅ Contribute to the Developer Community:",
    description:
      "Share knowledge and resources through blogging, open-source contributions, and mentoring, to give back to the development community and support others in their growth.",
  },
] as const;
//

// ==================[ Quote ]================== //
export const quote =
  "True mastery lies not in the act of working itself but in the relentless pursuit of growth, where every line of code becomes a stepping stone toward a vision. In this journey, perseverance transforms effort into excellence, and passion turns challenges into progress.";
//
