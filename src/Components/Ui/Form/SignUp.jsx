import React, { useContext } from "react";
import useAuth from "../../../Hooks/useAuth";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowDownLeftSquareFill } from "react-icons/bs";
import { ToasMessage } from "../../../Utils/ToastMessage";
import { ToastError } from "../../../Utils/ToastError";
import usePublicApi from "../../../Hooks/usePublicApi";

const SignUp = () => {
  const {
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    user,
    updateUserProfile,
  } = useContext(AuthContext);
  const xiosPublic = usePublicApi()
  const goTo = useNavigate()

  // Handle sign up
  const handleSignUp = (event) => {
    event.preventDefault();
    
    const formData = Object.fromEntries(new FormData(event.target).entries());
    const name = formData.name
    const email = formData.email
    const password = formData.password
    const photoURL = formData.photoURL

    createUser(email,password)
    .then(response => {
      updateUserProfile(name,photoURL)
      // Letting the user know success response
      ToasMessage('You have successfully signed up')
      goTo('/')
      // user information object
      const userInfo = {
        name,
        email,
        password,
        photoURL,
        role:'user',
        participationDetails:{
          attemptedContests:[],
          wonContests:[]
        }
      }

      // store user in database 
      xiosPublic.post(`createUser?email=${user?.email}`,userInfo)
      .then(res => {
       if(res.data.insertId){
        console.log({success:true})
       }
      })
     
    })
    .catch(err => ToastError(err.message.toString()))
  };
  
  return (
    <div >
      <div className="hero min-h-screen overflow-hidden relative">
        <div className="hero-content relative flex-col lg:flex-row-reverse">
          <div className="-z-10 absolute top-60 left-1/2 transform -translate-x-1/2 h-[1100px] w-[1800%] -rotate-12 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
            <div className="mt-5 text-center text-2xl text-white"></div>
          </div>
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card lg:ml-16 rounded-lg bg-gradient-to-b from-[#574de5d1]  to-[#4141e5] 
           shrink-0 w-1/3 ">
            <form
              onSubmit={handleSignUp}
              className="card-body ">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input text-white focus-within:outline-none focus-within:border-none border-b-white bg-transparent rounded-none"
                  required
                />
              </div>

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

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="input text-white focus-within:outline-none focus-within:border-none border-b-white bg-transparent rounded-none"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-white w-1/2">Sign up</button>
              </div>
            </form>
            <div className="pl-8 pb-8 text-white flex items-center gap-3 ">
            <Link to={'/signIn'} className="flex justify-center gap-2 items-center">Already have an account?
            <BsArrowDownLeftSquareFill/>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
