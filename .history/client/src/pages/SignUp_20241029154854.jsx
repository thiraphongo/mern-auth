const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg"/>
        <input type="email" placeholder="Email" id="email" className="bg-slate-100 p-3 rounded-lg"/>
        <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg"/>
        <button type="" className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign UP</button>
      </form>
      <div className="">
        <p>Have an account</p>
        <span className="text-blue-500">Sign in</span>
      </div>
    </div>
  )
}

export default SignUp