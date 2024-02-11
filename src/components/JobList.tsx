import { useGContext } from "../contexts/globalContext";
const JobList = () => {
  const { jobsData, handleClickFilter } = useGContext();

  return (
    <>
      {jobsData.map((item) => (
        <div
          className={`bg-white sm:px-12 px-8 sm:py-8 py-6 rounded-md sm:mb-6 mb-14 ${
            item.featured && "border-l-4 border-primary"
          } shadow-lg`}
          key={item.id}
        >
          <div className="flex sm:flex-row flex-col sm:items-center items-start sm:justify-between">
            <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-y-0 gap-y-4 sm:mt-0 -mt-16 justify-center">
              <img src={item.logo} className="w-auto mr-8" />
              <div className="flex flex-col gap-y-1">
                <div className="flex justify-start items-center">
                  <p className="font-semibold text-primary mr-4">
                    {item.company}
                  </p>
                  {item.postedAt === "2d ago" ||
                    ("1d ago" && (
                      <span className="px-2 text-secondary2 rounded-full bg-primary">
                        NEW!
                      </span>
                    ))}
                  {item.featured && (
                    <span className="px-2 text- rounded-full bg-thr text-secondary2 ml-2">
                      FEATURED
                    </span>
                  )}
                </div>
                <h2 className="text-thr font-bold text-xl hover:text-primary transition-all ease-in-out duration-300">
                  {item.position}
                </h2>
                <div className="flex gap-x-4 text-forth font-medium">
                  <span>{item.postedAt}</span>
                  <span>.</span>
                  <span>{item.contract}</span>
                  <span>.</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] my-8 bg-forth sm:hidden"></div>
            <div className="flex gap-x-4">
              {item.languages.map((lang) => (
                <span
                  key={lang}
                  className="bg-secondary2 text-primary font-semibold text-md px-3 py-1 rounded-lg cursor-pointer"
                  onClick={() => handleClickFilter(lang)}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobList;
