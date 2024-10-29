const SignUp = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg"/>
        <input type="text" placeholder="Email" id="username" className="bg-slate-100 p-3 rounded-lg"/>
        <input type="text" placeholder="Password" id="username" className="bg-slate-100 p-3 rounded-lg"/>
      </form>
    </div>
  )
}

export default SignUp