import { Timeline, Card, Typography } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import SectionTitle from "./SectionTitle";

const { Text, Link } = Typography;

interface CareerProps {
  style?: React.CSSProperties;
}

const careerData = [
  {
    date: "January 2023 - Present",
    company: "Sea Labs (Shopee) Indonesia",
    url: "https://shopee.co.id",
    position: "Senior Game Engineer",
    responsibilities: [
      "Lead of Shopee Tebak Kata's Game Engineer.",
      "Lead of Shopee Cocoki's Game Engineer.",
      "Developer of Shopee Bubble game.",
      "Creator of Cocos Dev Tool Plugin.",
    ],
    techUsed: ["TypeScript", "Cocos 3 game engine", "ReactJS"],
  },
  {
    date: "November 2020 - December 2022",
    company: "Shopee Indonesia",
    url: "https://shopee.co.id",
    position: "Game Engineer",
    responsibilities: [
      "Developer of Shopee Bubble game.",
      "Developer of Shopee Tebak Kata game.",
    ],
    techUsed: ["TypeScript", "Phaser 3 game engine", "Cocos 3 game engine"],
  },
  {
    date: "June 2020 - September 2020",
    company: "Last Boss Studio - Indigo Game Startup Incubation (IGSI)",
    url: "https://play.google.com/store/apps/details?id=com.LastBossStudio.TowerDungeon",
    position: "Game Programmer",
    description:
      "Participated individually in the IGSI program and joined Last Boss Studio on a four-month contract. Started as a Junior Programmer and later became the sole programmer for the project.",
    techUsed: ["C#", "Unity"],
  },
  {
    date: "September 2017 - December 2019",
    company: "Universitas Multimedia Nusantara",
    url: "https://www.umn.ac.id/",
    position: "Computer Lab Assistant",
    responsibilities: [
      "Taught courses: Microsoft Office, Adobe, Basic Programming, Data Structures, and Game Development.",
    ],
  },
  {
    date: "October 2019",
    company: "Oval Tech - Kompas Gramedia",
    url: "http://www.oval.id/",
    position: "Software Engineer (Freelance)",
    responsibilities: ["Back-end developer for KiriminBuku website."],
    techUsed: ["Python3 (Django Rest Framework)"],
  },
  {
    date: "June 2019 - August 2019",
    company: "Oval Tech - Kompas Gramedia",
    url: "http://www.oval.id/",
    position: "Software Engineer (Internship)",
    responsibilities: ["Front-end developer for MySantika Intranet."],
    techUsed: ["Python3 (Django Rest Framework)", "HTML5", "CSS (Bootstrap)"],
  },
  {
    date: "July 2018 - September 2018",
    company: "Oval Tech - Kompas Gramedia",
    url: "http://www.oval.id/",
    position: "Software Engineer (Internship)",
    responsibilities: ["Back-end developer for MySantika mobile app."],
    techUsed: ["Python3 (Django Rest Framework)"],
  },
  {
    date: "April 2015 - May 2015",
    company: "PT. Dian Innovative Solusindo",
    url: "https://www.innovative.co.id/",
    position: "Website Developer (Internship)",
    responsibilities: ["Front-end developer for company profile website."],
    techUsed: ["HTML5", "CSS (Bootstrap)", "JavaScript", "PHP"],
  },
];

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
              title={
                <>
                  <Text strong>{job.date}</Text>
                  <br />
                  <Link href={job.url} target="_blank">
                    {job.company}
                  </Link>
                  <br />
                  <Text type="secondary">{job.position}</Text>
                </>
              }
              size="small"
              style={{ marginBottom: "16px", padding: "16px" }}
            >
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
