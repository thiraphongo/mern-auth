const SignUp = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex ">
        <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg"/>
        <input type="email" placeholder="Email" id="email" className="bg-slate-100 p-3 rounded-lg"/>
        <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg"/>
      </form>
    </div>
  )
}

export default SignUp