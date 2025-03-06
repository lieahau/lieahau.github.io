import { Card, Divider, Typography } from "antd";
import SectionTitle from "./SectionTitle";
import CardTitle from "./CardTitle";
import { educationData } from "../data/educationData";

const { Text, Paragraph } = Typography;

const Education = () => {
  return (
    <section id="education">
      <SectionTitle title="EDUCATIONS" />
      <div style={{ display: "grid", gap: "20px" }}>
        {educationData.map((edu, index) => (
          <Card
            key={index}
            variant="borderless"
            style={{ backgroundColor: "#f0f5ff" }}
          >
            {/* Title */}
            <Text type="secondary">{edu.year}</Text>
            <CardTitle title={edu.institution} link={edu.link} />
            <Text strong>{edu.major}</Text>

            <Divider />

            {/* Content */}
            <Paragraph>{edu.description}</Paragraph>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
