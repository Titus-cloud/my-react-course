import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useState } from "react";
import sign from "../images/signup.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";

export default function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true)
  // State for password visibility and form data
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});

  // Toggle password visibility
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  // Handle input change
  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

{isLoading &&<Loader />}

  // Handle form submission
  function hundleSignup() {
    const errors = {};
    // Validate fields
    !formData.firstName
      ? (errors.firstName = true)
      : (errors.firstName = false);
    !formData.lastName ? (errors.lastName = true) : (errors.lastName = false);
    !formData.email ? (errors.email = true) : (errors.email = false);
    !formData.phone ? (errors.phone = true) : (errors.phone = false);
    !formData.password
      ? (errors.password = true)
      : (errors.password = false);
    !formData.confirmPassword
      ? (errors.confirmPassword = true)
      : (errors.confirmPassword = false);

    setError(errors);

    // If no errors, create user
    if (
      !errors.firstName &&
      !errors.lastName &&
      !errors.email &&
      !errors.phone &&
      !errors.password &&
      !errors.confirmPassword
    ) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          console.log(userCredential.user);
          navigate("/login"); // Navigate to login page
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }

  // Check if passwords match
  const passwordsMatch =
    formData.password && formData.confirmPassword
      ? formData.password === formData.confirmPassword
      : false;

  return (
    <div className="flex items-center relative justify-between p-2  h-[90vh] ">
      <div className="flex-1 p-8 ">
        <h1 className="text-center text-4xl font-bold pb-5">
          Create An Account
        </h1>
        {Object.values(error).some((val) => val) && (
          <p className="text-red-500 text-xl font-bold text-center">
            Please fill all fields
          </p>
        )}
        <div>
          <div className="flex items-center gap-8 my-3 ">
            <input
              onChange={handleChange}
              className={`shadow-sm p-3 w-[50%] text-sm rounded-full outline-none mx5 ${
                error.firstName ? "border-red-500 border" : ""
              }`}
              name="firstName"
              value={formData.firstName || ""}
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={handleChange}
              className={`shadow-sm p-3 w-[50%] text-sm rounded-full outline-none mx5 ${
                error.lastName ? "border-red-500 border" : ""
              }`}
              name="lastName"
              value={formData.lastName || ""}
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            onChange={handleChange}
            name="email"
            className={`shadow-sm p-3 w-full text-sm rounded-full outline-none my-3 ${
              error.email ? "border-red-500 border" : ""
            }`}
            type="text"
            value={formData.email || ""}
            placeholder="Email Address"
          />

          <input
            onChange={handleChange}
            className={`shadow-sm p-3 w-full text-sm rounded-full outline-none my-3 ${
              error.phone ? "border-red-500 border" : ""
            }`}
            type="number"
            name="phone"
            value={formData.phone || ""}
            placeholder="Phone Number"
          />

          {/* Password Input */}
          <div className="relative w-full">
            <input
              onChange={handleChange}
              className={`shadow-sm p-3 w-full text-sm rounded-full outline-none my-3 ${
                error.password ? "border-red-500 border" : ""
              }`}
              name="password"
              value={formData.password || ""}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* Confirm Password Input */}
          <div className="relative w-full">
            <input
              onChange={handleChange}
              className={`shadow-sm p-3 w-full text-sm rounded-full outline-none my-3 ${
                error.confirmPassword ? "border-red-500 border" : ""
              }`}
              name="confirmPassword"
              value={formData.confirmPassword || ""}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {passwordsMatch ? (
                <TiTick className="text-green-500" />
              ) : (
                <FaXmark className="text-red-700" />
              )}
            </span>
          </div>

          <button
            onClick={hundleSignup}
            className="w-full bg-[#45C9A1] py-3 px-20 rounded-full text-md font-bold text-white mb-5"
          >
            Create Account
          </button>
        </div>

        <hr />

        <div className=" pt-5 pb-5">
          <button className="w-full p-3 px-20 rounded-full text-md font-bold text-blue-500 shadow-lg ">
            Log In with Google
          </button>
        </div>
        <p className="text-sm text-center">
          Already Have An Account?{" "}
          <span className="cursor-pointer text-[#45C9A1]">Log In</span>
        </p>
      </div>
      <div className="flex-1 w-full h-[90vh] -z-10">
        <img className="bg-cover" src={sign} alt="sign" />
      </div>
    </div>
  );
}
