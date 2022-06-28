import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "typeface-pacifico";
import PageTransition from "../components/PageTransition";
import { contactSchema } from "../validators/formSchemas";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //   const handleSub = (e) => {
  //     e.preventDefault();
  //     console.log(formik.values);
  //   };
  return (
    <PageTransition>
      <div className="min-h-screen bg-base-100">
        <div className="md:grid md:grid-cols-2 flex flex-col-reverse h-screen">
          <div className="col-span-1  h-full">
            <Link
              to={"/"}
              className="btn btn-ghost normal-case text-3xl text-secondary md:flex w-full justify-start hidden"
              style={{ fontFamily: "pacifico" }}
            >
              Clever Media
            </Link>
            <div className="flex items-center justify-center  h-full">
              <form className="md:w-auto w-2/3" onSubmit={formik.handleSubmit}>
                <h1 className="text-4xl text-white font-bold">Welcome back</h1>
                <p className="md:text-base text-xs my-2 text-accent">
                  Welcome back! Please enter your details.
                </p>
                <div className="form-control w-full md:max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                    {/* <span className="label-text-alt">Alt label</span> */}
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="input bg-base-300 focus:outline-none  w-full md:max-w-xs"
                    id="email"
                    name="email"
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
                <div className="form-control w-full md:max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                    {/* <span className="label-text-alt">Alt label</span> */}
                  </label>
                  <div className="flex items-center bg-base-300 rounded-lg">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Type here"
                      className="input bg-transparent   w-full md:max-w-xs focus:outline-none"
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    <label className="label">
                      <span className="label-text-alt">
                        {" "}
                        {formik.touched.password && formik.errors.password ? (
                          <div className="text-error">
                            {formik.errors.password}
                          </div>
                        ) : null}
                      </span>
                    </label>
                    <div
                      className=""
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? (
                        <EyeIcon className="h-6 font-extralight mr-2 cursor-pointer" />
                      ) : (
                        <EyeOffIcon className="h-6 font-extralight mr-2 cursor-pointer" />
                      )}
                    </div>
                  </div>

                  {/* <label className="label">
                    <span className="label-text-alt">
                      {" "}
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-error">{formik.errors.name}</div>
                      ) : null}
                    </span>
                  </label> */}
                </div>
                <div className="flex items-center justify-between my-2">
                  <div class="form-control">
                    <label class="label cursor-pointer">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs mx-2 checkbox-primary"
                      />
                      <span className="label-text">Remember me</span>
                    </label>
                  </div>
                  <p className="text-xs cursor-pointer text-secondary">
                    Forgot Password
                  </p>
                </div>
                <div className="flex my-2">
                  <button
                    type="submit"
                    //   onClick={(e) => handleSub(e)}
                    className="btn btn-secondary w-full"
                  >
                    Sign In
                  </button>
                </div>
                <div className="flex my-5">
                  <button className="btn bg-white w-full text-accent-content hover:text-primary-content shadow capitalize">
                    <span className="font-bold text-2xl mx-2 text-primary">
                      G
                    </span>
                    Sign In with google
                  </button>
                </div>
                <div className="flex justify-center">
                  <p>
                    Dont't have an account?{" "}
                    <span className="text-secondary cursor-pointer">
                      Sign up
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-1  md:h-full h-1/6 flex items-center justify-center md:bg-base-200">
            <div className="md:h-[200px] blur-xl">
              <svg
                width="200"
                height="200"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                className="md:block hidden"
              >
                <defs>
                  <filter
                    id="grain"
                    x="-50vw"
                    y="-50vh"
                    width="100vw"
                    height="100vh"
                  >
                    <feFlood flood-color="#ffffff" result="neutral-gray" />

                    <feTurbulence
                      in="neutral-gray"
                      type="fractalNoise"
                      baseFrequency="2.5"
                      numOctaves="100"
                      stitchTiles="stitch"
                      result="noise"
                    />

                    <feColorMatrix
                      in="noise"
                      type="saturate"
                      values="0"
                      result="destaturatedNoise"
                    ></feColorMatrix>

                    <feComponentTransfer
                      in="desaturatedNoise"
                      result="theNoise"
                    >
                      <feFuncA type="table" tableValues="0 0 0.15 0"></feFuncA>
                    </feComponentTransfer>

                    <feBlend
                      in="SourceGraphic"
                      in2="theNoise"
                      mode="soft-light"
                      result="noisy-image"
                    />
                  </filter>

                  <clipPath id="shape">
                    <path
                      fill="currentColor"
                      d="M952.5,647Q905,794,780,885Q655,976,500,976Q345,976,220,885Q95,794,47.5,647Q0,500,47.5,353Q95,206,220,115Q345,24,500,24Q655,24,780,115Q905,206,952.5,353Q1000,500,952.5,647Z"
                    ></path>
                  </clipPath>
                </defs>

                <g filter="url(#grain)" clip-path="url(#shape)">
                  <path
                    fill="#1E3b8a"
                    d="M952.5,647Q905,794,780,885Q655,976,500,976Q345,976,220,885Q95,794,47.5,647Q0,500,47.5,353Q95,206,220,115Q345,24,500,24Q655,24,780,115Q905,206,952.5,353Q1000,500,952.5,647Z"
                  />
                </g>
              </svg>
              <svg
                width="100"
                height="100"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden mt-10"
              >
                <defs>
                  <filter
                    id="grain"
                    x="-50vw"
                    y="-50vh"
                    width="100vw"
                    height="100vh"
                  >
                    <feFlood flood-color="#ffffff" result="neutral-gray" />

                    <feTurbulence
                      in="neutral-gray"
                      type="fractalNoise"
                      baseFrequency="2.5"
                      numOctaves="100"
                      stitchTiles="stitch"
                      result="noise"
                    />

                    <feColorMatrix
                      in="noise"
                      type="saturate"
                      values="0"
                      result="destaturatedNoise"
                    ></feColorMatrix>

                    <feComponentTransfer
                      in="desaturatedNoise"
                      result="theNoise"
                    >
                      <feFuncA type="table" tableValues="0 0 0.15 0"></feFuncA>
                    </feComponentTransfer>

                    <feBlend
                      in="SourceGraphic"
                      in2="theNoise"
                      mode="soft-light"
                      result="noisy-image"
                    />
                  </filter>

                  <clipPath id="shape">
                    <path
                      fill="currentColor"
                      d="M952.5,647Q905,794,780,885Q655,976,500,976Q345,976,220,885Q95,794,47.5,647Q0,500,47.5,353Q95,206,220,115Q345,24,500,24Q655,24,780,115Q905,206,952.5,353Q1000,500,952.5,647Z"
                    ></path>
                  </clipPath>
                </defs>

                <g filter="url(#grain)" clip-path="url(#shape)">
                  <path
                    fill="#1E3b8a"
                    d="M952.5,647Q905,794,780,885Q655,976,500,976Q345,976,220,885Q95,794,47.5,647Q0,500,47.5,353Q95,206,220,115Q345,24,500,24Q655,24,780,115Q905,206,952.5,353Q1000,500,952.5,647Z"
                  />
                </g>
              </svg>
            </div>{" "}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default LoginPage;
