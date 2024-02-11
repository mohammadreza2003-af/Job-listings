import { useGContext } from "../contexts/globalContext";
import JobList from "./JobList";

const Main = () => {
  const { languages, handleClickFilter, filter, dispatch } = useGContext();

  const handleRest: () => void = () => {
    dispatch({ type: "JOBS/REST" });
  };
  return (
    <div className="w-full sm:py-20 py-14 h-min:h-screen">
      <div className="sm:py-8 py-8 px-4 sm:px-4 bg-white rounded-lg shadow-lg mb-16 flex justify-between">
        <div>
          <div className="sm:flex grid grid-cols-3 gap-4 sm:gap-x-4">
            {languages.map((lang) => (
              <span
                key={lang}
                className="bg-secondary2 text-primary font-semibold text-md px-3 py-1 rounded-lg cursor-pointer"
                onClick={() => handleClickFilter(lang)}
              >
                {lang}
              </span>
            ))}
          </div>
          {filter.length > 0 && (
            <>
              <div className="w-full h-[1px] my-8 bg-slate-300" />
              <div className="sm:flex grid grid-cols-3 gap-4 sm:gap-x-4">
                {filter.map((lang) => (
                  <span
                    key={lang}
                    className="bg-secondary2 text-primary font-semibold text-md px-3 py-1 rounded-lg cursor-pointer"
                    onClick={() => handleClickFilter(lang)}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
        {filter.length > 0 && (
          <button
            className="underline text-primary"
            onClick={() => handleRest()}
          >
            Clear
          </button>
        )}
      </div>
      <JobList />
    </div>
  );
};

export default Main;
