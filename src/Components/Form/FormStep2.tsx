import classes from "./FormStep2.module.css";
import orkut from "../../assets/ps_orkut.png";
import { PropsStep } from "../../pages/SignUp/SignUp";

import React, { useState } from "react";

const FormStep2 = (props: PropsStep) => {
  const [form, setForm] = useState({
    autoDescription: "",
    interests: "",
    statusRelationship: "",
    children: false,
    smoke: "",
    drink: "",
    profilePicture: "",
    favoriteSongs: "",
    favoriteMovies: "",
  });

  const [radio, setRadio] = useState({
    children: false,
    drink: false,
    smoke: false,
  });

  const [select, setSelect] = useState("");

  const [errors, setErrors] = useState({
    invalidDescription: false,
    invalidInterests: false,
    invalidRelationship: false,
    invalidChildren: false,
    invalidSmoke: false,
    invalidDrink: false,
    invalidProfilePicture: false,
    invalidSongs: false,
    invalidMovies: false,
  });

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = event.target;
    let fieldValue: string;


    if (name === "relationship") {
      fieldValue = value;
      console.log(value);
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidRelationship: false,
      }));
      setSelect(value);
    }

    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, id, checked } = event.target;
    let fieldValue: string | boolean;

    console.log(event);

    if (id === "autodescription") {
      fieldValue = value;
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidDescription: false,
      }));
    }

    if (name === "radioChildren") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidChildren: false,
      }));
      setRadio((prev) => ({
        ...prev,
        children: checked,
      }));
    }

    if (name === "radioHabitsSmoke") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidSmoke: false,
      }));
      setRadio((prev) => ({
        ...prev,
        smoke: checked,
      }));
      console.log(radio);
    }
    if (name === "radioHabitsDrink") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidDrink: false,
      }));
      setRadio((prev) => ({
        ...prev,
        drink: checked,
      }));
      console.log(radio);
    }
    if (id === "interests") {
      fieldValue = value;
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidInterests: false,
      }));
    }

    if (id === "profilePicture") {
      fieldValue = value;
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidProfilePicture: false,
      }));
    }

    if (id === "favoriteSongs") {
      fieldValue = value;
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidSongs: false,
      }));
    }
    if (id === "favoriteMovies") {
      fieldValue = value;
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidMovies: false,
      }));
    }

    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.autoDescription.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidDescription: true,
      }));
    } else if (form.interests.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidInterests: true,
      }));
    } else if (select === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidRelationship: true,
      }));
    } else if (!radio.children) {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidChildren: true,
      }));
    } else if (!radio.smoke) {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidSmoke: true,
      }));
    } else if (!radio.drink) {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidDrink: true,
      }));
    } else if (form.profilePicture.trim() === "") {
      console.log("coisi");
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidProfilePicture: true,
      }));
    } else if (form.favoriteSongs.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidSongs: true,
      }));
    } else if (form.favoriteMovies.trim() === "") {
      setErrors((prevFormErrors) => ({
        ...prevFormErrors,
        invalidMovies: true,
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
          <h3 className={classes.title}>Cadastro - Step 2</h3>
        </div>

        <form className={classes.form} onSubmit={submitHandler}>
          <div>
            <input
              name="autoDescription"
              id="autodescription"
              className={
                errors.invalidDescription
                  ? classes["invalid-input"]
                  : classes.input
              }
              type="text"
              placeholder="Autodescrição (Quem sou eu)"
              value={form.autoDescription}
              onChange={handleChange}
            />
            {errors.invalidDescription && (
              <span>
                <p className={classes.errors}>Campo não pode ser vazio</p>
              </span>
            )}
          </div>

          <div>
            <input
              name="interests"
              id="interests"
              className={
                errors.invalidInterests
                  ? classes["invalid-input"]
                  : classes.input
              }
              type="text"
              placeholder="Interesses"
              value={form.interests}
              onChange={handleChange}
            />
            {errors.invalidInterests && (
              <span>
                <p className={classes.errors}>Campo não pode ser vazio</p>
              </span>
            )}
          </div>

          <div>
            <select
              className={
                errors.invalidRelationship
                  ? classes["invalid-input"]
                  : classes.selectStatus
              }
              name="relationship"
              id="relationship"
              onChange={handleChangeSelect}
            >
              <option defaultValue="" disabled>
                Status de Relacionamento
              </option>
              <option defaultValue="Solteiro">Solteiro(a)</option>
              <option defaultValue="relacionamentoSerio">
                Em um relacionamento sério
              </option>
              <option defaultValue="Noivo">Noivo(a)</option>
              <option defaultValue="Casado">Casado(a)</option>
            </select>
            {errors.invalidRelationship && (
              <span>
                <p className={classes.errors}>Campo não pode ser vazio</p>
              </span>
            )}
          </div>

          <div className={classes.children}>
            <label className={classes.label}>Filhos:</label>
            <div className={classes.section}>
              <input
                name="radioChildren"
                className={classes.radio}
                type="radio"
                id="haveChildren"
                value="Sim"
                onChange={handleChange}
              />
              <label htmlFor="haveChildren">Sim</label>

              <input
                name="radioChildren"
                className={classes.radio}
                type="radio"
                id="donthaveChildren"
                value="Não"
                onChange={handleChange}
              />
              <label htmlFor="donthaveChildren">Não</label>
            </div>
            {errors.invalidChildren && (
              <span>
                <p className={classes.errors}>Campo não pode ser vazio</p>
              </span>
            )}
          </div>

          <div className={classes.children}>
            <label className={classes.label}>Fumo:</label>
            <div className={classes.section}>
              <input
                name="radioHabitsSmoke"
                className={classes.radio}
                type="radio"
                id="smoke"
                onChange={handleChange}
              />
              <label htmlFor="smoke">Sim</label>

              <input
                name="radioHabitsSmoke"
                className={classes.radio}
                type="radio"
                id="dontSomoke"
                onChange={handleChange}
              />
              <label htmlFor="dontSomoke">Não</label>
            </div>
            {errors.invalidSmoke && (
              <span>
                <p className={classes.errors}>Campo não pode ser vazio</p>
              </span>
            )}
          </div>

          <div className={classes.children}>
            <label className={classes.label}>Bebo:</label>
            <div className={classes.section}>
              <input
                name="radioHabitsDrink"
                className={classes.radio}
                type="radio"
                id="drink"
                onChange={handleChange}
              />
              <label htmlFor="drink">Sim</label>

              <input
                name="radioHabitsDrink"
                className={classes.radio}
                type="radio"
                id="dontDrink"
                onChange={handleChange}
              />
              <label htmlFor="dontDrink">Não</label>
            </div>
            {errors.invalidDrink && (
              <span>
                <p className={classes.errors}>Campo não pode ser vazio</p>
              </span>
            )}
          </div>

          <div className={classes.sectionPicture}>
            <label className={classes.label}>Foto de Perfil:</label>
            <input
              name="profilePicture"
              id="profilePicture"
              className={
                errors.invalidProfilePicture
                  ? classes["invalid-input"]
                  : classes.inputFile
              }
              type="file"
              placeholder="Foto de perfil"
              value={form.profilePicture}
              onChange={handleChange}
            />
            <label htmlFor="profilePicture" className={classes.picture}>
              Escolha uma foto
            </label>
          </div>
            {errors.invalidProfilePicture && (
              <span>
                <p className={classes.errors}>Campo de Foto não pode ser vazio</p>
              </span>
            )}

          <div>
            <input
              name="favoriteSongs"
              id="favoriteSongs"
              className={
                errors.invalidSongs ? classes["invalid-input"] : classes.input
              }
              type="text"
              placeholder="Músicas favoritas"
              value={form.favoriteSongs}
              onChange={handleChange}
            />
            <label className={classes.label}>
              <p className={classes["description-input"]}></p>
            </label>
            {errors.invalidSongs && (
              <span>
                <p className={classes.errors}>Campo não pode ser vazio</p>
              </span>
            )}
          </div>

          <div>
            <input
              name="favoriteMovies"
              id="favoriteMovies"
              className={
                errors.invalidMovies ? classes["invalid-input"] : classes.input
              }
              type="text"
              placeholder="Filmes favoritos"
              value={form.favoriteMovies}
              onChange={handleChange}
            />
            <label className={classes.label}>
              <p className={classes["description-input"]}></p>
            </label>
            {errors.invalidMovies && (
              <span>
                <p className={classes.errors}>Campo não pode ser vazio</p>
              </span>
            )}
          </div>

          <div className={classes["flex-button"]}>
            <button className={classes["btn-signin"]} type="submit">
              Enviar
            </button>

            <button
              className={classes["btn-login"]}
              onClick={() => props.onFormStep("step1")}
            >
              Voltar
            </button>

            <a
              href="/"
              className={classes["anchor-password"]}
              onClick={() => props.onFormSwitch("login")}
            >
              Entrar
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormStep2;
