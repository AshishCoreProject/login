import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Login(props:any){
    const [email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    // const navigate = useNavigate();
    
    const onButtonClick = ()=> {

        setEmailError("");
        setPasswordError("");

        if('' === email){
            setEmailError("Please Enter your email");
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Please enter a valid email!')
            
        }

        if('' === password){
            setPasswordError('Please Enter you password');
            return
        }

        if (password.length < 7) {
            setPasswordError('The password must be 8 characters or longer')
        }
         
    }

    return(
       <>
        <div>
            <p className="font-bold text-4xl text-red-500">Login</p>
        </div>
        <br />
        <div className="flex flex-col">
            <input
                className="text-slate-100 p-2 rounded" 
                value={email}
                placeholder="Enter your email here"
                onChange={(e)=> setEmail(e.target.value)}
            />
            <label className="text-red-400 h-4 text-sm text-left">{emailError}</label>

        </div>
        <br />
        <div className="flex flex-col">
            <input 
                className="text-slate-200 p-2 rounded"
                value={password}
                placeholder="Enter your password here"
                onChange={(e)=> setPassword(e.target.value)}
             />
             <label className="text-red-400 h-4  text-sm text-left">{passwordError}</label>
        </div>
        <br />
        <div>
            <input 
                className="bg-red-400 border-red-400 border-2 p-1 rounded"
                type="button" onClick={onButtonClick} value={'Log in'} />
        </div>
       </>
    )
}
export default Login;