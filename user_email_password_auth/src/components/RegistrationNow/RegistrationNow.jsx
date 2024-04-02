import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import auth from '../../Firebase/firebase.config';

const RegistrationNow = () => {
    const handleRegister = (e)=>{
        e.preventDefault();
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        console.log(Email,Password);

        createUserWithEmailAndPassword(auth,Email,Password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration Now</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default RegistrationNow