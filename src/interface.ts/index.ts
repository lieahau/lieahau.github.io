import { COMPETITION_TYPE } from "../enum";

export interface CareerItem {
  date: string;
  company: string;
  url: string;
  position: string;
  responsibilities?: string[];
  description?: string;
  techUsed?: string[];
}

export interface CompetitionItem {
  year: string;
  type: COMPETITION_TYPE;
  name: string;
}

interface PortfolioItemDetail {
  label: string;
  value: string;
  link?: string;
}

export interface PortfolioItem {
  title: string;
  image: string;
  link: string;
  details: PortfolioItemDetail[];
  year: string;
}
