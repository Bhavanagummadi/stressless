import { Form, redirect,useNavigation ,Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";
import customFetch from "../utils/customFetch";
import {toast} from 'react-toastify';

export const action=async({request})=>{
  const formData=await request.formData();
  const data=Object.fromEntries(formData);
  try{
    await customFetch.post('auth/register',data)
    toast.success('Registration Successful')
    return redirect('/login');
  }catch(error){
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return null;
  }
  
};
const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Registration form</h4>
        <FormRow
          type="text"
          name="name"
          defaultName=""
          labelName="Name"
        />
        <FormRow
          type="text"
          name="lastName"
          defaultName=""
          labelName="Last Name"
        />
        <FormRow
          type="text"
          name="role"
          defaultName=""
          labelName="Role"
        />
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
          Register
        </button>
        <p>
          Already a member?{" "}
          <Link className="member-btn" to="/login">
            Log In
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
