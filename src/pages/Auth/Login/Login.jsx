import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <aside></aside>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="YOUR EMAIL"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <TextField
            label="PASSWORD"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <button type="submit">login</button>

          <h3>
            Create your Account?
            <span onClick={() => navigate("/register")}>Sign Up</span>
          </h3>
        </form>
      </div>
    </div>
  );
}

export default Login;
