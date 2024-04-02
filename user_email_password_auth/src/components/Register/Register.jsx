import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../Firebase/firebase.config";

const Register = () => {
  const [registerError,setRegisterError] = useState('');
  const [success,setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword =()=>{
      setShowPassword(!showPassword);
    }
    const handleRegister = (e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password = e.target.password.value;
        const conditions = e.target.terms.checked;
        console.log(conditions);

        if(password.length<6){
          setRegisterError('Password must be 6 characters or longer');
          return;
        }
        else if(!(/[A-Z]/).test(password)){
          setRegisterError('Your password should have at least a uppercase character');
          return;
        }
        else if(!conditions){
          setRegisterError("Please accept our terms and conditions");
          return;
        }

        setRegisterError('');
        setSuccess('');
       createUserWithEmailAndPassword(auth, email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          setSuccess('Registration successfull');
        })
        .catch(error=>{
          setRegisterError(error.message);
        })
    }
  return (
    <div className="mx-auto ">
      <div className="w-[70%] mx-auto space-y-6">
      <h2 className="text-4xl font-bold text-center">Registation Here</h2>
      <form className="space-y-5" onSubmit={handleRegister}>
        <input className="w-full py-4 px-2 bg-gray-50" type="email" placeholder="Email" name="email" id="" required/>
        <br />
        <input className="w-full py-4 px-2 bg-gray-50" type={showPassword ? "text" : "password"} placeholder="Password" name="password" id="" required/>
        <span onClick={handleShowPassword}>Show</span>
        <br />
          <input type="checkbox" name="terms" id="" />
          <label htmlFor="terms">Accept our terms and conditions</label>
        <br />
        <input className="btn btn-primary w-full py-4" type="submit" value="Register" />
      </form>
      {
        registerError && <p className="text-red-600">{registerError}</p>
      }
      {
        success && <p className="text-green-600">{success}</p>
      }
      </div>
    </div>
  );
};

export default Register;
