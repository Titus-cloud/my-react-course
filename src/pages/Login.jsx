import { useState } from "react";
import login from "../images/login.png";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {
      email: !formData.email
        ? "Email is required."
        : !(
            formData.email.includes("@") &&
            formData.email.indexOf(".") > formData.email.indexOf("@")
          )
        ? "Invalid email address."
        : "",
    };

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform login (you can add your logic here)
      alert("Login successful!");
    }
  }

  return (
    <div className="flex items-center justify-center p-2">
      <div className="flex-1 h-[90vh] w-[50%]">
        <img src={login} alt="login" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-1 h-[90vh] w-[50vw] flex flex-col"
      >
        <h1 className="text-center text-4xl font-bold pb-5">
          Login to your Account
        </h1>
        <div>
          <div className="pb-8">
            <input
              className={`shadow-sm p-3 w-full text-sm rounded-full outline-none ${
                errors.email ? "border border-red-500" : ""
              }`}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="pb-8">
            <input
              className={`shadow-lg p-3 w-full text-sm rounded-full outline-none ${
                errors.password ? "border border-red-500" : ""
              }`}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <input type="checkbox" />
              <p className="text-sm">Remember Me</p>
            </div>
            <p className="text-[#45C9A1] text-sm">Forgot Password?</p>
          </div>
          <div className="flex justify-center pt-5 pb-5">
            <button
              type="submit"
              className="w-full bg-[#45C9A1] py-3 px-20 rounded-full text-md font-bold text-white"
            >
              Sign In
            </button>
          </div>
        </div>

        <hr />

        <div className="pt-5 pb-5">
          <button
            type="button"
            className="w-full p-3 px-20 rounded-full text-md font-bold text-blue-500 shadow-lg"
          >
            Log In with Google
          </button>
        </div>
        <p className="text-sm text-center">
          Don’t Have An Account Yet?{" "}
          <span className="cursor-pointer text-[#45C9A1]">Sign Up Free</span>
        </p>
      </form>
    </div>
  );
}
