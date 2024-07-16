import { useState } from "react";
import { projects } from "../data/en";
import ProjectCard from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails";

function Projects() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [toggle, setToggle] = useState("all");

  return (
    <>
      <div
        id="projects"
        className="relative z-[1] flex flex-col items-center justify-center [background:linear-gradient(343.07deg,rgba(132,59,206,0.06)_5.71%,rgba(132,59,206,0)_64.83%)] [clip-path:polygon(0_0,100%_0,100%_100%,100%_98%,0_100%)]"
      >
        <div className="relative flex w-full max-w-[1350px] flex-col items-center justify-between gap-3 px-0 pb-[100px] pt-2.5 md:flex-col">
          <div className="mt-5 text-center text-[42px] font-semibold text-dark md:mt-3 md:text-[32px] dark:text-light">
            Projects
          </div>
          <div className="mt-3 max-w-[600px] text-center text-lg text-dark/70 md:text-base dark:text-light/70">
            I have worked on a wide range of projects. From vanilla apps, web
            apps or mobile apps. Here are some of my projects.
          </div>
          <div className="mx-0 my-[22px] flex rounded-xl border-[1.5px] border-solid border-primary text-base font-medium text-primary md:text-xs dark:border-primaryDark dark:text-primaryDark">
            {toggle === "all" ? (
              <div
                active="true"
                value="all"
                onClick={() => setToggle("all")}
                className="cursor-pointer rounded-l-lg bg-primary/30 px-[18px] py-2 hover:bg-primary/40 md:px-2 md:py-1.5 dark:bg-primaryDark/20 dark:hover:bg-primaryDark/10"
              >
                All
              </div>
            ) : (
              <div
                value="all"
                onClick={() => setToggle("all")}
                className="cursor-pointer rounded-md px-[18px] py-2 hover:bg-primary/30 active:bg-primary/20 md:rounded md:px-2 md:py-1.5 dark:hover:bg-primaryDark/10 dark:active:bg-primaryDark/20"
              >
                All
              </div>
            )}
            <div className="w-[1.5px] bg-primary dark:bg-primaryDark" />
            {toggle === "vanilla" ? (
              <div
                active="true"
                value="vanilla"
                onClick={() => setToggle("vanilla")}
                className="cursor-pointer bg-primary/30 px-[18px] py-2 hover:bg-primary/40 md:px-2 md:py-1.5 dark:bg-primaryDark/20 dark:hover:bg-primaryDark/10"
              >
                VANILLA
              </div>
            ) : (
              <div
                value="vanilla"
                onClick={() => setToggle("vanilla")}
                className="cursor-pointer px-[18px] py-2 hover:bg-primary/30 active:bg-primary/20 md:rounded md:px-2 md:py-1.5 dark:hover:bg-primaryDark/10 dark:active:bg-primaryDark/20"
              >
                VANILLA
              </div>
            )}
            <div className="w-[1.5px] bg-primary dark:bg-primaryDark" />
            {toggle === "web app" ? (
              <div
                active="true"
                value="web app"
                onClick={() => setToggle("web app")}
                className="cursor-pointer bg-primary/30 px-[18px] py-2 hover:bg-primary/40 md:px-2 md:py-1.5 dark:bg-primaryDark/20 dark:hover:bg-primaryDark/10"
              >
                WEB APP'S
              </div>
            ) : (
              <div
                value="web app"
                onClick={() => setToggle("web app")}
                className="cursor-pointer px-[18px] py-2 hover:bg-primary/30 active:bg-primary/20 md:rounded md:px-2 md:py-1.5 dark:hover:bg-primaryDark/10 dark:active:bg-primaryDark/20"
              >
                WEB APP'S
              </div>
            )}
            <div className="w-[1.5px] bg-primary dark:bg-primaryDark" />
            {toggle === "mobile app" ? (
              <div
                active="true"
                value="mobile app"
                onClick={() => setToggle("mobile app")}
                className="cursor-pointer rounded-r-lg bg-primary/30 px-[18px] py-2 hover:bg-primary/40 md:px-2 md:py-1.5 dark:bg-primaryDark/20 dark:hover:bg-primaryDark/10"
              >
                MOBILE APP'S
              </div>
            ) : (
              <div
                value="mobile app"
                onClick={() => setToggle("mobile app")}
                className="cursor-pointer rounded-r-lg px-[18px] py-2 hover:bg-primary/30 active:bg-primary/20 md:rounded md:px-2 md:py-1.5 dark:hover:bg-primaryDark/10 dark:active:bg-primaryDark/20"
              >
                MOBILE APP'S
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-7">
            {toggle === "all" &&
              projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            {projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
          </div>
        </div>
      </div>

      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
}

export default Projects;
