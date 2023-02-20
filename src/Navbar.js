import React, { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import * as yup from "yup";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const schema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  subject: yup.string().required(),
  message: yup
    .string()
    .max(300, { message: "Please do not reach 300 symbols" })
    .required(),
});

export default function Navigationbar() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultAlert, setResultAlert] = useState();

  const handleClose = () => {
    setShow(false);
    setResultAlert();
  };
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50">
        <h1 className="font-burtons text-lg">VM</h1>
        <ul className="flex items-center">
          <Button
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 bg-blue-300 rounded-md ml-8 text-white"
            onClick={handleShow}
          >
            Contact Me
          </Button>
        </ul>
      </nav>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-gray-500">To: vmarinov2001@gmail.com</p>
          <Formik
            validationSchema={schema}
            validateOnChange={false}
            onSubmit={(values) => {
              setLoading(true);
              emailjs.init(process.env.EMAILJS_USER_ID);
              emailjs
                .send(
                  process.env.REACT_APP_EMAILJS_SERVICE_KEY,
                  process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
                  values,
                  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                )
                .then(
                  (result) => {
                    setResultAlert(
                      <p className="text-green-500">Email sent!</p>
                    );
                  },
                  (error) => {
                    setResultAlert(<p className="text-red-600">Failed!</p>);
                  }
                );
              setLoading(false);
            }}
            initialValues={{
              email: "",
              subject: "",
              message: "",
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Email for corespondation</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    isValid={touched.subject && !errors.subject}
                    isInvalid={!!errors.subject}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    className="max-h-60"
                    as="textarea"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    isValid={touched.message && !errors.message}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <div className="text-5xl py-4 flex justify-center gap-16 text-gray-600">
                  {loading ? (
                    <Spinner animation="grow" variant="info" />
                  ) : (
                    <Button type="submit">Send</Button>
                  )}
                </div>
                {resultAlert}
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
