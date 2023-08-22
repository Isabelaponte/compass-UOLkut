import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
// import Card from "../../Components/Card/Card";
// import Form from "../../Components/Form/Form";
import FormStep1 from "../../Components/Form/FormStep1";
import { useState } from "react";
import FormStep2 from "../../Components/Form/FormStep2";

export type PropsStep = {
  onFormSwitch: (formName: string) => void;
  onFormStep: (formStep: string) => void;
};

const SignUp = (props: PropsStep) => {
  const [formStep, setFormStep] = useState("step1");

  const changeStep = (formStep: string) => {
    setFormStep(formStep);
  };

  return (
    <>
      <Header />
      <Container>
        {/* <Card /> */}
        {formStep === "step1" ? (
          <FormStep1
            onFormStep={changeStep}
            onFormSwitch={props.onFormSwitch}
          />
        ) : (
          <FormStep2
            onFormStep={changeStep}
            onFormSwitch={props.onFormSwitch}
          />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
