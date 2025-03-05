import { Card, Col, Progress, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { skillData } from "../data/skillData";

interface SkillProps {
  style?: React.CSSProperties;
}

const Skill: React.FC<SkillProps> = ({ style }) => {
  const [progressLevels, setProgressLevels] = useState(
    skillData.map((category) => category.items.map(() => 0))
  );
  const skillRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (skillRef.current) {
        const rect = skillRef.current.getBoundingClientRect();
        const isSectionAppeared = rect.top < window.innerHeight * 0.75;
        if (isSectionAppeared) {
          const timeouts: number[] = [];
          skillData.forEach((category, categoryIndex) => {
            category.items.forEach((item, itemIndex) => {
              timeouts.push(
                setTimeout(() => {
                  setProgressLevels((prev) => {
                    const newLevels = [...prev];
                    newLevels[categoryIndex] = [...newLevels[categoryIndex]];
                    newLevels[categoryIndex][itemIndex] = item.level;
                    return newLevels;
                  });
                }, 1000 + (categoryIndex * 200 + itemIndex * 100))
              );
            });
          });
          window.removeEventListener("scroll", handleScroll);
          return () => timeouts.forEach(clearTimeout);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(() => {
      handleScroll();
    }, 1000);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skill"
      className="skill_area"
      ref={skillRef}
      style={{ ...style }}
    >
      <SectionTitle title="SKILLS" />

      <Row
        gutter={[16, 16]}
        justify="center"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {skillData.map((skillCategory, categoryIndex) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            key={skillCategory.category}
            style={{ display: "flex" }}
          >
            <Card
              title={skillCategory.category}
              variant={"borderless"}
              style={{ flex: 1 }}
            >
              {skillCategory.items.map((skill, itemIndex) => (
                <div key={skill.name}>
                  <p>{skill.name}</p>
                  <Progress
                    percent={progressLevels[categoryIndex][itemIndex]}
                    showInfo
                  />
                </div>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Skill;
