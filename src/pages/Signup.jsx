import React, { useState } from "react";

const Signup = () => {
  const [isStudent, setIsStudent] = useState(true);
  const handleCheckboxChange = () => {
    setIsStudent(!isStudent);
  };
  const [creds, setCreds] = useState({
    username: null,
    email: null,
    university: null,
    stream: null,
    year: 2000,
    password: null,
    confirmPassword: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!creds.password || !creds.confirmPassword) {
      console.log("Passwords do not match !");
      return;
    }

    // Server Action
    console.log(creds);
  };

  return (
    <main id="auth" className="min-h-screen">
      <div className="min-h-screen w-full backdrop-blur-lg py-16 flex justify-center">
      <section className="w-full bg-white rounded-xl shadow-lg shadow-black/60 min-h-[75vh] max-w-[45vw]">
        <form className="px-24" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-start">
            <div className="my-6">
              <h1 className="text-4xl mb-4 mt-12 font-bold text-center">
                Create an Account
              </h1>
            </div>

            <div className="flex flex-row items-center gap-3 justify-center mt-6">
              <div>
                <label className="relative inline-flex items-center mb-5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isStudent}
                    onChange={handleCheckboxChange}
                    className="sr-only peer"
                  ></input>
                  <div className="w-9 h-5 peer-focus:outline-none rounded-full peer bg-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-hover"></div>
                  <span
                    className={`ms-3 text-sm font-medium ${
                      isStudent ? "text-primary" : "text-primary-hover"
                    }`}
                  >
                    Create as {isStudent ? "Student" : "Teacher"}
                  </span>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2 justify-center mt-2 w-72 my-2">
              <label htmlFor="username">Enter Your Full Name</label>
              <input
                required={true}
                onChange={(e) => {
                  setCreds({
                    ...creds,
                    username: e.target.value,
                  });
                }}
                className="w-full rounded-xl px-4"
                id="username"
                name="username"
                type="username"
                placeholder="John Doe"
              ></input>
            </div>

            <div className="flex flex-col gap-2 justify-center mt-2 w-72 my-2">
              <label htmlFor="email">Enter Your Email</label>
              <input
                required={true}
                onChange={(e) => {
                  setCreds({
                    ...creds,
                    email: e.target.value,
                  });
                }}
                className="w-full rounded-xl px-4"
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="johndoe@email.com"
              ></input>
            </div>

            <div className="flex flex-col gap-2 justify-center mt-2 w-72 my-2">
              <label htmlFor="university">Enter University Name</label>
              <input
                required={true}
                onChange={(e) => {
                  setCreds({
                    ...creds,
                    university: e.target.value,
                  });
                }}
                className="w-full rounded-xl px-4"
                id="university"
                name="university"
                type="university"
                placeholder="Oxford University"
              ></input>
            </div>

            <div className="flex flex-col gap-2 justify-center mt-2 w-72 my-2">
              <label htmlFor="stream">Select a Stream</label>
              <select
                id="stream"
                className="w-full rounded-xl px-4"
                required={true}
                onChange={(e) => {
                  setCreds({
                    ...creds,
                    stream: e.target.value,
                  });
                }}
              >
                <option value={""}>Choose a Stream</option>
                <option value="Internet of Things">Internet of Things</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Blockchain Technology">
                  Blockchain Technology
                </option>
                <option value="Cyber Security">Cyber Security</option>
              </select>
            </div>

            {isStudent ? (
              <div className="flex flex-col gap-2 justify-center mt-2 w-72 my-2">
                <label htmlFor="year">Enter Admission Year</label>
                <input
                  required={true}
                  onChange={(e) => {
                    setCreds({
                      ...creds,
                      year: e.target.value,
                    });
                  }}
                  className="w-full rounded-xl px-4"
                  id="year"
                  name="year"
                  type="number"
                  min={2000}
                  max={2024}
                  placeholder="2020"
                ></input>
              </div>
            ) : null}

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
                className="w-full rounded-xl px-4"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="****"
              ></input>
            </div>

            <div className="flex flex-col gap-2 justify-center my-2 w-72">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                required={true}
                onChange={(e) => {
                  setCreds({
                    ...creds,
                    confirmPassword: e.target.value,
                  });
                }}
                className="w-full rounded-xl px-4"
                id="confirm_password"
                name="confirm_password"
                type="confirm_password"
              ></input>
            </div>

            <div className="w-72 mt-8 mb-12">
              <button
                type="submit"
                className="bg-primary"
              >
                Create Account
              </button>
              <p className="my-6 text-sm text-center">
                Already Have an Account ? <a href="/login" className="text-primary font-bold"> Login Instead</a>
              </p>
            </div>
          </div>
        </form>
      </section>
      </div>
    </main>
  );
};

export default Signup;
