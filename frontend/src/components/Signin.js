import { useRef } from "react"
import { useNavigate } from "react-router-dom"
const Signin = ({setCurrUser}) =>{
  const navigate = useNavigate()
  const formRef=useRef()
  const login=async (userInfo, setCurrUser)=>{
    const url="http://localhost:3000/login"
    try{

        const response=await fetch(url, {

            method: "post",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json',
                // 'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')

            },
            body: JSON.stringify(userInfo)
        })
        const data=await response.json()
        console.log("response" , response.headers.get("Authorization"));

        if(!response.ok)
          throw data.error
        localStorage.setItem("token", response.headers.get("Authorization"))

        setCurrUser(data)
        navigate("/")

    }catch(error){
       console.log("error", error)
    }
}
  const handleSubmit=e=>{
    e.preventDefault()
      const formData=new FormData(formRef.current)
      const data=Object.fromEntries(formData)
      const userInfo={
        "user":{ email: data.email, password: data.password }
      }
      login(userInfo, setCurrUser)
      e.target.reset()

  }
  const handleClick=e=>{
    e.preventDefault()
    navigate("/signup")

  }
  return(
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name='email' placeholder="email" />
        <br/>
        Password: <input type="password" name='password' placeholder="password" />
        <br/>
        <input type='submit' value="Signin" />
      </form>
      <br />
      <div>Not registered yet, <a href="#signup" onClick={handleClick} >Signup</a> </div>
    </div>
  )
}
export default Signin
