import { type ReactNode, Dispatch } from "react";

export type jobs = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type Action =
  | { type: "JOBS/FILTER"; payload: string }
  | { type: "JOBS/REST" };

export type ProviderProps = {
  children: ReactNode;
};

export type TypeValue = {
  jobsData: jobs[];
  dispatch: Dispatch<Action>;
  languages: string[];
  filter: string[];
  handleClickFilter: (lang: string) => void;
};

export type TypeinitailState = {
  jobs: jobs[];
  languages: string[];
  filter: string[];
};
