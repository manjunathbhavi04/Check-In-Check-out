import { useState } from "react";
import "./App.css";
import { ArrayList } from "./store/Data";
import Display from "./components/Display";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./store/Data";

function App() {
  return (
    <>
      <Container>
        <Display />
      </Container>
    </>
  );
}

export default App;
