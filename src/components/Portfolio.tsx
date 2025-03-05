import { Tabs } from "antd";
import { gamePortfolio, websitePortfolio } from "../data/portfolioData";
import PortfolioList from "./PortfolioList";
import SectionTitle from "./SectionTitle";

interface PortfolioProps {
  style?: React.CSSProperties;
}

const Portfolio: React.FC<PortfolioProps> = ({ style }) => {
  return (
    <section id="portfolio" className="portfolio_area" style={{ ...style }}>
      <SectionTitle title="PORTFOLIOS" />
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            key: "1",
            label: "Game Development",
            children: <PortfolioList data={gamePortfolio} />,
          },
          {
            key: "2",
            label: "Website",
            children: <PortfolioList data={websitePortfolio} />,
          },
        ]}
      />
    </section>
  );
};

export default Portfolio;
