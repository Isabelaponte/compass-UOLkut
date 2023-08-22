import { useState } from "react";

import classes from "./FormStep1.module.css";

import orkut from "../../assets/ps_orkut.png";
import { PropsStep } from "../../pages/SignUp/SignUp";

const FormStep1 = (props: PropsStep) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({
    invalidName: false,
    invalidEmail: false,
    invalidCity: false,
    invalidPassword: false,
    invalidConfirmPassword: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, id, type } = event.target;
    const fieldValue = value;

    if (id === "name") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidName: false,
      }));
    }

    if (type === "email") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidEmail: false,
      }));
    }

    if (id === "city") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidCity: false,
      }));
    }

    if (id === "password") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidPassword: false,
      }));
    }

    if (id === "confirmPass") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidConfirmPassword: false,
      }));
    }

    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.name.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidName: true,
      }));
    } else if (form.email.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidEmail: true,
      }));
    } else if (form.city.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidCity: true,
      }));
    } else if (form.password.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidPassword: true,
      }));
    } else if (form.confirmPass.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidConfirmPassword: true,
      }));
    } else {
      props.onFormStep("step2");
    }
  };

  return (
    <>
      <div className={classes["container-form"]}>
        <div className={classes["brand-form"]}>
          <img src={orkut} className={classes["img-orkut"]} alt="Brand Orkut" />
          <h3 className={classes.title}>Cadastro - Step 1</h3>
        </div>

        <form className={classes.form} onSubmit={submitHandler}>
          <div>
            <input
              name="name"
              id="name"
              onChange={handleChange}
              className={
                errors.invalidName ? classes["invalid-input"] : classes.input
              }
              type="text"
              placeholder="Nome"
              value={form.name}
            />
            {errors.invalidName && (
              <p className={classes.errors}>Campo não pode ser vazio</p>
            )}
          </div>

          <div>
            <input
              name="email"
              id="email"
              onChange={handleChange}
              className={
                errors.invalidEmail ? classes["invalid-input"] : classes.input
              }
              type="email"
              placeholder="E-mail"
              value={form.email}
            />
            {errors.invalidEmail && (
              <p className={classes.errors}>Campo não pode ser vazio</p>
            )}
          </div>

          <div>
            <input
              name="city"
              id="city"
              onChange={handleChange}
              className={
                errors.invalidCity ? classes["invalid-input"] : classes.input
              }
              type="text"
              placeholder="Cidade/Estado"
              value={form.city}
            />
            {errors.invalidCity && (
              <p className={classes.errors}>Campo não pode ser vazio</p>
            )}
          </div>

          <div>
            <input
              name="password"
              id="password"
              onChange={handleChange}
              className={
                errors.invalidPassword
                  ? classes["invalid-input"]
                  : classes.input
              }
              type="password"
              placeholder="Senha"
              value={form.password}
            />
            {errors.invalidPassword && (
              <p className={classes.errors}>Campo não pode ser vazio</p>
            )}
          </div>

          <div>
            <input
              name="confirmPass"
              id="confirmPass"
              onChange={handleChange}
              className={
                errors.invalidConfirmPassword
                  ? classes["invalid-input"]
                  : classes.input
              }
              type="password"
              placeholder="Confirmar Senha"
              value={form.confirmPass}
            />
            {errors.invalidConfirmPassword && (
              <p className={classes.errors}>Campo não pode ser vazio</p>
            )}
          </div>

          <div className={classes["flex-button"]}>
            <button type="submit">Continuar</button>

            <button
              className={classes["btn-login"]}
              onClick={() => props.onFormSwitch("login")}
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormStep1;
