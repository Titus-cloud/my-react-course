import { useState } from "react";
import login from "../images/login.png";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Input validation
    let newErrors = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (
      !(email.includes("@") && email.indexOf(".") > email.indexOf("@"))
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true); // Start loader
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login successful!");
        console.log("Logged in user:", user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          setErrors({ email: "No account found with this email." });
        } else if (errorCode === "auth/wrong-password") {
          setErrors({ password: "Incorrect password." });
        } else {
          setErrors({ email: "Login failed. Please try again." });
        }
      })
      .finally(() => setIsLoading(false)); // Stop loader
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    setIsLoading(true); // Start loader
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Login Successful:", result.user);
        <p>Google Login successful!</p>
        navigate("/"); // Navigate to the homepage or dashboard
      })
      .catch((error) => {
        console.error("Google Login Error:", error.message);
      })
      .finally(() => setIsLoading(false)); // Stop loader
  };

  return (
    <div className="relative">
      {/* Fullscreen Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Loader />
        </div>
      )}

      <div className="flex items-center justify-center p-2 relative">
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
                aria-label="Email Address"
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
                aria-label="Password"
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
              <p
                className="text-[#45C9A1] text-sm cursor-pointer"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </p>
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
              onClick={loginWithGoogle}
            >
              Log In with Google
            </button>
          </div>
          <p className="text-sm text-center">
            Don’t Have An Account Yet?{" "}
            <span
              className="cursor-pointer text-[#45C9A1]"
              onClick={() => navigate("/signup")}
            >
              Sign Up Free
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
