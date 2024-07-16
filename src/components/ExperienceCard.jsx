function ExperienceCard({ experience }) {
  return (
    <div className={`card`}>
      <div className="flex w-full gap-3">
        <img
          src={experience.img}
          alt="expimg"
          className="mt-1 h-[50px] rounded-[10px] bg-dark md:h-10 dark:bg-light"
        />
        <div className="flex w-full flex-col">
          <div className="text-lg font-semibold text-dark md:text-sm dark:text-light">
            {experience.role}
          </div>
          <div className="text-sm font-medium text-dark/70 md:text-xs dark:text-light/70">
            {experience.company}
          </div>
          <div className="text-xs font-normal text-dark/70 md:text-[10px] dark:text-light/70">
            {experience.date}
          </div>
        </div>
      </div>
      <div className="mb-2.5 w-full text-[15px] font-normal text-dark md:text-xs dark:text-light">
        {experience?.desc && (
          <span className="[display:-webkit-box]">{experience?.desc}</span>
        )}
        {experience?.skills && (
          <>
            <br />
            <div className="-mt-2.5 flex w-full gap-3">
              <b>Skills:</b>
              <div className="flex flex-wrap gap-2">
                {experience?.skills?.map((skill, index) => (
                  <div
                    className="text-[15px] font-normal md:text-xs"
                    key={index}
                  >
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
