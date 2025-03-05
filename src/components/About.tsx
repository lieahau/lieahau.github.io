import { Row, Col, Button, Typography, Space, Image } from "antd";
import {
  DownloadOutlined,
  FacebookFilled,
  GithubOutlined,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import "./../styles/about.css";
import myPhoto from "../assets/my-photo.jpg";

const { Title, Text } = Typography;

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
            Senior Game Engineer
          </Title>
          <Text italic strong style={{ color: "#555555" }}>
            "Dreams don't work unless you do."
          </Text>
          <p>
            Hi, I'm Budi (or Lie Ahau). A passionate learner and explorer in
            programming, such as game development, web development, and software
            development. I also enjoy discovering new experiences in design,
            photo, and video editing.
          </p>
          <Title level={5} className="social-title">
            Social Networks:
          </Title>
          <Space size="middle" className="social-icons">
            <a
              href="https://www.facebook.com/Lie.Xiang.Hau"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled className="social-icon facebook" />
            </a>
            <a
              href="https://github.com/lieahau"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined className="social-icon github" />
            </a>
            <a
              href="https://www.instagram.com/starliez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramFilled className="social-icon instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/budimanputra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled className="social-icon linkedin" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCt0ujeWmWwR0HO5HLHx4Kdg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeFilled className="social-icon youtube" />
            </a>
          </Space>
        </Col>
      </Row>
    </section>
  );
};

export default About;
