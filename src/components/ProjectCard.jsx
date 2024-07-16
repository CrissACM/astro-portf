function ProjectCard({ project, setOpenModal }) {
  return (
    <div
      onClick={() => setOpenModal({ state: true, project })}
      className="flex h-[490px] w-[330px] cursor-pointer flex-col gap-3.5 overflow-hidden rounded-[10px] bg-card px-5 py-[26px] shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] transition-all duration-[0.5s] ease-[ease-in-out] hover:-translate-y-2.5 hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-110 dark:bg-carDark [&>Button]:hover:block"
    >
      <img
        src={project.image}
        alt="project"
        className="h-[180px] w-full rounded-[10px] bg-dark object-cover shadow-[0_0_16px_2px_rgba(0,0,0,0.3)] dark:bg-light"
      />
      <div className="mt-1 flex w-full flex-wrap items-center gap-2">
        {project.tags?.map((tag, index) => (
          <span
            className="rounded-[10px] bg-primary/[0.08] px-2 py-0.5 text-xs font-normal text-primary dark:bg-primaryDark/[0.08] dark:text-primaryDark"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex w-full flex-col gap-0 px-0.5 py-0">
        <div className="max-w-full overflow-hidden text-ellipsis text-xl font-semibold text-dark [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box] dark:text-light">
          {project.title}
        </div>
        <div className="ml-0.5 text-xs font-normal text-dark/60 md:text-[10px] dark:text-light/60">
          {project.date}
        </div>
        <div className="mt-2 max-w-full overflow-hidden text-ellipsis font-normal text-dark/80 [-webkit-box-orient:vertical] [-webkit-line-clamp:3] [display:-webkit-box] dark:text-light/80">
          {project.description}
        </div>
      </div>
      <div className="flex items-center pl-2.5">
        {project.member?.map((member) => (
          <img
            key={member.name}
            src={member.img}
            alt="avatar"
            className="-ml-2.5 h-[38px] w-[38px] rounded-[50%] border-[3px] border-solid border-carDark bg-dark shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:border-card dark:bg-light"
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
