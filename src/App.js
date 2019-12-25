import React, { useLayoutEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import AppStyles from "./AppStyles";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./routes";

//components
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const classes = AppStyles();
  // add global body styles
  useLayoutEffect(() => {
    document.body.className = classes.body;
  }, [classes.body]);

  return (
    <BrowserRouter>
      <Container fluid>
        <Row justify="center">
          <Col md={6}>
            <Layout>
              <Header title="Task Manager" />
              <Link to={"/users"}>Home</Link>
              <div>
                <AppRoutes />
              </div>
              <Footer />
            </Layout>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
