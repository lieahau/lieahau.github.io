import { Row, Col, Button, Typography, Space, Image } from "antd";
import {
  DownloadOutlined,
  FacebookFilled,
  GithubOutlined,
  InstagramFilled,
  LinkedinFilled,
  MailOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import "./../styles/about.css";
import myPhoto from "../assets/my-photo.jpg";

const { Title, Text, Paragraph, Link } = Typography;

interface AboutProps {
  style?: React.CSSProperties;
}

const About: React.FC<AboutProps> = ({ style }) => {
  return (
    <section className="about_area" id="about" style={{ ...style }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={10} className="photo_area">
          <Image
            src={myPhoto}
            alt="It is Me!"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Button
            type="primary"
            className="download_btn"
            href="https://drive.google.com/file/d/14v2OhW-1WAsD7STMp_hR4F7BgbTQkIOi/view?usp=sharing"
            target="_blank"
          >
            <span>Download My CV</span>
            <DownloadOutlined />
          </Button>
        </Col>
        <Col xs={24} md={14} className="about_details">
          <Title level={2} style={{ textTransform: "uppercase" }}>
            Hi! I'm <span style={{ color: "#26b7e7" }}>Budiman Putra Jaya</span>
          </Title>
          <Title level={4} style={{ marginTop: "0px" }}>
            Senior Engineer
          </Title>
          <Text italic strong style={{ color: "#555555" }}>
            "Dreams don't work unless you do."
          </Text>
          <br />
          <br />
          <Paragraph>
            Hi, I'm Budi (or Lie Ahau). 
            A versatile Engineer with a strong foundation in both front-end and back-end development for websites and games. 
            Proficient in TypeScript, ReactJS, Python, and related frameworks, as well as Cocos and Unity game engines. 
            Experienced in leading front-end engineering teams and collaborating effectively with cross-functional stakeholders. 
            Passionate about continuous learning and applying technology to improve performance and user engagement.
          </Paragraph>

          <Title level={5}>Contact Me:</Title>
          <Space>
            <MailOutlined style={{ fontSize: "30px" }} />
            <Link href="mailto:budimanputrajaya2@gmail.com" target="_blank">
              budimanputrajaya2@gmail.com
            </Link>
          </Space>
          <Title level={5} className="social-title">
            Social Networks:
          </Title>
          <Space size="middle" className="social-icons">
            <Link href="https://www.facebook.com/Lie.Xiang.Hau" target="_blank">
              <FacebookFilled className="social-icon facebook" />
            </Link>
            <Link href="https://github.com/lieahau" target="_blank">
              <GithubOutlined className="social-icon github" />
            </Link>
            <Link href="https://www.instagram.com/starliez/" target="_blank">
              <InstagramFilled className="social-icon instagram" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/budimanputra/"
              target="_blank"
            >
              <LinkedinFilled className="social-icon linkedin" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCt0ujeWmWwR0HO5HLHx4Kdg"
              target="_blank"
            >
              <YoutubeFilled className="social-icon youtube" />
            </Link>
          </Space>
        </Col>
      </Row>
    </section>
  );
};

export default About;
