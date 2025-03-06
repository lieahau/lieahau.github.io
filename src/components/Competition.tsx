import { Timeline, Typography, Card } from "antd";
import { TrophyOutlined, FlagOutlined } from "@ant-design/icons";
import SectionTitle from "./SectionTitle";
import { competitionData } from "../data/competitionData";
import { CompetitionItem } from "../interface.ts";
import { COMPETITION_TYPE } from "../enum";

const { Text } = Typography;

interface CompetitionProps {
  style?: React.CSSProperties;
}

const Competition: React.FC<CompetitionProps> = ({ style }) => {
  const groupedCompetitions = competitionData.reduce((acc, curr) => {
    if (!acc[curr.year]) acc[curr.year] = [];
    acc[curr.year].push(curr);
    return acc;
  }, {} as Record<string, CompetitionItem[]>);

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
            backgroundColor:
              event.type === COMPETITION_TYPE.ACHIEVEMENT
                ? "#fffbe6"
                : "#f0f5ff",
          }}
        >
          <span style={{ marginRight: "8px" }}>
            {event.type === COMPETITION_TYPE.ACHIEVEMENT ? (
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

  return (
    <section id="competition" className="competition_area" style={{ ...style }}>
      <SectionTitle title="COMPETITIONS" />
      <Timeline
        style={{ margin: "20px" }}
        mode="alternate"
        items={timelineItems}
      />
    </section>
  );
};

export default Competition;
