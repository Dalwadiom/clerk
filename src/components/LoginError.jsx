import { SignInButton } from '@clerk/clerk-react'
function LoginError() {
  return (
    <center>
        <h1 className="text-center mt-4">Please Login first</h1>
        <SignInButton>
            <button className='btn btn-primary'>Sign in here</button>
        </SignInButton>
    </center>
  )
}

export default LoginError
