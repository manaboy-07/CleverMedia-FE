import React from "react";
import Navbar from "../components/landingpage/Navbar";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { contactSchema } from "../validators/formSchemas";
import { useFormik } from "formik";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="bg-base-100">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="py-8 px-7 lg:w-1/2 w-full">
          <h1 className="text-primary-content lg:text-5xl md:text-4xl text-3xl">
            Love to hear from you,
            <br />
            Get in touch 👋🏽
          </h1>
          <form onSubmit={formik.handleSubmit} className="my-6 py-9">
            <div className="flex flex-wrap justify-between">
              <div className="form-control w-full md:max-w-xs">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                  {/* <span className="label-text-alt">Alt label</span> */}
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input bg-base-300   w-full md:max-w-xs"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <label className="label">
                  <span className="label-text-alt">
                    {" "}
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-error">{formik.errors.name}</div>
                    ) : null}
                  </span>
                </label>
              </div>
              <div className="form-control w-full md:max-w-xs">
                <label className="label">
                  <span className="label-text">What is your email?</span>
                  {/* <span className="label-text-alt">Alt label</span> */}
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input bg-base-300   w-full md:max-w-xs"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <label className="label">
                  <span className="label-text-alt">
                    {" "}
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-error">{formik.errors.email}</div>
                    ) : null}
                  </span>
                </label>
              </div>
            </div>
            <div className="flex my-10">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Message</span>
                  {/* <span className="label-text-alt">Alt label</span> */}
                </label>
                <textarea
                  className="textarea bg-base-300  w-full h-[200px] "
                  placeholder="Type anything..."
                  name="message"
                  id="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                ></textarea>
                <label className="label">
                  <span className="label-text-alt">
                    {" "}
                    {formik.touched.message && formik.errors.message ? (
                      <div className="text-error">{formik.errors.message}</div>
                    ) : null}
                  </span>
                </label>
              </div>
            </div>
            <div className="flex">
              <button type="submit" className="btn btn-accent md:w-1/2 w-full">
                Just Send <ExternalLinkIcon className="w-4 mx-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
