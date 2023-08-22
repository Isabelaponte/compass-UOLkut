import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import Form from "../../Components/Form/Form";
import Card from "../../Components/Card/Card";

export type Props = {
  onFormSwitch: (formName: string) => void;
};

const Login = (props: Props) => {


  return (
    <>
      <Header />
      <Container>
        <Card />
        <Form onFormSwitch={props.onFormSwitch} />
      </Container>
      <Footer />
    </>
  );
};

export default Login;
