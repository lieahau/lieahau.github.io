import { Timeline, Card, Typography, Divider } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import SectionTitle from "./SectionTitle";
import { careerData } from "../data/careerData";
import CardTitle from "./CardTitle";

const { Text } = Typography;

interface CareerProps {
  style?: React.CSSProperties;
}

const Career: React.FC<CareerProps> = ({ style }) => {
  return (
    <section id="career" className="career_area" style={{ ...style }}>
      <SectionTitle title="CAREERS" />
      <Timeline
        style={{ maxWidth: "800px", margin: "auto" }}
        items={careerData.map((job) => ({
          dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
          children: (
            <Card
              size="small"
              style={{ marginBottom: "16px", padding: "16px" }}
            >
              {/* Title */}
              <Text strong>{job.date}</Text>
              <br />
              <CardTitle title={job.company} link={job.url} />
              <Text type="secondary">{job.position}</Text>

              <Divider />

              {/* Content */}
              {job.description && (
                <>
                  <Text>{job.description}</Text>
                  <br />
                  <br />
                </>
              )}

              {job.responsibilities && (
                <>
                  <Text strong>Responsibilities:</Text>
                  <ul>
                    {job.responsibilities.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                  <br />
                </>
              )}

              {job.techUsed && (
                <>
                  <Text strong>Tech & Programming Used:</Text>
                  <ul>
                    {job.techUsed.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}
            </Card>
          ),
        }))}
      />
    </section>
  );
};

export default Career;
