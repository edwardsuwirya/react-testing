import React from 'react';

const LoginScreen = ({bloc}) => {
    const {
        userName,
        password,
        handleUserNameChange,
        handlePasswordChange,
        onAuthenticate,
        error
    } = bloc();

    return (
        <div>
            User Name<br/>
            <input type="text" value={userName} onChange={handleUserNameChange}/><br/>
            Password<br/>
            <input type="password" value={password} onChange={handlePasswordChange}/><br/>
            <input type="button" value="Login" onClick={() => onAuthenticate(userName, password)}/>
            <span>{error}</span>
        </div>
    );
}

export default LoginScreen;
