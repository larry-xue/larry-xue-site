'use client'

import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
import SideMenu from "./components/side-menu";

export default function Home() {
  const technologies: Record<string, string[]> = {
    language: ["HTML", "Javascript", "TypeScript", "Rust", "Go",],
    vue: ["Vue 2/3", "Vuex", "Vue Router", "Nuxt.js", "Vitepress"],
    style: ["Tailwind", "DaisyUI", "SCSS", "CSS",],
    react: ["React", "Nuxt.js", "Redux", "React-Query",],
    build: ["Vite", "Webpack",],
    graph: ["Three.js", "Echarts",],
    backend: ["Node.js", "Nest.js", "Express.js", "Prisma", "TypeORM", "MySQL", "MongoDB", "Docker",],
    tools: ["Insomnia", "Git",],
    platform: ["Cloudflare", "Vercel",]
  }

  const chipTheme: ("default" | "primary" | "secondary" | "success" | "warning" | "danger")[] = ["primary", "secondary", "success", "warning", "danger", "default"]
  const chipVariants: ("solid" | "bordered" | "flat" | "faded" | "shadow")[] = ["solid", "bordered", "flat", "faded", "shadow"]

  const experienceList = [
    {
      title: "Frontend Developer",
      company: "eSurfing Cloud",
      time: "January 2024 - Present",
      desc: "Collaborated with product and project managers, designers, and fellow engineers to develop and deploy features within an agile (3 week) cadence"
    },
    {
      title: "Junior Frontend Developer",
      company: "eSurfing Cloud",
      time: "July 2022 - January 2024",
      desc: "Build, style, and ship high-quality websites for a diverse array of clients using technologies using Javascript, TypeScript, Vue, Echarts, SCSS and more"
    },
    {
      title: "Freelancer Frontend Developer",
      time: "August 2019 - June 2022",
      desc: "Studied frontend development independently, focusing on Javascript, HTML, CSS, jQuery, Bootstrap, and Vue.js."
    }
  ]

  const sideProjects = [
    {
      title: "AI Hub powered by Cloudflare Worker AI",
      desc: "Developed a project using Nuxt.js and Cloudflare Worker AI, facilitating users to multiple Cloudflare Worker AI functionalities. Integrated dark/light mode and OAuth login with GitHub for enhanced user experience. Additionally, empowered users to deploy their private AI sites.",
      preview: "https://ai.larryxue.dev/",
      github: "https://github.com/larry-xue/nuxt-chat-cloudflare",
    },
    {
      title: "Folder to JSON",
      desc: "Folder to JSON is a web application utilizing the showDirectoryPicker API to enable users to select a folder on their local machine. It recursively retrieves subdirectories to generate a JSON tree structure representing the directory hierarchy.",
      preview: "https://folder2json.larryxue.dev/",
      github: "https://github.com/larry-xue/folder-to-json"
    },
    {
      title: "Larry Xue Site",
      desc: "Built a personal website using Next.js and Next UI.",
      preview: "https://larryxue.dev/",
      github: "https://github.com/larry-xue/larry-xue-site"
    },
    {
      title: "Vite Vue2 Starter Template",
      desc: "vite-vue2-starter is a template for quickly starting Vue.js 2 projects. Built on the Vite v5 build tool",
      preview: "",
      github: "https://github.com/larry-xue/vite-vue2-starter"
    }
  ]

  const onOpenLink = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <>
      <SideMenu />
      <div className="mx-auto w-full text-center mt-16 md:flex justify-center gap-12">
        <div className="avatar hover:scale-110 duration-300 flex justify-center items-center">
          <Image className="rounded-tl-lg rounded-br-lg" width={200} height={200} src="/avatar.png" alt="avatar" as={NextImage} />
        </div>
        <div>
          <h1
            className="hover:text-shadow-3 m-0 font-heading font-black transition-all duration-300 text-primary text-4xl md:text-5xl mt-4">
            Yujian(Larry) Xue</h1>
          <div className="flex flex-col gap-4 italic text-lg md:text-left mt-4">
            <p>Frontend Engineer 💻</p>
            <p>Side Project Manager 🚀</p>
            <p>Beginner UI/UX Designer 🤯</p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-2">
        <h4 className="hover:text-shadow-3 m-0 font-heading text-lg font-black transition-all duration-300">A
          bit about me</h4>
        <p>Hey there! 👋 I'm Yujian (Larry), a results-driven Front-End Developer with over 2 years of fulltime work experience,
          specializing in web application development. Currently employed at eSurfing Cloud, I'm passionate about crafting
          engaging user experiences and leveraging cutting-edge technologies to bring ideas to life.</p>
      </div>
      <div className="px-4 mt-4 w-full">
        <h4
          className="hover:text-shadow-3 m-0 font-heading text-lg font-black tracking-[-0.1rem] transition-all duration-300">
        </h4>
        <Accordion variant="splitted" selectionMode="multiple" defaultExpandedKeys={["technologies and tools", "personal traits"]}>
          <AccordionItem
            title="Technologies and Tools"
            key="technologies and tools"
            aria-label="technologies and tools"
          >
            {Object.keys(technologies).map((key) => (
              <div key={key} className="flex flex-wrap gap-2 mb-2">
                {technologies[key].map((tech) => (
                  <Chip
                    key={tech}
                    color={chipTheme[Math.floor(Math.random() * chipTheme.length)]}
                    variant={chipVariants[Math.floor(Math.random() * chipVariants.length)]}
                  >
                    {tech}
                  </Chip>
                ))}
              </div>
            ))}
          </AccordionItem>
          <AccordionItem
            title="Personal Traits"
            key="personal traits"
            aria-label="Personal Traits"
          >
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
              🦉<span className="font-bold">Remote Work Enthusiast</span>: Actively seeking remote development opportunities to embrace flexibility and expand my horizons.
            </p>

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
              🪰<span className="font-bold">Running Enthusiast</span>: Outside of coding, you can often find me enjoying a refreshing run.
            </p>

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
              🦆<span className="font-bold">Work-Life Balance Advocate</span>: Valuing work-life balance, I prioritize maintaining harmony between professional and personal life.
            </p>

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
              🐸<span className="font-bold">Technical Excellence Pursuer</span>: Detail-oriented and constantly striving for excellence in technical implementations, I stay updated with the latest advancements in the field.
            </p>

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
              🐲<span className="font-bold">AI Technology Follower</span>: I'm particularly interested in AI technology, especially in how it can be utilized to enhance work efficiency. I enjoy experimenting with various AI tools and staying updated on the latest advancements in the field.
            </p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="my-12 px-4 w-full" id="experience">
        <h1
          className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
          Experience</h1>

        <Accordion selectionMode="multiple" defaultExpandedKeys={experienceList.map((exp) => exp.title)}>
          {experienceList.map((exp, idx) => (
            <AccordionItem
              title={exp.title}
              subtitle={exp.company + exp.time}
              key={exp.title}
              aria-label={exp.title}
            >
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
                {exp.desc}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div >

      <div className="mb-12 px-4 w-full" id="education">
        <h1
          className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
          Education</h1>
        <div>
          <h3 className="text-2xl font-bold">Bachelor of Science</h3>
          <p className="text-lg">Fuzhou University Computer Science (2018 - 2022)</p>
        </div>
      </div>

      <div className="mb-12 px-4" id="side-projects" >
        <h1
          className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
          Side Projects</h1>
        <div className="flex flex-wrap gap-4">
          {
            sideProjects.map((project) => (
              <Card className="md:w-[300px] w-full" key={project.github}>
                <CardHeader className="flex gap-3">
                  <h2 className="text-md">{project.title}</h2>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>{project.desc}</p>
                </CardBody>
                <Divider />
                <CardFooter className="flex gap-3">
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.preview}
                    isDisabled={!project.preview}
                  >
                    Preview
                  </Link>
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.github}
                    isDisabled={!project.github}
                  >
                    GitHub
                  </Link>
                </CardFooter>
              </Card>
            ))
          }
        </div >
      </div >
    </ >
  );
}
