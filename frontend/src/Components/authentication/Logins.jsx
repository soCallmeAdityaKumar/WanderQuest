import React, { useEffect, useState } from "react";
import COVER_IMAGE from "../../assets/lifestyle-summer-scene-with-cartoon-design.jpg";
import PuffLoader from "react-spinners/PuffLoader";
import { useAuth } from "./service/AuthService";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error, token, user, message, isLoggedin, isUser } = useAuth();
  const isuser = true;

  useEffect(() => {
    console.log('Loading:', loading);
    console.log('Error:', error);
    console.log('Token:', token);
    console.log('User:', user);
    console.log('Message:', message);
    console.log("isLoggedin", isLoggedin);
    console.log("isUser", isUser);
  }, [loading]);

  const handleLogin = () => {
    login(email, password, "user/login", isUser);
  }

  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 2000);
  }, []);

  return (
    <>
      {loadingPage ? (
        <div className="flex items-center justify-center mt-28">
          <PuffLoader color="black" loading={loadingPage} size={100} />
        </div>
      ) : (
        <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-10 lg:p-20 bg-[#28282B]">
          <div className="w-full max-w-[1200px] h-full bg-[#D8DCDB] flex flex-col p-4 md:p-10 lg:p-20 justify-between items-center rounded-[25px]">
          <div className="w-1/2 h-full flex flex-col">
              <img
                src={COVER_IMAGE}
                className="w-full h-full object-cover rounded-[25px] p-4"
              />
            </div>
            <h1 className="text-4xl text-[#060606] font-bold mb-5">
              <a href="/">Netropolis</a>
            </h1>

            <div className="w-full max-w-[600px] flex flex-col">
              <div className="w-full flex flex-col mb-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">Login</h3>
                <p className="text-base md:text-lg lg:text-xl mb-2">Welcome Back! Please enter your details.</p>
              </div>
              <div className="w-full flex flex-col mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none text-lg md:text-xl lg:text-2xl"
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2 px-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none text-lg md:text-xl lg:text-2xl"
                />
              </div>

              <div className="w-full flex flex-col mb-8">
                <button className="w-full py-3 bg-[#060606] rounded-full text-white font-semibold my-2 hover:scale-105 hover:opacity-90 duration-300" onClick={handleLogin}>
                  Login
                </button>
                <button className="w-full py-3 bg-white rounded-full text-[#060606] border-2 border-black font-semibold my-2 hover:scale-105 hover:opacity-80 duration-300">
                  <a href="/signup">Register</a>
                </button>
              </div>
            </div>
            <div className="w-full mb-4 md:mb-8 lg:mb-12 text-center">
              <p className="text-sm md:text-base lg:text-lg text-[#060606]">
                Login as an Admin User - <span className="font-semibold underline cursor-pointer"><a href="/adminlogin">Admin Login</a></span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
