import classes from "./FormSignUp.module.css";
import orkut from "../../assets/ps_orkut.svg";
import { useState } from "react";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../service/firebase";
import { Props } from "../../pages/Login/LoginPage";

export const FormSignUp = (props: Props) => {

  const registerUser = async () => {
    const dataToSend = {
      email: form.email,
      name: form.name,
      password: form.password,
      birth_date: form.dt_birth,
      profession: form.profession,
      country: form.country,
      city: form.city,
      relationship_status: selectRelationship,
      songs: [],
      movies: []
    };

    try {
      const response = await fetch("http://localhost:3000/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log("CADASTRADO COM SUCESSO!");
      } else {
        console.log("falha ao cadastrar");
      }
    } catch (error) {
      console.log("Somethinf went wrong!");
      throw Error;
    }
  };

  const [createUserWithEmailAndPassword, userInfo, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    dt_birth: "",
    profession: "",
    country: "",
    city: "",
    relationship: "",
    ckPassword: "",
  });

  const [errors, setErrors] = useState({
    invalidEmail: false,
    invalidFormatEmail: false,
    invalidPassword: false,
    invalidName: false,
    invalidBirth: false,
    invalidprofession: false,
    invalidCity: false,
    invalidCountry: false,
    invalidRelationship: false,
  });

  const [selectRelationship, setSelectRelationship] = useState("");

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = event.target;
    let fieldValue: string;


    if (name === "relationship") {
      fieldValue = value;
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidRelationship: false,
      }));
      setSelectRelationship(value);
    }

    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    if (name === "email") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidEmail: false,
        invalidFormatEmail: false,
      }));
    }

    if (name === "name") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidName: false,
      }));
    }

    if (name === "name") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidName: false,
      }));
    }

    if (name === "dt_birth") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidBirth: false,
      }));
    }

    if (name === "profession") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidProfession: false,
      }));
    }

    if (name === "country") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidCountry: false,
      }));
    }

    if (name === "city") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidCity: false,
      }));
    }

    if (type === "password") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidPassword: false,
      }));
    }

    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const validateFormatEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(form.email)) {
      return true;
    } else {
      return false;
    }
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.email.trim() === "" && form.password.trim() === "") {
      setErrors({
        invalidEmail: true,
        invalidPassword: true,
        invalidFormatEmail: false,
        invalidName: false,
        invalidBirth: false,
        invalidprofession: false,
        invalidCity: false,
        invalidCountry: false,
        invalidRelationship: false,
      });
      return;
    }

    if (validateFormatEmail()) {
      setErrors({
        invalidEmail: false,
        invalidPassword: false,
        invalidFormatEmail: true,
        invalidName: false,
        invalidBirth: false,
        invalidprofession: false,
        invalidCity: false,
        invalidCountry: false,
        invalidRelationship: false,
      });
      return;
    }

    createUserWithEmailAndPassword(form.email, form.password);
    registerUser();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }
  if (userInfo) {
    props.onFormSwitch('login');
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes["container-form"]}>
          <div className={classes["brand-form"]}>
            <img
              src={orkut}
              className={classes["img-orkut"]}
              alt="Brand Orkut"
            />
            <h3 className={classes.title}>Cadastre-se no UOLkut</h3>
          </div>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes["input-container"]}>
              <div className={classes["label-float"]}>
                <input
                  onChange={handleChange}
                  name="email"
                  value={form.email}
                  className={
                    errors.invalidFormatEmail
                      ? classes["invalid-input"]
                      : classes.input
                  }
                  type="text"
                  placeholder="E-mail"
                  required
                />
              </div>
              {errors.invalidFormatEmail && (
                <p className={classes.errors}>Campo de email não é válido</p>
              )}
            </div>

            <div className={classes["input-container"]}>
              <div className={classes["label-float"]}>
                <input
                  id="name"
                  onChange={handleChange}
                  name="name"
                  value={form.name}
                  className={classes.input}
                  type="text"
                  placeholder="Nome"
                  required
                />
              </div>
            </div>

            <div className={classes["input-container"]}>
              <div className={classes["label-float"]}>
                <input
                  onChange={handleChange}
                  name="password"
                  minLength={6}
                  value={form.password}
                  className={
                    errors.invalidPassword
                      ? classes["invalid-input"]
                      : classes.input
                  }
                  type="password"
                  placeholder="Senha"
                  required
                />
              </div>
            </div>

            <div className={classes["input-container"]}>
              <div className={classes["label-float"]}>
                <input
                  type="date"
                  name="dt_birth"
                  placeholder="Nascimento"
                  className={classes["input-grid"]}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="profession"
                  placeholder="Profissão"
                  className={classes["input-grid"]}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={classes["input-container"]}>
              <div className={classes["label-float"]}>
                <input
                  type="text"
                  name="country"
                  placeholder="País"
                  className={classes["input-grid"]}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  className={classes["input-grid"]}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={classes["input-container"]}>
              <div className={classes["label-float"]}>
                <select
                  name="relationship"
                  placeholder="Relacionamento"
                  className={classes["input-grid1"]}
                  onChange={handleChangeSelect}
                  required
                >
                  <option
                    defaultValue=""
                    disabled
                    selected
                    className={classes["option-label"]}
                  >
                    Relacionamento
                  </option>
                  <option defaultValue="Solteiro(a)">Solteiro(a)</option>
                  <option defaultValue="Casado(a)">Casado(a)</option>
                  <option defaultValue="Viuvo(a)">Viuvo(a)</option>
                  <option defaultValue="Em um relacionamento sério">Em um relacionamento sério</option>
                  <option defaultValue="Noivo(a)">Noivo(a)</option>
                </select>
              </div>
            </div>

            <div className={classes["flex-button"]}>
              <button className={classes["btn-signin"]}>
                <span className={classes["signin-description"]}>
                  Criar conta
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
