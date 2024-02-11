"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}
const validationSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .matches(
      /^[a-zA-Z ]+$/,
      "Full name must only contain alphabets and spaces"
    ),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^\d{10}$/,
      "Phone number must be 10 digits and contain only numbers"
    ),
});
const ContactusForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setIsSubmitting(true);
    // Commenting out the API call for now
    // try {
    //   const response = await fetch("/api/submitForm", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(values),
    //   });
    //   if (response.ok) {
    //     console.log("Form submission successful!");
    //     // Handle success case (e.g., show a confirmation message)
    //     setShowPopup(true);
    //   } else {
    //     console.error("Form submission failed:", response.statusText);
    //     // Handle error case (e.g., show an error message)
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   // Handle errors gracefully
    // } finally {
    //   setIsSubmitting(false);
    // }
    // Simulating a successful form submission
    setTimeout(() => {
      setShowPopup(true);
      setIsSubmitting(false);
      resetForm(); // Reset the form values
    }, 2000);
  };
  const closeModal = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <div className="contactus-form">
        <Formik
          initialValues={{ fullName: "", email: "", phone: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="row">
                <div className="col-12 form-group">
                  <label className="form-label" htmlFor="fullName">
                    Full Name<span>*</span>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                  />
                  {errors.fullName && touched.fullName && (
                    <ErrorMessage
                      name="fullName"
                      render={(errorMessage) => (
                        <div className="error">{errorMessage}</div>
                      )}
                    />
                  )}
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label" htmlFor="email">
                    Email ID<span>*</span>
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                  {errors.email && touched.email && (
                    <ErrorMessage
                      name="email"
                      render={(errorMessage) => (
                        <div className="error">{errorMessage}</div>
                      )}
                    />
                  )}
                </div>
                <div className="col-md-6 form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone No<span>*</span>
                  </label>
                  <Field
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                  />
                  {errors.phone && touched.phone && (
                    <ErrorMessage
                      name="phone"
                      render={(errorMessage) => (
                        <div className="error">{errorMessage}</div>
                      )}
                    />
                  )}
                </div>
                <div className="col-12 form-group">
                  <div>
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <Field
                      className="form-control"
                      name="message"
                      as="textarea"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="main-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner">
                          <Image src="/images/pleasewait.gif" height={50} width={50} alt="pleasewait" />
                        </div>
                        {" Please Wait..."}
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {showPopup && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <picture>
              <Image src="/images/thankyou-icon.svg" width="77" height="77" alt="Thank You" />
            </picture>
            <h2>
              Thank You for<br></br>
              <span className="special-heading">Contacting Us!</span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
export default ContactusForm;
