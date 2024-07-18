function EducationCard({ education }) {
  return (
    <div className="card">
      <div className="flex w-full gap-3">
        <img
          src={education.img}
          alt="educationimage"
          className="mt-1 h-[50px] rounded-[10px] bg-dark md:h-10 dark:bg-light"
        />
        <div className="flex w-full flex-col">
          <div className="text-lg font-semibold text-dark md:text-sm dark:text-light">
            {education.school}
          </div>
          <div className="text-sm font-medium text-dark/70 md:text-xs dark:text-light/70">
            {education.degree}
          </div>
          <div className="text-xs font-normal text-dark/70 md:text-[10px] dark:text-light/70">
            {education.date}
          </div>
        </div>
      </div>
      <div className="text-sm font-medium text-dark md:text-xs dark:text-light/70">
        <b>Grade: </b>
        {education.grade}
      </div>
      <div className="mb-2.5 w-full text-[15px] font-normal text-dark md:text-xs dark:text-light">
        <span className="[display:-webkit-box]">{education.desc}</span>
      </div>
    </div>
  );
}

export default EducationCard;
