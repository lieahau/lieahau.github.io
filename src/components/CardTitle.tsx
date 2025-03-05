import { Typography } from "antd";
import "./../styles/cardTitle.css";

interface CardTitleProps {
  title: string;
  link?: string;
}

const { Title, Link } = Typography;

const CardTitle: React.FC<CardTitleProps> = ({ title, link }) => {
  return link ? (
    <Link href={link} target="_blank" className="card-title-link">
      <Title
        level={4}
        className="card-title"
        style={{ margin: 0, color: "#1890ff" }}
      >
        {title}
      </Title>
    </Link>
  ) : (
    <Title level={4} style={{ margin: 0 }}>
      {title}
    </Title>
  );
};

export default CardTitle;
