export interface PortfolioItem {
  title: string;
  image: string;
  link: string;
  details: { label: string; value: string; link?: string }[];
  year: string;
}
