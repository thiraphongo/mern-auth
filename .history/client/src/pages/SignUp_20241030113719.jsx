import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [formData,setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]:e.target.value});
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/auth/signup`,{
      method:'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    }
  

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          type=""
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Sign UP
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
