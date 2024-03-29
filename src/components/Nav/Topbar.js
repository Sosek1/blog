import {useContext} from "react";
import {Link} from "react-router-dom";
import LoginContext from "../../store/login-context";
const Topbar = () => {
    const loginCtx = useContext(LoginContext);
    const textStyle = "font-sans text-h4-mobile font-h3-mobile text-dark/100";

    console.log(loginCtx.isLoggedIn, loginCtx.loginScreen)

    return (
        <header className="h-[60px] bg-light-900 ml-[20px] mr-[20px] flex items-center justify-between">
            <div className="flex flex-row">
                <p className="font-sans text-h2-mobile font-h2-mobile text-dark/100 mr-[10px]">Sosek</p>
                <p className="font-sans text-h2-mobile font-h2-mobile text-blue/700">Blog</p>
            </div>
            {!loginCtx.isLoggedIn && !loginCtx.loginScreen && <div className="flex flex-row">
                <Link to="/Login">
                    <p className={textStyle} onClick={() => loginCtx.onLoginScreen(true)}>Log in</p>
                </Link>
            </div>}
            {!loginCtx.isLoggedIn && loginCtx.loginScreen && <div className="flex flex-row">
                <Link to="/Homepage">
                    <p className={textStyle} onClick={() => loginCtx.onLoginScreen(false)}>Go back</p>
                </Link>
            </div>}
            {(loginCtx.isLoggedIn && !loginCtx.loginScreen) && <div className="flex flex-row">
                <Link to="/Homepage">
                    <p className={textStyle} onClick={()=>{loginCtx.onLoggedIn(false);loginCtx.onLoginScreen(false)}}>Log out</p>
                </Link>
            </div>}
        </header>
    )
}

export default Topbar;