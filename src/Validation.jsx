import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const Validation = () => {
  const userValidationSchema = yup.object().shape({
    username: yup.string()
    .min(3)
    .max(50)
    .matches("[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$")
    .required("Username is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .matches("[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/")
      .required("Email is required"),
    password: yup.string()
    .min(8)
    .max(50)
    .matches("?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]")
    .required("Password is required"),
  });

  let formdata = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <div>
      <h1 className="mt-5 text-center text-uppercase p-4">Student Form</h1>
      <form className="w-25 m-auto mt-5" onSubmit={formdata.handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputusername" className="form-label ">
            Enter UserName
          </label>
          <input
            type="text"
            className={`form-control ${formdata.touched.username && formdata.errors.username ? "error" : null}`}
            name="username"
            onChange={formdata.handleChange}
            onBlur={formdata.handleBlur}
            value={formdata.values.username}
          />
          {formdata.touched.username && formdata.errors.username ? (
          <p style={{ color: "red" }}>{formdata.errors.username}</p>
        ) : null}
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Enter EmailId
          </label>
          <input
            type="email"
            className={`form-control ${formdata.touched.email && formdata.errors.email ? "error" : null}`}
            name="email"
            onChange={formdata.handleChange}
            onBlur={formdata.handleBlur}
            value={formdata.values.email}
          />
          {formdata.touched.email && formdata.errors.email ? (
          <p style={{ color: "red" }}>{formdata.errors.email}</p>
        ) : null}
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Enter Password
          </label>
          <input
            type="text"
            className={`form-control ${formdata.touched.password && formdata.errors.password ? "error" : null}`}
            name="password"
            onChange={formdata.handleChange}
            onBlur={formdata.handleBlur}
            value={formdata.values.password}
          />
          {formdata.touched.password && formdata.errors.password ? (
          <p style={{ color: "red" }}>{formdata.errors.password}</p>
        ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </div>
  );
};

export default Validation;
