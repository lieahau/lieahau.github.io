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
