import React, {useState} from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useUserAuth } from '../contexts/UserAuthContext'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const {auth, resetPassword} = useUserAuth()
    const handlePasswordReset = async (e)=>{
        e.preventDefault();
        console.log(auth)
        setError("")
        try{
            await resetPassword(email)
        }
        catch(err){
            setError(err.message)
            console.log(err.message)
        }
    }
  return (
    <>
    <Form onSubmit={handlePasswordReset}>
        <Form.Control type="email" placeholder="Enter email to send password" onChange={(e)=>setEmail(e.target.value)}/>
        <Button type="Submit">Submit</Button>
    </Form>
    <Link to="/"><Button>Home</Button></Link>
    {error && <Alert variant="danger">{error}</Alert>}

    </>
  )
}

export default ForgotPassword