// import { useNavigate } from "react-router-dom"

function Home(props:any) {
    
    const {loggedIn, email} = props;
    // const navigate = useNavigate();

    const onButtonClick = ()=> {
        //we'll update the function later
    }

    return (
        <div>
            <div>
                <p className="font-bold text-4xl my-6">Welcome!</p>
            </div>
            <div><p className="text-xl my-6">This is home page.</p></div>
            <div>
                <input
                    className="bg-red-400 border-red-400 border-2 p-1 rounded"
                    type='button'
                    onClick={onButtonClick}
                    value={loggedIn ? "Log out" : "Log in"}
                />
                {loggedIn ? <div>Your email address is {email}</div> : <div />}
            </div>
        </div>
    )
}

export default Home
