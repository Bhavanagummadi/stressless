import { Form, redirect, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from "../utils/customFetch"; // Import customFetch
import { toast } from "react-toastify"; // Import toast for notifications

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("Login Form Data:", data); // Log the form data
  try {
    const response = await customFetch.post("auth/login", data);
    toast.success("Login Successful");
    return redirect("/dashboard");
  } catch (error) {
    console.error("Login failed:", error);
    toast.error(error?.response?.data?.msg || "An error occurred during login.");
    return null;
  }
};

const Login = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Log In</h4>
        <FormRow
          type="email"
          name="email"
          defaultName=""
          labelName="Email"
        />
        <FormRow
          type="password"
          name="password"
          defaultName=""
          labelName="Password"
        />
        <button type="submit" className="btn btn-block">
          Log In
        </button>
        <button type="button" className="btn btn-block">
          Try Demo
        </button>
        <p>
          Not a Member?{" "}
          <Link className="member-btn" to="/register">
            Sign Up
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
