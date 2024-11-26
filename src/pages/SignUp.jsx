import sign from "../images/signup.png"

export default function SignUp(){
  return(
    <div className="flex items-center justify-between p-2  h-[90vh] ">
      <div className="flex-1 p-8">
        <h1 className="text-center text-4xl font-bold pb-5">Create An Account</h1>
      <div>
        <div className="flex items-center gap-8 my-3">

          <input className="shadow-sm p-3 w-[50%] text-sm rounded-full outline-none mx5" type="text" placeholder="First Name" />
          <input className="shadow-sm p-3 w-[50%] text-sm rounded-full outline-none mx5" type="text" placeholder="Last Name" />
        </div>

      <div className="flex flex-col ">
        <input className=" shadow-sm p-3 w-full text-sm rounded-full outline-none my-3" type="text" placeholder="Email Address" />
        <input className=" shadow-sm p-3 w-full text-sm rounded-full outline-none my-3" type="text" placeholder="Phone Number" />
        <input className=" shadow-sm p-3 w-full text-sm rounded-full outline-none my-3" type="text" placeholder="Password" />
        <input className=" shadow-sm p-3 w-full text-sm rounded-full outline-none my-3" type="text" placeholder="Confirm Password" />
        <button className="w-full bg-[#45C9A1] py-3 px-20 rounded-full text-md font-bold text-white mb-5">Create Account</button>
      </div>
      </div>

      <hr />

      <div className=" pt-5 pb-5">
        <button className="w-full  p-3 px-20 rounded-full text-md font-bold text-blue-500 shadow-lg ">Log In with Google</button>
        </div>
        <p className="text-sm text-center">
        Already Have An Account? <span className="cursor-pointer text-[#45C9A1] " >Log In</span>
        </p>
      </div>
      <div className="flex-1 w-full h-[90vh]">
        <img className="bg-cover" src={sign} alt="sign" />
      </div>
      </div>
    
  )
}