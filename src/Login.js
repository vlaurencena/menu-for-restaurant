import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showGetCredentialsDetails, setShowGetCredentialsDetails] = useState(false);

    const loginUser = (email, password) => {
        axios.get(`http://challenge-react.alkemy.org/`, {
            params: {
                email: email,
                password: password,
            }
        })
            .then(function (response) {
                props.setToken(response.data.token);
            })
            .catch(function (error) {
                error.response.status === 401 && notifyUser("Click on Get credentials");
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(email, password);
    }

    const notifyUser = (text) => toast.error(text, {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const handleGetCredentials = () => {
        setShowGetCredentialsDetails(true);
    }

    const handleAutocomplete = () => {
        setEmail("challenge@alkemy.org");
        setPassword("react");
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form className="login-wrapper__login-form" onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input required onChange={e => setEmail(e.target.value)} value={email} type="email" />
                </label>
                <label>
                    <p>Password</p>
                    <input required onChange={e => setPassword(e.target.value)} value={password} type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <p onClick={handleGetCredentials}>Get credentials</p>
            </form>
            <div className={showGetCredentialsDetails ? null : "get-credentiales-hidden"}>
                <p>This is not a real login, so please introduce this credentials:</p>
                <ul>
                    <li>Email: challenge@alkemy.org</li>
                    <li>Password: react</li>
                </ul>
                <p>Or we can do it for you: <button className="autocomplete-button" onClick={handleAutocomplete}>Autocomplete</button></p>
                
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;