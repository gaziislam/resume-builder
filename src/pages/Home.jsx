import React from "react";
import { Container } from "react-bootstrap";
import ResumePicker from "../components/ResumePicker";
import FormDetails from "../components/FormDetails";

const Home = () => {
  return (
    <Container>
      <h1 className="text-center text-white mt-5">Resume Builder</h1>
      <ResumePicker />
      <FormDetails />
    </Container>
  );
};

export default Home;
