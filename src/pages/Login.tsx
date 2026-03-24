import { useState } from "react";
import { AtSignIcon } from "lucide-react";

const Login = () => {

  const [state, setState] = useState('sign up')
  return (
    <>
      <main className="login-page-container">
        <form className="login-form">
          <h2 className="text-3xl font-medium text-white">
            {state === 'login' ? "Sign In" : "Sign Up"}
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {state === 'login' ? 'Please enter your email and  password to access.': 'Please enter your details to create an account.'}
          </p>
           
          {/* Username */}
          {state !== 'login' && (
            <div className= 'mt-4'>
              <label className="font-medium text-sm text-gray-700 dark:text-gray-300"></label>
              <div className="relative mt-2">
                <AtSignIcon className="absolute left-3 top-1/2-translate-y-1/2 text-gray-400 size-4.5"/>
              
              <input type="text" placeholder="enter the username"
              className = "login-input" required/>
            </div>

            </div>
          )}
        </form>
      </main>
    </>
  )
}

export default Login
