import { useEffect, useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import { Link as ScrollLink } from "react-scroll";
import "./../styles/navbar.css";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(isSticky ? window.scrollY > 0 : window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSticky]);

  const menuItems = [
    "about",
    "skill",
    "competition",
    "education",
    "career",
    "portfolio",
    "contact",
  ].map((item) => ({
    key: item,
    label: (
      <ScrollLink to={item} smooth={true} duration={500} offset={-80}>
        {item.toUpperCase()}
      </ScrollLink>
    ),
  }));

  return (
    <Header className={`navbar ${isSticky ? "sticky-header" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
          spy={true}
          ignoreCancelEvents={true}
        >
          <div className="logo">Lie'z Website</div>
        </ScrollLink>

        {/* Desktop Menu */}
        {!isMobile && (
          <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            style={{ flex: 1, justifyContent: "flex-end" }}
          />
        )}

        {/* Mobile Burger Button */}
        {isMobile && (
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: "white" }} />}
            onClick={() => setIsDrawerOpen(true)}
          />
        )}

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="top"
          closable={true}
          onClose={() => setIsDrawerOpen(false)}
          open={isDrawerOpen}
          styles={{
            header: {
              backgroundColor: "#001529",
              color: "white",
              padding: "16px 0px",
            },
            body: { backgroundColor: "#001529", color: "white", padding: "0" },
          }}
        >
          <Menu theme="dark" mode="vertical" items={menuItems} />
        </Drawer>
      </div>
    </Header>
  );
};

export default Navbar;
