import classes from "./Form.module.css";
import orkut from "../../assets/ps_orkut.svg";
import { Props } from "../../pages/Login/LoginPage";
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

import { auth } from "../../service/firebase";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import Cookies from "js-cookie";

const Form = (props: Props) => {
  const navigate = useNavigate();
  
  const [signInWithEmailAndPassword, userInfo, loading, error] =
    useSignInWithEmailAndPassword(auth);
    
  const [logedIn, setLogedIn ] = useState(false);
  
  if (logedIn) {
    navigate('/profile')
  }
  
  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      setLogedIn(true);
    }

  }, [])


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

    async function signInToken() {
      const userCredentials = await signInWithEmailAndPassword(
        form.email,
        form.password
      );

      if (userCredentials?.user) {
        const token = await userCredentials.user.getIdToken();
        Cookies.set("auth_token", token);        
      }
      if (!logedIn) {
        setLogedIn(true);
      }
      navigate('/profile');
    }

    signInToken();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (userInfo) {
    console.log(userInfo);
  }


  return (
    <>
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
