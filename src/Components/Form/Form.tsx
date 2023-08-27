import classes from "./Form.module.css";
import orkut from "../../assets/ps_orkut.svg";
import { Props } from "../../pages/Login/LoginPage";
import {useNavigate } from "react-router-dom";

import React, { useState } from "react";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../../service/firebase";

// import { useCreateUserWithEmailAndPassword } 

// import api from "../../service/api";

// import Cookies from "js-cookie";

const Form = (props: Props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    ckPassword: "",
  });

  const [errors, setErrors] = useState({
    invalidEmail: false,
    invalidFormatEmail: false,
    invalidPassword: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    if (type === "text") {
      setErrors((prevFormErros) => ({
        ...prevFormErros,
        invalidEmail: false,
        invalidFormatEmail: false,
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
      });
      return;
    }

    if (validateFormatEmail()) {
      setErrors({
        invalidEmail: false,
        invalidPassword: false,
        invalidFormatEmail: true,
      });
      return;
    }

    navigate("/profile");
    
  };

  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        setUser(result.user);
        // const token = await result.user.getIdToken();
        // Cookies.set('token', token);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  }



  return (
    <>
      <div>
        {user.photoURL && <img src={user.photoURL} alt="Foto Usuario" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>
      <div className={classes["container-form"]}>
        <div className={classes["brand-form"]}>
          <img src={orkut} className={classes["img-orkut"]} alt="Brand Orkut" />
          <h3 className={classes.title}>Acesse o UOLkut</h3>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes["input-container"]}>
            <div className={classes["label-float"]}>
              <input
                onChange={handleChange}
                name="email"
                value={form.email}
                className={
                  errors.invalidEmail ? classes["invalid-input"] : classes.input
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
                onChange={handleChange}
                name="password"
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
            {errors.invalidPassword && (
              <p className={classes.errors}>
                Campo de senha não pode estar vazio
              </p>
            )}
          </div>
          <div className={classes["password-flex"]}>
            <label htmlFor="ckbox" className={classes.checkbox}>
              Lembrar minha senha
              <input
                onChange={handleChange}
                type="checkbox"
                name="ckPassword"
                id="ckbox"
                value={form.ckPassword}
              />
              <span className={classes.checkmarkPassword}></span>
            </label>
          </div>
          <div className={classes["flex-button"]}>
            <button className={classes["btn-signin"]}>
              <span className={classes["signin-description"]}>Entrar</span>
            </button>
            <button className={classes["btn-signup"]} onClick={handleGoogleSignIn}>
              <span className={classes["signin-description"]}>Entrar com Google</span>
            </button>
            <button
              className={classes["btn-signup"]}
              onClick={() => props.onFormSwitch("register")}
            >
              <span className={classes["signup-description"]}>
                Criar uma conta
              </span>
            </button>
            <a className={classes["anchor-password"]} href="/">
              Esqueci minha senha
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
