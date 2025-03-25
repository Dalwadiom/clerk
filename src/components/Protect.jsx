import { useAuth } from "@clerk/clerk-react"
import LoginError from "./LoginError"

function Protect({children}) {
    const { isLoaded, isSignedIn } = useAuth()
    if (!isLoaded) {
        return <div>Loading...</div>
    }
    if (!isSignedIn) {
        return <LoginError/>
    }
    return children
}

export default Protect
