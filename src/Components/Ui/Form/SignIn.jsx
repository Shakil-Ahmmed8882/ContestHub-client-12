import React, { useContext, useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { ToasMessage } from "../../../Utils/ToastMessage";
import { ToastError } from "../../../Utils/ToastError";
import usePublicApi from "../../../Hooks/usePublicApi";

const SignIn = () => {
  const { signIn, googleSignIn, user } = useAuth();
  const location = useLocation();
  const goTo = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const xiosPublic = usePublicApi();

  // Handle sign up
  const handleSignIn = (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target).entries());
    const email = formData.email;
    const password = formData.password;

    signIn(email, password)
      .then((response) => {
        ToasMessage("You have successfully signed In");
        goTo(from, { replace: true } || '/');
      })
      .catch((err) => ToastError(err.message.toString()));
  };



  const handleMedia = (media) => {
    media().then((result) => {
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        password: "",
        photoURL: result?.user?.photoURL,
        role: "user",
        participationDetails: {
          attemptedContests: [],
          wonContests: [],
        },
      };


      xiosPublic.post(`createUser?email=${result?.email}`, userInfo)
        .then((res) => {
          if (res.data) {
         
            ToasMessage("You have successfully signed in with google");
            goTo(from, { replace: true }  || '/');
          }
        });
    });
  };

  return (
    <div>
      <div className="hero min-h-screen overflow-hidden relative">
        <div className="hero-content relative flex-col lg:flex-row-reverse">
          <div className="-z-10 absolute top-60 left-1/2 transform -translate-x-1/2 h-[1100px] w-[1800%] -rotate-12 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
            <div className="mt-5 text-center text-2xl text-white"></div>
          </div>

          <div
            className="card mr-0 lg:mr-16 rounded-lg bg-gradient-to-b from-[#574de5d1]  to-[#4141e5] 
           shrink-0 w-1/3 ">
            <form onSubmit={handleSignIn} className="card-body ">
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input text-white focus-within:outline-none focus-within:border-none border-b-white bg-transparent rounded-none"
                  required
                />
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="input text-white focus-within:outline-none focus-within:border-none border-b-white bg-transparent rounded-none"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-white w-1/2">Sign in</button>
              </div>
            </form>
            <div className=" mx-9 divider divider-success text-white">OR</div>
            <BsGoogle
              onClick={() => handleMedia(googleSignIn)}
              className="mx-auto cursor-pointer my-5 text-red-500"
            />
            <div className="pl-8 text-center justify-center pb-8 text-white flex items-center gap-2 ">
              <Link
                to={"/signUp"}
                className="justify-center items-center flex gap-2">
                Don&apos;t have an account?
                <BsArrowUpRightCircleFill />
              </Link>
            </div>
          </div>
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Sign in now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
