import { Card, Col, Progress, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

interface SkillProps {
  style?: React.CSSProperties;
}

const skills = [
  {
    category: "Game Development",
    items: [
      { name: "Unity", level: 85 },
      { name: "Cocos Creator 3", level: 85 },
      { name: "RPG Maker", level: 75 },
      { name: "Phaser 3", level: 70 },
      { name: "Scratch", level: 50 },
      { name: "Stencyl", level: 55 },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "ReactJS", level: 80 },
      { name: "CSS", level: 80 },
      { name: "AngularJS", level: 60 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Python3 (Django Rest Framework)", level: 75 },
      { name: "PHP", level: 70 },
      { name: "MySQL", level: 70 },
    ],
  },

  {
    category: "Competitive Programming",
    items: [
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
    ],
  },
  {
    category: "Multimedia",
    items: [
      { name: "Adobe Photoshop", level: 55 },
      { name: "Adobe Premiere Pro", level: 50 },
      { name: "Adobe After Effects", level: 40 },
      { name: "Photography", level: 40 },
    ],
  },
  {
    category: "Software Development",
    items: [
      { name: "Java", level: 55 },
      { name: "Visual Basic", level: 35 },
    ],
  },
  {
    category: "Office & Productivity",
    items: [
      { name: "Microsoft Excel", level: 80 },
      { name: "Microsoft Word", level: 80 },
      { name: "Microsoft PowerPoint", level: 70 },
    ],
  },
];

const Skill: React.FC<SkillProps> = ({ style }) => {
  const [progressLevels, setProgressLevels] = useState(
    skills.map((category) => category.items.map(() => 0))
  );
  const skillRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (skillRef.current) {
        const rect = skillRef.current.getBoundingClientRect();
        const isSectionAppeared = rect.top < window.innerHeight * 0.75;
        if (isSectionAppeared) {
          const timeouts: number[] = [];
          skills.forEach((category, categoryIndex) => {
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
        {skills.map((skillCategory, categoryIndex) => (
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
