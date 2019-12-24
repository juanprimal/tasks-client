import React, { useLayoutEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import AppStyles from "./AppStyles";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const classes = AppStyles();
  // add global body styles
  useLayoutEffect(() => {
    document.body.className = classes.body;
  }, [classes.body]);

  return (
    <Container fluid>
      <Row justify="center">
        <Col md={6}>
          <div className={classes.mainContainer}>
            <Header title="Task Manager" />
            <div>Content</div>
            <Footer />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
