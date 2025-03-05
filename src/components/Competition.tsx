import { Timeline, Typography, Card } from "antd";
import { TrophyOutlined, FlagOutlined } from "@ant-design/icons";
import SectionTitle from "./SectionTitle";

const { Text } = Typography;

const competitions = [
  { year: "2021", type: "participation", name: "Global Game Jam" },
  { year: "2020", type: "participation", name: "Global Game Jam" },
  {
    year: "2019",
    type: "achievement",
    name: "12th Place in Final ACM-ICPC Ideafuse in STMIK-STIE Mikroskil",
  },
  {
    year: "2019",
    type: "participation",
    name: "Competitive Programming Arkavidia",
  },
  { year: "2019", type: "participation", name: "Global Game Jam" },
  {
    year: "2018",
    type: "participation",
    name: "HackGen Competition in Kompas Gramedia",
  },
  {
    year: "2018",
    type: "achievement",
    name: "Finalist in ACM-ICPC in Universitas Kristen Maranatha",
  },
  {
    year: "2018",
    type: "participation",
    name: "ACM-ICPC Compfest in Universitas Indonesia",
  },
  {
    year: "2018",
    type: "participation",
    name: "ACM-ICPC Vocomfest in Universitas Gadjah Mada",
  },
  {
    year: "2018",
    type: "achievement",
    name: "11th Place in ACM-ICPC Ideafuse in STIMIK-STIE Mikroskil",
  },
  {
    year: "2018",
    type: "achievement",
    name: "4th Place in Code Jam - HackGen Competition in Kompas Gramedia",
  },
  {
    year: "2018",
    type: "participation",
    name: "Competitive Programming Arkavidia",
  },
  { year: "2018", type: "participation", name: "Global Game Jam" },
  {
    year: "2017",
    type: "participation",
    name: "ACM-ICPC Compfest in Universitas Indonesia",
  },
  {
    year: "2017",
    type: "participation",
    name: "ACM-ICPC Indonesia National Contest in Universitas Bina Nusantara",
  },
  {
    year: "2017",
    type: "participation",
    name: "ACM-ICPC Ideafuse in STIMIK-STIE Mikroskil",
  },
  {
    year: "2017",
    type: "achievement",
    name: "Honorable Mention in ACM-ICPC Compfest IX in Universitas Indonesia",
  },
  {
    year: "2017",
    type: "participation",
    name: "ACM-ICPC Vocomfest in Universitas Gadjah Mada",
  },
  {
    year: "2017",
    type: "participation",
    name: "Senior Competitive Programming Contest in Universitas Multimedia Nusantara",
  },
  { year: "2017", type: "participation", name: "Global Game Jam" },
  {
    year: "2016",
    type: "participation",
    name: "Computer Science Innovative Challenge in Universitas Multimedia Nusantara",
  },
  {
    year: "2016",
    type: "participation",
    name: "UI/UX Design in Universitas Multimedia Nusantara",
  },
  {
    year: "2015",
    type: "participation",
    name: "SQL Programming Competition in Universitas Tarumanagara",
  },
  { year: "2015", type: "participation", name: "O2SN Chess" },
  { year: "2014", type: "participation", name: "OSN Mathematics" },
  { year: "2012", type: "participation", name: "OSN Mathematics" },
];

const groupedCompetitions = competitions.reduce((acc, curr) => {
  if (!acc[curr.year]) acc[curr.year] = [];
  acc[curr.year].push(curr);
  return acc;
}, {} as Record<string, typeof competitions>);

// Sort years in descending order
const sortedYears = Object.keys(groupedCompetitions).sort(
  (a, b) => Number(b) - Number(a)
);

const timelineItems = sortedYears.flatMap((year) => [
  {
    label: (
      <Text strong style={{ fontSize: "16px" }}>
        {year}
      </Text>
    ),
    children: groupedCompetitions[year].map((event, index) => (
      <Card
        key={index}
        size="small"
        variant="borderless"
        style={{
          marginTop: "8px",
          backgroundColor: event.type === "achievement" ? "#fffbe6" : "#f0f5ff",
        }}
      >
        <span style={{ marginRight: "8px" }}>
          {event.type === "achievement" ? (
            <TrophyOutlined style={{ color: "gold" }} />
          ) : (
            <FlagOutlined style={{ color: "blue" }} />
          )}
        </span>
        {event.name}
      </Card>
    )),
  },
]);

const Competition = () => {
  return (
    <section id="competition" className="competition_area">
      <SectionTitle title="COMPETITIONS" />
      <Timeline style={{ margin: "20px" }} mode="alternate" items={timelineItems} />
    </section>
  );
};

export default Competition;
