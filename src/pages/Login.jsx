import React from "react";

const Login = () => {
  return (
    <main className="min-h-screen bg-secondary py-24 flex justify-center">
      <section className="w-full bg-primary rounded-xl shadow-lg shadow-shadow border-2 border-accent min-h-[75vh] max-w-[55vw]">
        <form className="px-24">
          <div className="flex flex-col items-center justify-start">
            <div className="my-6">
                <h1 className="text-4xl mb-4 mt-12 font-bold text-center">Login to Attendy</h1>
            </div>
            <div className="flex flex-col gap-2 justify-center my-2 w-72">
              <label htmlFor="email">Enter Your Email</label>
              <input required={true} className="w-full rounded-lg" id="email" name="email" type="email"></input>
            </div>

            <div className="flex flex-col gap-2 justify-center my-2 w-72">
              <label htmlFor="password">Enter Your Password</label>
              <input required={true} className="w-full rounded-lg" id="password" name="password" type="password"></input>
            </div>

            <div className="w-72 my-8">
                <button type="submit" className="bg-accent hover:bg-accent-hover w-full py-1 rounded-lg text-primary font-bold">Log In</button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
