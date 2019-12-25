import React, { useLayoutEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import AppStyles from "./AppStyles";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

//components
import Layout from "./components/Layout";
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
          <Col md={7}>
            <Layout>
              <AppRoutes />
              <Footer />
            </Layout>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
