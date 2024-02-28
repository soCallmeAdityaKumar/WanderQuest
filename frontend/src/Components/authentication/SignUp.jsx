import React, { useState, useEffect } from "react";
import COVER_IMAGE from "../../assets/cartoon-style-traveling-concept-with-baggage.jpg";
import PuffLoader from "react-spinners/PuffLoader";
import { useAuth } from "./service/AuthService";

const SignUp = () => {
  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const {signup,loading,error,token,user,message,statusCode}=useAuth()
  const [isUser,setIsuser]=useState(true)


  useEffect(()=>{
    console.log('Loading:', loading);
    console.log('Error:', error);
    console.log('User:', user);
    console.log('Message:', message);
  },[loading])
  const [loadingPage, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  const handleSignup=()=>{
    console.log("name="+name+"email="+email+"password="+password)
    if(isUser){
      signup(name,email,password,"user/register")
    }else{
      signup(name,email,password,"company/register")
    }
  }

  return (
    <>
      {loadingPage ? (
        <div className="flex items-center justify-center mt-28">
          <PuffLoader color="black" loading={loadingPage} size={100} />
        </div>
      ) : (
        <div className="w-full h-screen flex items-start p-10 bg-[#28282B]">
          <div className="w-full h-full bg-[#D8DCDB] flex rounded-[25px] ">
            <div className="w-1/2 h-full flex flex-col">
              <img
                src={COVER_IMAGE}
                className="w-full h-full object-cover rounded-[25px] p-4"
              />
            </div>
            <div className="w-1/2 h-full flex flex-col p-20 bg-[#D8DCDB] justify-between items-center rounded-[25px]">
              <h1 className="text-4xl text-[#060606] font-bold mb-5">
                <a href="/">Netropolis</a>
              </h1>

              <div className="w-full flex flex-col max-w-[600px]">
                <div className="w-full flex flex-col mb-2">
                  <h3 className="text-3xl font-semibold mb-2">Sign Up</h3>
                  <p className="text-base mb-2">Please enter your details.</p>
                </div>
                <div className="w-full flex flex-col">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    onChange={(e)=>setName(e.target.value)}
                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none text-[17px]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none text-[17px]"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none text-[17px]"
                  />
                </div>

                <div className="w-full flex flex-col my-4">
                  <button className="w-full bg-[#060606] rounded-full text-white font-semibold p-4 my-2 mt-8 hover:scale-105 hover:opacity-90 duration-300" onClick={handleSignup}>
                  {loading ? ("Signin in....") : ("Sign Up ")}
                  </button>
                  <div className="w-full items-center flex justify-center">
                  <p className="text-sm font-normal text-[#fb8500]">
                    {(message === null) ? ("") : (message)}
                  </p>
                </div>
                </div>
              </div>
              <div className="w-full items-center flex justify-center mt-8">
                <p
                  className="text-sm font-normal text-[#060606]"
                >
                  Already registered?{" "}
                  <span className="font-semibold underline underline-offset-2 cursor-pointer">
                    <a href="/login">Log In</a>
                  </span>
                </p>
              </div>
              <div className="w-full items-center flex justify-center">
                <p
                  className="text-sm font-normal text-[#060606] "
                >
                  Sign Up as a Admin User{" - "}
                  <span className="font-semibold underline underline-offset-2 cursor-pointer">
                    <a href="/adminsignup">Sign Up</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
