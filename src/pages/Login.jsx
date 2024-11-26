import login from "../images/login.png";

export default function Login() {
  return (
    <div className=" flex items-center justify-center  p-2">
      <div className="flex-1 h-[90vh] w-[50%] ">
        <img src={login} alt="login" />
      </div>

      <div className="flex-1 h-[90vh] w-[50vw] ">
        <h1 className="text-center text-4xl font-bold pb-5">Login to your Account </h1>
        <div>
          <div className="pb-8 ">
          <input className=" shadow-sm p-3 w-full text-sm rounded-full outline-none" type="text" placeholder="Email Address" />
          </div>

          <div className="pb-8">
          <input className="shadow-lg p-3 text-sm w-full rounded-full outline-none" type="text" placeholder="Password" />
          </div>


          <div className="flex justify-between items-center">
            <div className="flex gap-2 ">
              <input type="checkbox" />
              <p className="text-sm">Remember Me</p>
            </div>
            <p className="text-[#45C9A1] text-sm">Forgot Password?</p>
          </div>
          <div className="flex justify-center pt-5 pb-5">
          <button className="w-full bg-[#45C9A1] py-3 px-20 rounded-full text-md font-bold text-white ">Sign In</button>
          </div>
        </div>

        <hr />

        <div className=" pt-5 pb-5">
        <button className="w-full  p-3 px-20 rounded-full text-md font-bold text-blue-500 shadow-lg">Log In with Google</button>
        </div>
        <p className="text-sm text-center">
          Dont Have An Account Yet? <span className=" cursor-pointer text-[#45C9A1] " >Sign Up Free</span>
        </p>
      </div>
    </div>
  );
}
