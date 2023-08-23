import { useState} from 'react'
import { projectAuth } from '../firebase'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = async (email, password, username) => {
        setError(null)
        setIsPending(true)

        try {
           const res = await projectAuth.createUserWithEmailAndPassword(email, password)
           if (!res) {
            throw new Error ('Could not complete signup')
           }
           //Add username to user
           await res.user.updateProfile({username})
           setIsPending(false)
           setError(null)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
            
        }

    }
    return {error, isPending, signup}
}