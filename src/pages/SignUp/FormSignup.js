import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import {
  FormContentRight,
  MainForm,
  FormH1,
  FormInputs,
  FormLabel,
  FormInput,
  FormInputLogin,
  FormInputsP,
  FormInputButton
} from "./Form.elements";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <FormContentRight>
      <MainForm onSubmit={handleSubmit} noValidate>
        <FormH1>
          Create a free account with Kanmaa Adventures by filling in the below form.
        </FormH1>
        <FormInputs>
          <FormLabel>Username</FormLabel>
          <FormInput
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <FormInputsP>{errors.username}</FormInputsP>}
        </FormInputs>
        <FormInputs>
          <FormLabel>Email</FormLabel>
          <FormInput
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <FormInputsP>{errors.email}</FormInputsP>}
        </FormInputs>
        <FormInputs>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <FormInputsP>{errors.password}</FormInputsP>}
        </FormInputs>
        <FormInputs>
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <FormInputsP>{errors.password2}</FormInputsP>}
        </FormInputs>
        <FormInputButton type="submit">
          Sign up
        </FormInputButton>
        <FormInputLogin>
          Already have an account? Login in the form below.
        </FormInputLogin>
      </MainForm>
    </FormContentRight>
  );
};

export default FormSignup;


