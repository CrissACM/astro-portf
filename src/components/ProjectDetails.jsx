import { Modal } from "@mui/material";
import { GithubIcon, LinkedInIcon, XClosed } from "./Icons";

export function ProjectDetails({ openModal, setOpenModal }) {
  const project = openModal?.project;

  return (
    <Modal
      open={openModal.state}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div
        className={`absolute left-0 top-0 flex h-full w-full justify-center overflow-y-scroll bg-[#FFFFFFa7] transition-all duration-[0.5s] ease-[ease] [align-items:top] dark:bg-[#000000a7]`}
      >
        <div className="relative mx-3 my-[30px] flex h-min w-full max-w-[800px] flex-col rounded-2xl bg-card p-5 text-dark dark:bg-carDark dark:text-light">
          <XClosed
            className="relative left-[90%] top-2 h-5 w-7 cursor-pointer"
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img
            src={project?.image}
            alt="project"
            className="mt-[30px] w-full rounded-xl object-cover shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]"
          />
          <div className="mx-1.5 mb-0 mt-2 text-[28px] font-semibold text-dark sm:mx-1.5 sm:mb-0 sm:mt-1.5 sm:text-2xl dark:text-light">
            {project?.title}
          </div>
          <div className="mx-1.5 my-0.5 text-base font-normal text-dark/70 md:text-xs dark:text-light/70">
            {project.date}
          </div>
          <div className="mx-0 my-2 flex flex-wrap sm:mx-0 sm:my-1">
            {project?.tags.map((tag, index) => (
              <div
                className="m-1 rounded-lg bg-primary/20 px-2 py-1 text-sm font-normal text-primary sm:text-xs dark:bg-primaryDark/20 dark:text-primaryDark"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="mx-1.5 my-2 text-base font-normal text-dark sm:m-1.5 sm:text-sm dark:text-light">
            {project?.description}
          </div>
          {project.member && (
            <>
              <div className="mx-1.5 my-2 text-xl font-semibold text-dark sm:mx-1.5 sm:my-2 sm:text-base dark:text-light">
                Members
              </div>
              <div className="mx-1.5 my-3 flex flex-col flex-wrap gap-1.5 sm:mx-1.5 sm:my-1">
                {project?.member.map((member) => (
                  <div className="flex items-center gap-3" key={member.name}>
                    <img
                      src={member.img}
                      alt="member"
                      className="mb-1 h-[50px] w-[50px] rounded-[50%] object-cover shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] sm:h-8 sm:w-8"
                    />
                    <div className="w-[200px] text-base font-medium text-dark sm:text-sm dark:text-light">
                      {member.name}
                    </div>
                    <a href={member.github} className="h-5 w-5">
                      <GithubIcon />
                    </a>
                    <a href={member.linkedin} className="h-5 w-5">
                      <LinkedInIcon />
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="mx-0 my-3 flex justify-end gap-3">
            <a
              dull="true"
              href={project?.github}
              target="new"
              className="w-full cursor-pointer rounded-lg bg-light px-4 py-3 text-center text-base font-semibold text-dark no-underline transition-all duration-[0.5s] ease-[ease] hover:bg-primary/70 dark:bg-dark dark:text-light dark:hover:bg-primaryDark/50"
            >
              View Code
            </a>
            <a
              href={project?.webapp}
              target="new"
              className="w-full cursor-pointer rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-dark no-underline transition-all duration-[0.5s] ease-[ease] hover:bg-primary/70 dark:bg-primaryDark/70 dark:text-light dark:hover:bg-primaryDark/40"
            >
              View App
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}
