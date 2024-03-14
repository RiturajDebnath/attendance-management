import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../components/constants/api-endpoints";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!creds.email || !creds.password) {
      console.log("Enter both fields !!");
      return;
    }

    try {
      const data = await axios.post(BACKEND_URL + "/auth/login", creds, {
        withCredentials: true,
      });
      // navigate("/dashboard");
      console.log(data);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <main id="auth" className="min-h-screen">
      <div className="h-screen w-full backdrop-blur-lg py-20 flex justify-center">
        <section className="w-full bg-white rounded-xl shadow-lg shadow-black/60 min-h-[75vh] max-w-[40vw]">
          <form className="px-24" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-start">
              <div className="my-6">
                <h1 className="text-4xl mb-4 mt-12 font-bold text-center">
                  Login to Attendy
                </h1>
              </div>
              <div className="flex flex-col gap-2 justify-center my-2 w-72">
                <label htmlFor="email">Enter Your Email</label>
                <input
                  required={true}
                  onChange={(e) => {
                    setCreds({
                      ...creds,
                      email: e.target.value,
                    });
                  }}
                  id="email"
                  name="email"
                  type="email"
                ></input>
              </div>

              <div className="flex flex-col gap-2 justify-center my-2 w-72">
                <label htmlFor="password">Enter Your Password</label>
                <input
                  required={true}
                  onChange={(e) => {
                    setCreds({
                      ...creds,
                      password: e.target.value,
                    });
                  }}
                  id="password"
                  name="password"
                  type="password"
                ></input>
              </div>

              <div className="w-72 my-8">
                <button type="submit" className="bg-primary">
                  Log In
                </button>
                <p className="mt-6 text-sm text-center">
                  Don't Have an Account ?{" "}
                  <a href="/signup" className="text-primary font-bold">
                    {" "}
                    Create One
                  </a>
                </p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;
