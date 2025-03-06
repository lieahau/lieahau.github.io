import { Card, Col, Row, Typography, List, Image } from "antd";
import { PortfolioItem } from "../interface.ts";
import "./../styles/portfolio.css";
import CardTitle from "./CardTitle.tsx";

export interface PortfolioListProps {
  data: PortfolioItem[];
}

const { Link, Text } = Typography;

const PortfolioList: React.FC<PortfolioListProps> = ({ data }) => {
  return (
    <Row gutter={[16, 16]} justify="center">
      {data.map((item, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            className="portfolio-card"
            cover={
              <div className="portfolio-image-container">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                  width="100%"
                  height="100%"
                  style={{ maxHeight: "100%", objectFit: "contain" }}
                />
              </div>
            }
          >
            <Card.Meta
              description={
                <>
                  <div className="portfolio-title">
                    <CardTitle title={item.title} link={item.link} />
                  </div>
                  <List
                    size="small"
                    className="portfolio-details"
                    dataSource={item.details}
                    renderItem={(detail) => (
                      <List.Item>
                        <List.Item.Meta
                          title={detail.label}
                          description={
                            detail.link && detail.link !== "" ? (
                              <Link href={detail.link} target="_blank">
                                {detail.value}
                              </Link>
                            ) : (
                              <Text>{detail.value}</Text>
                            )
                          }
                        />
                      </List.Item>
                    )}
                  />
                </>
              }
            />
            <div className="portfolio-card-footer">{item.year}</div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PortfolioList;
