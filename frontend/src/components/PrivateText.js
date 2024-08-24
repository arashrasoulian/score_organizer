import { useState,useEffect } from "react"
const PrivateText=({currUser})=>{
    const [message, setMessage]=useState(null)
    const [profile, setProfile] = useState(null);
    const [counter ,setCounter] = useState(0)

    const getText=async ()=>{
        try {
            const response=await fetch("http://localhost:3000/private/test", {
                method: "get",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                }
            })
            if(!response.ok) throw Error
            const data=await response.json()
            setMessage(data.message)
        }
        catch(error){
            console.log("error", error)
            setMessage(null)
        }
    }

    useEffect(()=>{
        if(currUser)
            getText()
    },[currUser])

  useEffect(() => {
setCounter(counter+1)
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const url = "http://localhost:3000/dashboard";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `${token}`
          }
        });

        if (!response.ok) throw new Error("Failed to fetch profile");

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchProfile();
    console.log("counter" , counter , message ,profile);

  }, [message]);

  if (!profile) return <div>Loading...</div>;

    return(
      <div>
          <div>{message}</div>
        <div>
        <h1>Profile</h1>
        <p>Email: {profile.email}</p>
        <p>name: {profile.name}</p>
        <p>city: {profile.city}</p>
        <p>phone: {profile.phone}</p>

      </div>
      </div>

    )
}
export default PrivateText
