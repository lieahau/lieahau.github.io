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

export interface EducationItem {
  year: string;
  institution: string;
  description: string;
  link?: string;
  major?: string;
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

interface SkillDetail {
  name: string;
  level: number;
}

export interface SkillItem {
  category: string;
  items: SkillDetail[];
}
