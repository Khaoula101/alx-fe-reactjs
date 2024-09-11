// src/components/FormikForm.js
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted:", values);
        // Simulate API call
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="span" />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
