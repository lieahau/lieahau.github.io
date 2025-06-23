import { SkillItem } from "../interface.ts";

export const skillData: SkillItem[] = [
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
      { name: "PHP (CodeIgniter)", level: 70 },
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
];
