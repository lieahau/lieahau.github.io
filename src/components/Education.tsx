import { Card, Divider, Typography } from "antd";
import SectionTitle from "./SectionTitle";

const { Title, Text } = Typography;

const educationData = [
  {
    year: "2016 - 2020",
    institution: "Universitas Multimedia Nusantara",
    link: "https://www.umn.ac.id",
    major: "Informatics - Game Development",
    description:
      "During my time at UMN, I specialized in Informatics with a focus on Game Development.\n" +
      "I actively participated in two organizations: the Game Development Club (GDC), where I both learned and taught game development concepts,\n" +
      "and the UMN Programming Club (UMNPC), which allowed me to study, teach, and compete in Competitive Programming.",
  },
  {
    year: "2013 - 2016",
    institution: "SMK Kristen Kanaan",
    link: "https://kanaan.sch.id/sekolah-menengah-kejuruan-smk/",
    major: "Multimedia",
    description:
      "At Kanaan vocational high school, I majored in Multimedia, gaining skills in design, photography, and photo/video editing.\n" +
      "I also learned foundational programming in Java and Visual Basic.\n" +
      "Additionally, I participated in a chess extracurricular to enhance my logical thinking skills.",
  },
  {
    year: "2010 - 2013",
    institution: "SMP Santo Leo",
    description:
      "I graduated from junior high school, where I was first introduced to programming through HTML.",
  },
];

const Education = () => {
  return (
    <section id="education">
      <SectionTitle title="EDUCATION" />
      <div style={{ display: "grid", gap: "20px" }}>
        {educationData.map((edu, index) => (
          <Card
            key={index}
            variant="borderless"
            style={{ backgroundColor: "#f0f5ff" }}
          >
            {/* Title */}
            <Text type="secondary">{edu.year}</Text>
            <Title level={4} style={{ margin: "8px 0" }}>
              {edu.link ? (
                <a href={edu.link} target="_blank" rel="noopener noreferrer">
                  {edu.institution}
                </a>
              ) : (
                edu.institution
              )}
            </Title>
            <Text strong>{edu.major}</Text>

            <Divider />

            {/* Content */}
            <p style={{ marginTop: "8px", whiteSpace: "pre-line" }}>
              {edu.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
