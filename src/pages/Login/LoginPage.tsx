import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import Form from "../../Components/Form/Form";
import Card from "../../Components/Card/Card";
import { FormSignUp } from "../../Components/Form/FormSignUp";
import { useState } from "react";

export type Props = {
  onFormSwitch: (formName: string) => void;
};

const Login = () => {

  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: string) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <Header />
      <Container>
        <Card />
        {currentForm === "login" ? <Form onFormSwitch={toggleForm} /> : <FormSignUp onFormSwitch={toggleForm} />}
      </Container>
      <Footer />
    </>
  );
};

export default Login;
