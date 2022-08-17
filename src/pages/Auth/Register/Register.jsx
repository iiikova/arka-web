import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Register.module.scss";

import {
  Input,
  TextField,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";

function Register() {
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

          <FormControlLabel
            className={styles.checkbox}
            control={<Checkbox />}
            label="I agree to the Terms of User"
          />

          <button type="submit">register</button>

          <h3>
            Already have an account?
            <span onClick={() => navigate("/login")}>Login</span>
          </h3>
        </form>
      </div>
    </div>
  );
}

export default Register;
