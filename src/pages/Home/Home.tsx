import { useState } from "react";
import Login from "../Login/LoginPage";
import SignUp from "../SignUp/SignUp";

function Home() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: string) => {
    setCurrentForm(formName);
  };

  return (
    <>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <SignUp onFormStep={toggleForm} onFormSwitch={toggleForm} />
      )}
    </>
  );
}

export default Home;
