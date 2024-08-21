import { skills } from "../data/en";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-[1] flex flex-col items-center justify-center"
    >
      <div className="relative flex w-full max-w-[1100px] flex-col items-center justify-between gap-3 md:flex-col">
        <div className="mt-5 text-center text-[42px] font-semibold text-dark md:mt-3 md:text-[32px] dark:text-light">
          Skills
        </div>
        <div className="max-w-[600px] text-center text-lg text-dark md:text-base dark:text-light/70">
          Here are some of my skills I've been working on.
        </div>
        <div className="mt-[30px] flex w-full flex-wrap justify-center gap-[30px]">
          {skills.map((skill, index) => (
            <div
              className="w-full max-w-[500px] rounded-2xl border-[0.1px] border-solid border-primary px-9 py-[18px] shadow-[rgba(23,92,230,0.15)_0px_4px_24px] md:max-w-[400px] md:px-9 md:py-2.5 xs:max-w-[330px] xs:px-9 xs:py-2.5 dark:border-primaryDark"
              key={index}
            >
              <h2 className="mb-5 text-center text-[28px] font-semibold text-dark dark:text-light">
                {skill.title}
              </h2>
              <div className="mb-5 flex flex-wrap justify-center gap-3">
                {skill.skills.map((item) => (
                  <div
                    className="flex items-center justify-center gap-2 rounded-xl border border-solid border-dark/70 px-4 py-3 text-base font-normal text-dark md:px-3 md:py-2 md:text-sm xs:px-3 xs:py-1.5 xs:text-sm dark:border-light/70 dark:text-light"
                    key={item.image}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-8 w-8 sm:h-6 sm:w-6"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
//test
export default Skills;
