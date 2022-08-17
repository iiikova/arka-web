import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Header/Header";
import styles from "./Login.module.scss";
import { Input, TextField, Button, Card } from "@mui/material";
import { useForm } from "react-hook-form";

function Login() {
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
            label="FIRST NAME"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
          <TextField
            label="LAST NAME"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}

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

          <TextField
            label="CONFIRM PASSWORD"
            {...register("rePassword", { required: true })}
          />
          {errors.rePassword && <span>This field is required</span>}

          <div>
            <input
              type="checkbox"
              name=""
              id=""
              placeholder="I agree to the Terms of User"
            />
            <p> I agree to the Terms of User</p>
          </div>

          <button type="submit">register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
