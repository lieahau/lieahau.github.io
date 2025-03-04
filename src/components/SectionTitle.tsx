import { Typography, Divider } from "antd";

const { Title } = Typography;

interface SectionTitleProps {
  title: string;
  style?: React.CSSProperties;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, style }) => (
  <div style={{ textAlign: "center", marginBottom: "20px", ...style }}>
    <Divider style={{ borderColor: '#000000' }}>
      <Title level={2} style={{ margin: 0 }}>
        {title}
      </Title>
    </Divider>
  </div>
);

export default SectionTitle;
