import { createContext, useReducer, useContext } from "react";
import { TypeinitailState, TypeValue, Action, ProviderProps } from "./types";
import data from "../constants/data.json";

const langs = data.map((item) => item.languages);

const uniqueElements = [...new Set(langs.flat())];

const initailState: TypeinitailState = {
  jobs: data,
  languages: uniqueElements,
  filter: [],
};

const globalContext = createContext<TypeValue | undefined>(undefined);

const reducer = (state: TypeinitailState, action: Action) => {
  switch (action.type) {
    case "JOBS/FILTER":
      if (state.filter.includes(action.payload)) return state;
      return {
        ...state,
        filter: [...state.filter, action.payload],
        jobs: state.jobs.filter((item) => {
          console.log(action.payload);
          return [...new Set(item.languages.flat())].includes(action.payload);
        }),
      };
    case "JOBS/REST":
      return initailState;
    default:
      return state;
  }
};

const GContext: React.FC<ProviderProps> = ({ children }) => {
  const [{ jobs: jobsData, filter, languages }, dispatch] = useReducer(
    reducer,
    initailState
  );

  const handleClickFilter: (lang: string) => void = (lang: string) => {
    dispatch({ type: "JOBS/FILTER", payload: lang });
  };
  const values: TypeValue = {
    jobsData,
    dispatch,
    languages,
    handleClickFilter,
    filter,
  };
  return (
    <globalContext.Provider value={values}>{children}</globalContext.Provider>
  );
};
const useGContext: () => TypeValue = () => {
  const context = useContext(globalContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export { GContext, useGContext };
