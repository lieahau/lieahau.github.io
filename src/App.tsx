import { Layout } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import "./App.css";
import Home from "./pages/Home";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Preloader />
      <Layout>
        <Navbar />
        <Content style={{ minHeight: "200vh", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright ©{new Date().getFullYear()} Budiman Putra Jaya
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
