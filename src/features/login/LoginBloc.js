import {useState} from 'react';

export const LoginBloc = (repo) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {userAuthentication} = repo();

    const onAuthenticate = async (userName, password) => {
        if (!userName || !password) {
            setError("All field is required");
        }else{
            const result = await userAuthentication(userName, password);
            console.log(result);
        }
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return {
        userName,
        password,
        handleUserNameChange,
        handlePasswordChange,
        onAuthenticate,
        error
    };
};
