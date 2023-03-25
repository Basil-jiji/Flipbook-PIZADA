import React from "react";
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Flipbook from "./components/Flipbook";



const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
      <Container>
        <h1>Welcome to Department of MCA</h1>
        <Flipbook />
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
